import Head from "next/head";
import dynamic from "next/dynamic";
import process from "parallax-js";

// let exploration = false;


// const parent = document.getElementById('exploration');
// const parallax = new Parallax(parent, {
//     invertX: true,
//     invertY: true,
//     limitX: 26,
//     limitY: 5,
// });
// exploration = true;
// document.getElementsByClassName('homepage')[0].style.display = 'none';
// document.getElementsByClassName('nav-title')[0].style.display = 'none';
// document.getElementsByTagName('body')[0].style.backgroundImage = 'none';
// document.getElementsByTagName('body')[0].style.background = 'black';
// const elements = document.getElementsByClassName('exploration');
// for (const e of elements) {
//     e.classList.add('exploration--mode')
// }

const ExplorationComponent = dynamic(() => import('../components/home/home-exploration.component'), { ssr: false })


function Exploration() {
    return (
        <>
            <Head>
                <title>Mineurs de fond | Exploration</title>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap" rel="stylesheet"></link>
            </Head>
            <ExplorationComponent />
        </>

    )
}

export default Exploration
