import dynamic from "next/dynamic";
import ProjectRockComponent from "../components/project/project-rock.component";
import Head from "next/head";
import ProjectLayoutComponent from "../components/project/project-layout.component";
const NavComponent = dynamic(() => import('../components/main/nav.component'), {ssr: false})

function Madamramdam() {
    return <>
        <Head>
            <title>Mineurs de fond | Madam Ramdam</title>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"/>
        </Head>
        <NavComponent mode="dark" position="fixed" />
        <ProjectRockComponent
            title="Madam Ramdam"
            description="Bal jukebox"/>
        <ProjectLayoutComponent>
            <p>
                Quartet de musiques-à-danser formé par des amis musiciens sur les pas d’une Valse à la Jacques, d’un Rock à Eddie ou d’une Milonga Portuaire, dans l’envie de perpétuer et partager une danse, celle des fêtes populaires, en revisitant les rythmes et les mots qui ont marqués les âges, d’içi, de là-bas, de nos Aïeux à nos Contemporains.
            </p>
            <p className="pt-10 text-center font-bold">
                Venez trainer une semelle et prêter une oreille à MaDam RamDam !
            </p>
            <figure
                className="flex justify-center mt-10">
                <iframe width="700" height="400" src="https://www.youtube.com/embed/CrXQrFW27xY?feature=oembed"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""></iframe>
            </figure>
            <p className="pt-10">
                MaDam RamDam est né du désir de perpétuer et partager une danse, celle des fêtes populaires. À la manière du Bal Musette dans le Paris des années cinquante ou de la Fête du Village de nos campagnes, ces quatre compères nous font revivre les rockabilly, valses, milongas, funk, cha-cha et bourrées de nos tendres anciens sous l’œil de verre bon-enfant d’un swing incandescent et plein de fougue. De cette alchimie surgissent quelques cris-corbeaux, exaltés par trois funambules de jazz multi instrumentistes, dans un univers quasi-surréaliste où l’imagination des danseurs et danseuses entraîne toujours un peu plus loin « L’Âme Dame RamDam ».
            </p>
            <div className="flex flex-wrap justify-evenly mt-10">
                <p style={{width: "400px"}}  className="flex flex-col p-10">
                    <span><b>Paolo Gauthier</b> : Chants, guitares, percussions</span>
                    <span><b>Benoît Joblot</b> : Batterie, percussions, chœurs</span>
                    <span><b>Thibault Gomez</b> : Orgue, Accordéon, chœurs</span>
                    <span><b>Pierre-Marie Lapprand</b> : Saxophones, chœurs</span>
                    <span>Invitée : <b>Climène Zarkan</b> : Chant, percussions</span>
                </p>
                <img style={{width: "500px"}} className="max-w-full" src="images/maDamRamDam_groupe.jpg" alt="Affiche de Tel un lys parmi les épines…"/>
            </div>
            <div className="flex flex-wrap pt-16 pd-4 justify-around">
                <p className="text-3xl font-amatic">
                    » Pour mieux digérer, danser ! «
                </p>
                <p className="text-3xl font-amatic">
                    « Jukebox-Sans-Frontières »
                </p>
            </div>
        </ProjectLayoutComponent>
    </>
}

export default Madamramdam
