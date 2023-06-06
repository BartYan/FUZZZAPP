import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

import useLang from '../hooks/useLang';
import NavShorts from '../../components/nav/nav-shorts';
import AsideNav from '../../components/nav/asideNav';
import Transition from '../../components/transition';

// export async function getStaticProps(context) {
//     const fetchParams = {
//         mode: 'no-cors',
//         method: "post",
//         headers: {
//             "content-type": "application/json"
//         },
//         //   body: '0.5832604169845581,0.8792206645011902,-3.999200259841018e-07,0.0,0.6288155913352966,0.854025661945343,0.025876091793179512,0.0,0.6658138632774353,0.8057206869125366,0.02948438934981823,0.0,0.6787540912628174,0.7332387566566467,0.027764927595853806,0.0,0.6726076602935791,0.6829049587249756,0.025506196543574333,0.0,0.7011682987213135,0.8067655563354492,-0.004975150339305401,0.0,0.7152688503265381,0.6792581081390381,-0.010388839058578014,0.0,0.6941640377044678,0.6632382869720459,-0.0035027447156608105,0.0,0.6827796697616577,0.6892639398574829,0.004106671083718538,0.0,0.6885053515434265,0.8046397566795349,-0.022723045200109482,0.0,0.6995010375976562,0.6527712345123291,-0.030067196115851402,0.0,0.6720864176750183,0.6492294669151306,-0.017602061852812767,0.0,0.6642061471939087,0.6839784979820251,-0.005800939630717039,0.0,0.6680094003677368,0.7908855676651001,-0.03747957944869995,0.0,0.6818369030952454,0.6411173343658447,-0.04208211600780487,0.0,0.6532726287841797,0.6477537751197815,-0.022938719019293785,0.0,0.6437857747077942,0.689441442489624,-0.007903148420155048,0.0,0.639646053314209,0.7781006097793579,-0.0497405044734478,0.0,0.6496881246566772,0.6573780179023743,-0.050452884286642075,0.0,0.6293652057647705,0.6656556129455566,-0.035473402589559555,0.0,0.6199742555618286,0.7110483646392822,-0.0230907890945673,0.0'
//         // body: JSON.stringify({
//         //     query: `
//         //     {
//         //         data: '0.5832604169845581,0.8792206645011902,-3.999200259841018e-07,0.0,0.6288155913352966,0.854025661945343,0.025876091793179512,0.0,0.6658138632774353,0.8057206869125366,0.02948438934981823,0.0,0.6787540912628174,0.7332387566566467,0.027764927595853806,0.0,0.6726076602935791,0.6829049587249756,0.025506196543574333,0.0,0.7011682987213135,0.8067655563354492,-0.004975150339305401,0.0,0.7152688503265381,0.6792581081390381,-0.010388839058578014,0.0,0.6941640377044678,0.6632382869720459,-0.0035027447156608105,0.0,0.6827796697616577,0.6892639398574829,0.004106671083718538,0.0,0.6885053515434265,0.8046397566795349,-0.022723045200109482,0.0,0.6995010375976562,0.6527712345123291,-0.030067196115851402,0.0,0.6720864176750183,0.6492294669151306,-0.017602061852812767,0.0,0.6642061471939087,0.6839784979820251,-0.005800939630717039,0.0,0.6680094003677368,0.7908855676651001,-0.03747957944869995,0.0,0.6818369030952454,0.6411173343658447,-0.04208211600780487,0.0,0.6532726287841797,0.6477537751197815,-0.022938719019293785,0.0,0.6437857747077942,0.689441442489624,-0.007903148420155048,0.0,0.639646053314209,0.7781006097793579,-0.0497405044734478,0.0,0.6496881246566772,0.6573780179023743,-0.050452884286642075,0.0,0.6293652057647705,0.6656556129455566,-0.035473402589559555,0.0,0.6199742555618286,0.7110483646392822,-0.0230907890945673,0.0'
//         //     }`
//         //   })
//         body: JSON.stringify({
//             data: '0.5832604169845581,0.8792206645011902,-3.999200259841018e-07,0.0,0.6288155913352966,0.854025661945343,0.025876091793179512,0.0,0.6658138632774353,0.8057206869125366,0.02948438934981823,0.0,0.6787540912628174,0.7332387566566467,0.027764927595853806,0.0,0.6726076602935791,0.6829049587249756,0.025506196543574333,0.0,0.7011682987213135,0.8067655563354492,-0.004975150339305401,0.0,0.7152688503265381,0.6792581081390381,-0.010388839058578014,0.0,0.6941640377044678,0.6632382869720459,-0.0035027447156608105,0.0,0.6827796697616577,0.6892639398574829,0.004106671083718538,0.0,0.6885053515434265,0.8046397566795349,-0.022723045200109482,0.0,0.6995010375976562,0.6527712345123291,-0.030067196115851402,0.0,0.6720864176750183,0.6492294669151306,-0.017602061852812767,0.0,0.6642061471939087,0.6839784979820251,-0.005800939630717039,0.0,0.6680094003677368,0.7908855676651001,-0.03747957944869995,0.0,0.6818369030952454,0.6411173343658447,-0.04208211600780487,0.0,0.6532726287841797,0.6477537751197815,-0.022938719019293785,0.0,0.6437857747077942,0.689441442489624,-0.007903148420155048,0.0,0.639646053314209,0.7781006097793579,-0.0497405044734478,0.0,0.6496881246566772,0.6573780179023743,-0.050452884286642075,0.0,0.6293652057647705,0.6656556129455566,-0.035473402589559555,0.0,0.6199742555618286,0.7110483646392822,-0.0230907890945673,0.0'
//         })
//         // body: JSON.stringify(
//         //     '0.5832604169845581,0.8792206645011902,-3.999200259841018e-07,0.0,0.6288155913352966,0.854025661945343,0.025876091793179512,0.0,0.6658138632774353,0.8057206869125366,0.02948438934981823,0.0,0.6787540912628174,0.7332387566566467,0.027764927595853806,0.0,0.6726076602935791,0.6829049587249756,0.025506196543574333,0.0,0.7011682987213135,0.8067655563354492,-0.004975150339305401,0.0,0.7152688503265381,0.6792581081390381,-0.010388839058578014,0.0,0.6941640377044678,0.6632382869720459,-0.0035027447156608105,0.0,0.6827796697616577,0.6892639398574829,0.004106671083718538,0.0,0.6885053515434265,0.8046397566795349,-0.022723045200109482,0.0,0.6995010375976562,0.6527712345123291,-0.030067196115851402,0.0,0.6720864176750183,0.6492294669151306,-0.017602061852812767,0.0,0.6642061471939087,0.6839784979820251,-0.005800939630717039,0.0,0.6680094003677368,0.7908855676651001,-0.03747957944869995,0.0,0.6818369030952454,0.6411173343658447,-0.04208211600780487,0.0,0.6532726287841797,0.6477537751197815,-0.022938719019293785,0.0,0.6437857747077942,0.689441442489624,-0.007903148420155048,0.0,0.639646053314209,0.7781006097793579,-0.0497405044734478,0.0,0.6496881246566772,0.6573780179023743,-0.050452884286642075,0.0,0.6293652057647705,0.6656556129455566,-0.035473402589559555,0.0,0.6199742555618286,0.7110483646392822,-0.0230907890945673,0.0'
//         // )
//         // body: JSON.stringify({
//         //     query: `
//         //     {
//         //         "detail": [
//         //             {
//         //               "loc": [
//         //                 "string",
//         //                 0
//         //               ],
//         //               "msg": "string",
//         //               "type": "string"
//         //             }
//         //           ]
//         //     }`
//         // })
//     }
  
//     const res = await fetch(`http://localhost:8080/api/predict`, fetchParams);
//     const data = await res.json(); //blogposts is visible from deconstruvtion data
  
//     return {
//       props: data,
//     };
//   }

export default function ChordzAiTeacher() {

    // console.log('fetch post data', data)

    // const [test, setTest] = useState(false);
    // const [test2, setTest2] = useState(false);

    // useEffect(() => {
    //     async function GetImage(){
    //         const response = await fetch('http://localhost:8080/index?name=Bart', {
    //             mode: 'no-cors',
    //             // crossorigin: true,
    //             // redirect: "manual" ,
    //             method: "get",
                
    //             headers: {
    //                  "Content-Type": "application/json",
    //                  Accept: 'application/json',
    //             },
    //             // body: JSON.stringify({
    //             //     name: 'Bart'
    //             // })
    //         });
    //         const resp = await response.json();
    //         console.log('newresp', resp);
    //         }

    //     GetImage()


    //     // fetch('http://localhost:8080/index')
    //     //     .then(response => response.json())
    //     //     .then(data => setTest(data.total))
    //     //     .catch(rejected => {
    //     //         console.log(rejected);
    //     //     });
    //     fetch('http://localhost:8080/index?name=Bart', {
    //         mode: 'no-cors',
    //         // crossorigin: true,
    //         // redirect: "manual" ,
    //         method: "get",
            
    //         headers: {
    //              "Content-Type": "application/json",
    //              Accept: 'application/json',
    //         },
    //         // body: JSON.stringify({
    //         //     name: 'Bart'
    //         // })
    //     })
    //     .then((response) => response.json())
    //     .then((data) => setTest(data))
    //     // .then(response => {
    //     //     console.log("Result response ", response);
    //     //     return response.text()
    //     //   })
    //     //   .then((data) => {
    //     //     // resolve(data ? JSON.parse(data) : {})
    //     //     console.log("Result: ", data);
    //     //   })
    //     // .catch(rejected => {
    //     //     console.log(rejected)
    //     // });
    //     // .then((response) => JSON.stringify(response.text()))
    //     // .then((response) => JSON.parse(response.text()))
    //     // .then((response) => setTest(response.json()))

    //     // .then(response => response.json())
    //     // .then(response => console.log('repsonse', response))
    //     // .then(data => console.log('fetch get data', data))
    //     // .then(data => setTest(data))
    //     // .catch(rejected => {
    //     //     console.log(rejected)
    //     // });
    //     console.log('test',test)

    
    // }, []);


    // useEffect(() => {
    //     console.log('test2',test)
    
    // }, [test]);

    // const testFunc = (e) => {
    //     console.log('testFunc get',test)
    // }

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
                <NavShorts/>
                <AsideNav
                    title={useLang('chordzappAiMenuTitle')}
                    desc={useLang('chordzappAiMenuDesc')}
                />
                <div className={styles.apps__content}>
                    <main className={styles.apps__main}>
                        <div className={`${styles.baner} ${styles.baner__info}`}>
                            <div className={styles.baner__wrapp}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="48" fill="#000" viewBox="0 -960 960 960" width="48"><path d="M453-280h60v-240h-60v240Zm26.982-314q14.018 0 23.518-9.2T513-626q0-14.45-9.482-24.225-9.483-9.775-23.5-9.775-14.018 0-23.518 9.775T447-626q0 13.6 9.482 22.8 9.483 9.2 23.5 9.2Zm.284 514q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80Zm.234-60Q622-140 721-239.5t99-241Q820-622 721.188-721 622.375-820 480-820q-141 0-240.5 98.812Q140-622.375 140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z"/></svg>
                                <p className={styles.baner__desc}>
                                    {/* {useLang('chordzappAiMenuDesc')} */}
                                    Nullam id magna vitae arcu dapibus congue vel at diam. 
                                    Curabitur fermentum velit orci, quis pharetra diam ullamcorper tempor. 
                                    Suspendisse accumsan non felis venenatis elementum. 
                                    Nullam id magna vitae arcu dapibus congue vel at diam.
                                </p>
                            </div>
                        </div>
                        <article className={styles.apps__main_article}>
                            <h2 className={styles.apps__main_article_title}><span>01.</span> Major Seven</h2>
                            <p className={styles.apps__main_article_desc}>
                                Nullam id magna vitae arcu dapibus congue vel at diam. 
                                Curabitur fermentum velit orci, quis pharetra diam ullamcorper tempor. 
                                Suspendisse accumsan non felis venenatis elementum. 
                                Nullam id magna vitae arcu dapibus congue vel at diam. 
                            </p>
                            <div>

                            </div>
                        </article>
                        
                    </main>
                    <div className={styles.adds__aside}>
                    </div>
                </div>
            </div>
        </Transition>
    )
}
