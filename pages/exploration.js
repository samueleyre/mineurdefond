import Head from "next/head";
import dynamic from "next/dynamic";
import HeadComponent from "../components/main/head.component";


const ExplorationComponent = dynamic(() => import('../components/home/exploration-main.component'), {ssr: false})


function Exploration() {
    return (
        <>
            <HeadComponent title="Exploration"/>
            <style jsx global>{`
            body {
              overflow: hidden
            }
          `}</style>
            <ExplorationComponent/>
        </>
    )
}

export default Exploration
