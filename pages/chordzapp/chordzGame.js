import Head from 'next/head'
import { useEffect, useState } from 'react';

import styles from '../../styles/Home.module.scss';

import useLang from '../hooks/useLang';
import AsideNav from '../../components/nav/asideNav';
import Transition from '../../components/transition';


export default function ChordzGame() {
    const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (
      (playerPosition.x === 2 && playerPosition.y === 2) ||
      (playerPosition.x === 3 && playerPosition.y === 2) ||
      (playerPosition.x === 2 && playerPosition.y === 3) ||
      (playerPosition.x === 3 && playerPosition.y === 3)
    ) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  }, [playerPosition]);

  const handleKeyDown = (e) => {
    e.preventDefault();
    const { key } = e;

    if (key === 'ArrowUp') {
      setPlayerPosition((prevPosition) => ({
        x: prevPosition.x,
        y: prevPosition.y + 1,
      }));
    } else if (key === 'ArrowDown') {
      setPlayerPosition((prevPosition) => ({
        x: prevPosition.x,
        y: prevPosition.y - 1,
      }));
    } else if (key === 'ArrowLeft') {
      setPlayerPosition((prevPosition) => ({
        x: prevPosition.x - 1,
        y: prevPosition.y,
      }));
    } else if (key === 'ArrowRight') {
      setPlayerPosition((prevPosition) => ({
        x: prevPosition.x + 1,
        y: prevPosition.y,
      }));
    }
  };

    return (
        <Transition>
            <Head>
                <title>Chordzapp - chords learning tool</title>
                <meta
                    name="description"
                    content="Chordzapp - chords ai techaer"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.apps}>
                <AsideNav
                    title={'game'}
                    desc={useLang('chordzappAiDesc')}
                />
                <div className={styles.apps__content}>

                <div onKeyDown={handleKeyDown} tabIndex={0}>
      <div style={{ position: 'relative', width: '400px', height: '400px', border: '1px solid black' }}>
        {showMessage && (
          <div style={{ position: 'absolute', top: '100px', left: '100px', backgroundColor: 'white' }}>Hello</div>
        )}
        <div
          style={{
            position: 'absolute',
            top: playerPosition.y * 40 + 'px',
            left: playerPosition.x * 40 + 'px',
            width: '40px',
            height: '40px',
            backgroundColor: 'blue',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '120px',
            left: '120px',
            width: '80px',
            height: '80px',
            backgroundColor: 'red',
          }}
        />
      </div>
    </div>


                </div>
            </div>
        </Transition>
    )
}
