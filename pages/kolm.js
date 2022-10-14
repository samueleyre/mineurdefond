import ProjectRockComponent from "../components/project/project-rock.component";
import ProjectLayoutComponent from "../components/project/project-layout.component";

function Kolm() {
    return <>
        <ProjectRockComponent title="Kolm" description="ChambreRock"/>
        <ProjectLayoutComponent>
            <p className="text-xl md:w-10/12 text-center m-auto mb-10">
                Tantôt acoustique, tantôt électrique,
                associant la richesse sonore d’un orchestre de chambre et la puissance d’un « powertrio »,
                KOLM flirte aussi bien avec la liberté du free jazz,
                l’énergie d’un rock progressif obsessionnel que la virtuosité des musiques contemporaines.
            </p>
            <div className="max-w-full flex justify-center mt-20">
                <iframe style={{border: 0, width: "350px", height: "350px"}} src="https://bandcamp.com/EmbeddedPlayer/album=1346742801/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://collectifmineursdefond.bandcamp.com/album/kolm-2022">KOLM - 2022 by KOLM</a></iframe>
            </div>
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
                « Ficelé comme un Power Trio, KOLM se joue des règles et des codes. Assauts électriques, saillies acoustiques nourrissent la richesse sonore d’un groupe peu en reste d’inventivité. KOLM convoque les libertés du free jazz, l’énergie fusion et la virtuosité des musiques d’avant-garde. Loïc Vergnaux, clarinettes, Vincent Duchosal, guitare électrique, et Adrien Desse, batterie, ont posé ce trio donc au-delà des codes. Aucun rôle n’est défini par instrument. Les pistes ouvertes sont ainsi fascinantes. »
            </p>
            <p className="font-bold text-center p-5">
                Guillaume Malvoisin – Point Break
            </p>
            <figure
                className="flex justify-center mt-16">
                <iframe width="700" height="400" src="https://www.youtube.com/embed/a6h9DIlvb1g?feature=oembed"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""></iframe>
            </figure>
            <p className="text-sm text-center p-2">
                Teaser
            </p>
        </ProjectLayoutComponent>
    </>
}

export default Kolm
