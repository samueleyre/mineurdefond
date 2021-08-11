import Head from "next/head";
import dynamic from "next/dynamic";
import HeadComponent from "../components/main/head.component";


const ExplorationComponent = dynamic(() => import('../components/home/exploration-main.component'), {ssr: false})
const NavComponent = dynamic(() => import('../components/main/nav.component'), {ssr: false})

function Exploration() {
    return (
        <>
            <HeadComponent title="Exploration"/>
            <style jsx global>{`
            body {
              overflow: hidden
            }
          `}</style>
            <NavComponent mode="light" mobile_only="true" />
            <ExplorationComponent/>
        </>
    )
}

export default Exploration
