import ProjectRockComponent from "../components/project/project-rock.component";
import ProjectLayoutComponent from "../components/project/project-layout.component";


export default function Zozio() {
    return <>
        <ProjectRockComponent title="Zozio" description="Musique chaloupée / Séga du crépuscule / Chanson douce électrique"/>
        <ProjectLayoutComponent>
            <p className="text-xl md:w-10/12 text-center m-auto mb-10">
                Nourri des musiques de La Réunion, du Mexique, d’Europe, ZOZIO puise son énergie dans les mélodies traditionnelles de ces différents pays pour créer une musique originale, singulière, dansante, capable de faire remuer les plumes de tout oiseau de nuit souhaitant tanguer, piafffer, rouler, chavirer
            </p>
            <div className="flex flex-wrap justify-evenly items-center mt-16 mb-16">
                <p className="flex flex-col sm:p-20 text-xl w-5/12 mb-4">
                    <span className="flex flex-col pb-2">
                        <span className="font-bold block">Benoît Joblot</span>
                        Batterie, voix
                    </span>
                    <span className="flex flex-col pb-2">
                        <span className="font-bold">Vincent Duchosal</span>
                        Guitare électrique, voix
                    </span>
                    <span className="flex flex-col pb-2">
                        <span className="font-bold">Romane Déconfin</span>
                        Flûte, accordéon, percussions et voix
                    </span>
                    <span className="flex flex-col pb-2">
                        <span className="font-bold">Louis Prado</span>
                        Uku-basse, voix
                    </span>
                    <span className="flex flex-col pb-2">
                        <span className="font-bold">Climène Zarkan</span>
                        Clavier, percussions et voix
                    </span>
                </p>
                <div className="max-w-full">
                    <img style={{width: "500px"}} src="images/zozio.webp" alt="Image de Zozio"/>
                </div>
            </div>
            <figure
                className="flex justify-center mt-16">
                <iframe width="700" height="400" src="https://www.youtube.com/embed/pD4rJXb_Xy4?feature=oembed"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""></iframe>
            </figure>
        </ProjectLayoutComponent>
    </>
}

