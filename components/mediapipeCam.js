import { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import { Holistic } from '@mediapipe/holistic';
import * as holistic from '@mediapipe/holistic';
import * as cam from '@mediapipe/camera_utils';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';

import styles from '../styles/Home.module.scss'

export default function MediapipeCam() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [IsModelLoaded, setIsModelLoaded] = useState(false);
  const [leftHandResults, setLeftHandResults] = useState([]);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };
  const handleStopClick = () => {
    setIsPlaying(false);
    setIsModelLoaded(false);
  };

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  let camera = null;

  function onResults(results) {
    //h & w canvas
    canvasRef.current.width = webcamRef.current.video.videoWidth;
    canvasRef.current.height = webcamRef.current.video.videoHeight;

    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext('2d');
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

    if(results.segmentationMask instanceof Image || results.segmentationMask instanceof HTMLCanvasElement || results.segmentationMask instanceof HTMLImageElement || results.segmentationMask instanceof HTMLVideoElement) {
      //draw image after check if person is vissible for camera
      canvasCtx.drawImage(
      // results.image,
      results.segmentationMask,
      0,
      0,
      canvasElement.width,
      canvasElement.height
      );
    }
    // if (connect) {
    // Only overwrite existing pixels.
    canvasCtx.globalCompositeOperation = 'source-in';
    canvasCtx.fillStyle = 'transparent';
    canvasCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);

    // Only overwrite missing pixels.
    canvasCtx.globalCompositeOperation = 'destination-atop';
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    );

    canvasCtx.globalCompositeOperation = 'source-over';
    // connect(canvasCtx, results.poseLandmarks, holistic.POSE_CONNECTIONS, {
    //   color: '#00FF00',
    //   lineWidth: 4,
    // });
    // drawLandmarks(canvasCtx, results.poseLandmarks, {
    //   color: '#FF0000',
    //   lineWidth: 2,
    // });
    // connect(canvasCtx, results.faceLandmarks, holistic.FACEMESH_TESSELATION, {
    //   color: '#C0C0C070',
    //   lineWidth: 1,
    // });
    drawConnectors(
      canvasCtx,
      results.leftHandLandmarks,
      holistic.HAND_CONNECTIONS,
      {
        color: '#fff',
        lineWidth: 5,
      },
      setLeftHandResults(results.leftHandLandmarks)
    );
    drawLandmarks(canvasCtx, results.leftHandLandmarks, {
      color: '#fff',
      lineWidth: 2,
    });
    drawConnectors(
      canvasCtx,
      results.rightHandLandmarks,
      holistic.HAND_CONNECTIONS,
      {
        color: '#fff',
        lineWidth: 5,
      }
    );
    drawLandmarks(canvasCtx, results.rightHandLandmarks, {
      color: '#fff',
      lineWidth: 2,
    });
    // }
    canvasCtx.restore();
  }

  useEffect(() => {
    const holistic = new Holistic({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`;
      },
    });

    holistic.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: true,
      smoothSegmentation: true,
      refineFaceLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });
    holistic.onResults(onResults);

    if (
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null &&
      isPlaying
    ) {
      camera = new cam.Camera(webcamRef.current.video, {
        onFrame: async () => {
          if(webcamRef.current) {
            await holistic.send({ image: webcamRef.current.video });
            await setIsModelLoaded(true);
          }
        },
        width: 600,
        height: 600,
      });

      camera.start();
    }
  }, [isPlaying]);

  return (
      <div className={styles.webcam}>
        {isPlaying ? (
        <>
        <Webcam
          ref={webcamRef}
          style={{
            position: 'absolute',
            top: '53%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            margin: '0 auto',
            textAlign: 'center',
            width: '90%',
            height: 'fit-content',
            borderRadius: '15px',
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: '53%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            margin: '0 auto',
            textAlign: 'center',
            width: '90%',
            height: 'fit-content',
            borderRadius: '15px',
          }}
        />
        {
          !IsModelLoaded &&
          <div className={styles.webcam__loading}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000" height="48" viewBox="0 -960 960 960" width="48"><path d="M196-331q-20-36-28-72.5t-8-74.5q0-131 94.5-225.5T480-798h43l-80-80 39-39 149 149-149 149-40-40 79-79h-41q-107 0-183.5 76.5T220-478q0 29 5.5 55t13.5 49l-43 43ZM476-40 327-189l149-149 39 39-80 80h45q107 0 183.5-76.5T740-479q0-29-5-55t-15-49l43-43q20 36 28.5 72.5T800-479q0 131-94.5 225.5T480-159h-45l80 80-39 39Z"/></svg>
          </div>
        }
        {
           IsModelLoaded &&
           <div className={styles.webcam__info}>
            <div className={styles.webcam__info_results}>
                <p className={styles.webcam__info_results_text}>result:</p>
                <p className={styles.webcam__info_results_text}>D7</p>
            </div>
            <button className={styles.webcam__info_stop} onClick={handleStopClick}>stop</button>
            {/* {leftHandResults &&
            leftHandResults.map((result, index) => (
              <div key={index}>
                <p>x: {result.x}</p>
                <p>y: {result.y}</p>
              </div>
            ))} */}
          </div>
        }
        </>
        ) : (
        <div className={styles.webcam__showreel} onClick={handlePlayClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill='#000' height="48" viewBox="0 -960 960 960" width="48"><path d="m392-313 260-169-260-169v338ZM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680v-520H140v520Zm0 0v-520 520Z"/></svg>
        </div>
        )}
      </div>
  );
}
