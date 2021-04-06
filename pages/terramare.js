import dynamic from "next/dynamic";
import ProjectRockComponent from "../components/project/project-rock.component";
import Head from "next/head";
import ProjectLayoutComponent from "../components/project/project-layout.component";
const NavComponent = dynamic(() => import('../components/main/nav.component'), {ssr: false})

function Kolm() {
    return <>
        <Head>
            <title>Mineurs de fond | Terra Mare</title>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"/>
        </Head>
        <NavComponent mode="dark" position="fixed" />
        <ProjectRockComponent title="Terra Mare" description="Paolo Gauthier – Chansons – Guitare-cithare"/>
        <ProjectLayoutComponent>
            <p className="text-xl md:w-10/12 text-center m-auto mb-10">
                Chansons spirituelles, rustiques & mystérieuses & lutherie imaginaire
            </p>
            <div className="flex flex-wrap justify-evenly items-center mt-16 mb-16">
                <p className="flex flex-col p-20 text-xl w-5/12">
                    <span className="flex flex-col pb-2">
                        <span className="font-bold block">Paolo Gauthier</span>
                        Guitare-cithare, chant, tambour, poèmes & musique
                    </span>
                    <span className="flex flex-col pb-2">
                        <span className="font-bold">Clément Lemêtre</span>
                        Son
                    </span>
                    <span className="flex flex-col pb-2">
                        <span className="font-bold">Paolo Gauthier, Elodie Guibert</span>
                        Image
                    </span>
                    <span className="flex flex-col pb-2">
                        <span className="font-bold">Laurent Huchard</span>
                        Lutherie
                    </span>
                </p>
                <div className="max-w-full">
                    <img style={{width: "500px"}} src="images/terramare.jpg" alt="Affiche de Tchoukadane"/>
                </div>
            </div>
            <figure
                className="flex justify-center mt-16">
                <iframe width="700" height="400" src="https://www.youtube.com/embed/NmgIoHzkJLo?feature=oembed"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""></iframe>
            </figure>
            <p className="text-center m-auto text-xl md:w-6/12 mt-16">
                C’est à l’aveugle et à la confiance que s’est faite cette rencontre, au départ autour de ballades jazz pour finalement s’aventurer dans des paysages qu’ils croyaient connaître, mais qu’ils ne connaissaient pas.
            </p>
            <div className="max-w-full flex justify-center mt-20">
                <iframe style={{border: 0, width: "350px", height: "350px"}} src="https://bandcamp.com/EmbeddedPlayer/album=3924753192/size=large/bgcol=ffffff/linkcol=333333/minimal=true/transparent=true/" seamless><a href="https://collectifmineursdefond.bandcamp.com/album/le-vent-de-face-2">Terra Mare by paolo gauthier</a></iframe>
            </div>
            <p className="text-center font-amatic text-lg mt-16">El liuervehc tse ruecuod ellec iuq ehcuot el rueoc te tirpse’l sed sertê sésselb etroppa xiap te nosiréug</p>
        </ProjectLayoutComponent>
    </>
}

export default Kolm
