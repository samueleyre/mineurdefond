import Head from "next/head";
import dynamic from "next/dynamic";


const ExplorationComponent = dynamic(() => import('../components/home/exploration-main.component'), {ssr: false})


function Exploration() {
    return (
        <>
            <Head>
                <title>Mineurs de fond | Exploration</title>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap"
                      rel="stylesheet"></link>
            </Head>
            <ExplorationComponent/>
        </>
    )
}

export default Exploration
