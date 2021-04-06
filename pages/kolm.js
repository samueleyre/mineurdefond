import dynamic from "next/dynamic";
import ProjectRockComponent from "../components/project/project-rock.component";
import Head from "next/head";
import ProjectLayoutComponent from "../components/project/project-layout.component";
const NavComponent = dynamic(() => import('../components/main/nav.component'), {ssr: false})

function Kolm() {
    return <>
        <Head>
            <title>Mineurs de fond | Kolm</title>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap" rel="stylesheet"></link>
        </Head>
        <NavComponent mode="dark" position="fixed" />
        <ProjectRockComponent title="Kolm" description="ChambreRock"/>
        <ProjectLayoutComponent>
            <p className="text-xl md:w-10/12 text-center m-auto mb-10">
                Tantôt acoustique, tantôt électrique,
                associant la richesse sonore d’un orchestre de chambre et la puissance d’un « powertrio »,
                KOLM flirte aussi bien avec la liberté du free jazz,
                l’énergie d’un rock progressif obsessionnel que la virtuosité des musiques contemporaines.
            </p>
            <div className="flex flex-wrap justify-evenly items-center mt-16 mb-16">
                <p className="flex flex-col p-20 text-xl">
                    <span><span className="font-bold">Adrien Desse</span> // Batterie  </span>
                    <span><span className="font-bold">Vincent Duchosal</span> // guitare électrique</span>
                    <span><span className="font-bold">Loïc Vergnaux</span> // Clarinettes</span>
                </p>
                <div className="max-w-full">
                    <img style={{width: "500px"}} src="images/kolm.jpg" alt="Affiche de Kolm"/>
                    <p className="text-center text-sm p-2">© Médéric Roquesalane</p>
                </div>
            </div>
            <p className="text-center m-auto text-xl md:w-6/12">
                « C’est un trio ayant tété du conservatoire, des recherches en
                contrepoint et de quelques arcanes du Free from US mêlées à
                l’avant-garde frenchie »
            </p>
            <p className="font-bold text-center p-5">
                Guillaume Malvoisin – Point Break
            </p>
            <figure
                className="flex justify-center mt-16">
                <iframe width="700" height="400" src="https://www.youtube.com/embed/dXFOGTFvKOo?feature=oembed"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""></iframe>
            </figure>
            <p className="text-sm text-center p-2">
                Teaser
            </p>
            <div style={{width: "700px"}} className="max-w-full m-auto mt-20">
                <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/762726490&color=%230d0d14&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </div>
        </ProjectLayoutComponent>
    </>
}

export default Kolm
