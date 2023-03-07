import Head from 'next/head';
import styles from '../styles/Home.module.scss'

import { Holistic } from '@mediapipe/holistic';
import * as holistic from '@mediapipe/holistic';
import * as cam from '@mediapipe/camera_utils';
import Webcam from 'react-webcam';
import { useRef, useEffect } from 'react';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';

export default function VirtualTeacher() {
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
    canvasCtx.drawImage(
      // results.image,
      results.segmentationMask,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    );
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
      }
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
      webcamRef.current !== null
    ) {
      camera = new cam.Camera(webcamRef.current.video, {
        onFrame: async () => {
          await holistic.send({ image: webcamRef.current.video });
        },
        width: 600,
        height: 600,
      });

      camera.start();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Virtual Teacher Fuzzzapp</title>
        <meta name='description' content='Super fuzzzapp virtual teacher' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>yo</p>
        </div>

        <Webcam
          ref={webcamRef}
          style={{
            position: 'absolute',
            margin: '0 auto',
            left: 0,
            right: 0,
            textAlign: 'center',
            width: 600,
            height: 600,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            margin: '0 auto',
            left: 0,
            right: 0,
            textAlign: 'center',
            width: 600,
            height: 600,
          }}
        />
      </main>
    </>
  );
}
