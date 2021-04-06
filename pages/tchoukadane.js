import dynamic from "next/dynamic";
import ProjectRockComponent from "../components/project/project-rock.component";
import Head from "next/head";
import ProjectLayoutComponent from "../components/project/project-layout.component";
const NavComponent = dynamic(() => import('../components/main/nav.component'), {ssr: false})

function Kolm() {
    return <>
        <Head>
            <title>Mineurs de fond | Tchoukadane</title>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap" rel="stylesheet"></link>
        </Head>
        <NavComponent mode="dark" position="fixed" />
        <ProjectRockComponent title="Tchoukadane" description="Tandem chansonnier"/>
        <ProjectLayoutComponent>
            <p className="text-xl md:w-10/12 text-center m-auto mb-10">
                Tchoukadane propose un autre rapport à l’espace, au son et au texte que celui du concert, et entraîne par là l’auditeur et l’auditrice vers un conte musical singulier. Le Vent de Face est construit en miroir à deux voix et deux guitares autour de chansons et de textures sonores « abstraites » faisant dialoguer et s’influencer écriture et improvisation. Cette aventure musicale est née après la rencontre avec Edgardo Cardozo, Jean-François Vrod, Albert Marcœur et Benjamin Colin.
            </p>
            <h2 className="text-center">Veillée nouvelle</h2>
            <div className="flex flex-wrap justify-evenly items-center mt-16 mb-16">
                <p className="flex flex-col p-20 text-xl">
                    <span className="flex flex-col pb-2">
                        <span className="font-bold block">Paolo Gauthier & Vincent Duchosal</span>
                        Guitares et voix
                    </span>
                    <span className="flex flex-col pb-2">
                        <span className="font-bold">Paolo Gauthier</span>
                        Poèmes
                    </span>
                    <span className="flex flex-col pb-2">
                        <span className="font-bold">Tchoukadane</span>
                        Musique
                    </span>
                </p>
                <div className="max-w-full">
                    <img style={{width: "500px"}} src="images/tchoukadane.jpg" alt="Affiche de Tchoukadane"/>
                    <p className="text-center text-sm p-2">© Alex Crestey</p>
                </div>
            </div>
            <figure
                className="flex justify-center mt-16">
                <iframe width="700" height="400" src="https://www.youtube.com/embed/dSCmDhRXe8g?feature=oembed"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""></iframe>
            </figure>
            <h2 className="text-center">L’Avant-Veillée</h2>
            <p className="text-center m-auto text-xl md:w-6/12 mt-10">
                C’est à l’aveugle et à la confiance que s’est faite cette rencontre, au départ autour de ballades jazz pour finalement s’aventurer dans des paysages qu’ils croyaient connaître, mais qu’ils ne connaissaient pas.
            </p>
            <div className="max-w-full flex justify-center mt-20">
                <iframe style={{border: 0, width: "350px", height: "350px"}} src="https://bandcamp.com/EmbeddedPlayer/album=1622716619/size=large/bgcol=ffffff/linkcol=333333/minimal=true/transparent=true/" seamless><a href="https://collectifmineursdefond.bandcamp.com/album/le-vent-de-face-2">Le Vent de Face by Tchoukadane</a></iframe>
            </div>
        </ProjectLayoutComponent>
    </>
}

export default Kolm
