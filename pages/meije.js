import ProjectRockComponent from "../components/project/project-rock.component";
import ProjectLayoutComponent from "../components/project/project-layout.component";


export default function Meije() {
    return <>
        <ProjectRockComponent title="Meije" description="Trio granitique"/>
        <ProjectLayoutComponent>
            <p className="text-xl md:w-10/12 text-center m-auto mb-10">
                Fruit de plusieurs rencontres improvisées, Meije se dessine à partir de recherches sur des sonorités et textures âpres et envoûtantes. L’univers de ce trio aérien et aquatique, parsemé de compositions minimalistes, peint de grands espaces sonores et des paysages oniriques.            </p>
            <div className="flex flex-wrap justify-evenly items-center mt-16 mb-16">
                <p className="flex flex-col sm:p-20 text-xl w-5/12 mb-4">
                    <span className="flex flex-col pb-2">
                        <span className="font-bold block">Benjamin François</span>
                        Batterie
                    </span>
                    <span className="flex flex-col pb-2">
                    <span className="font-bold">Léa Ciechelski</span>
                        Saxophone alto, effets
                    </span>
                    <span className="flex flex-col pb-2">
                    <span className="font-bold">Vincent Duchosal</span>
                        Guitare électrique, guitare baryton, effets et préparations
                    </span>
                </p>
                <div className="max-w-full">
                    <img style={{width: "500px"}} src="images/zozio.webp" alt="Image de Zozio"/>
                </div>
                <div className="max-w-full flex justify-center mt-20">
                    <iframe style={{border: 0, width: "350px", height: "350px"}}
                            src="https://bandcamp.com/EmbeddedPlayer/album=1622716619/size=large/bgcol=ffffff/linkcol=333333/minimal=true/transparent=true/"
                            seamless><a href="https://collectifmineursdefond.bandcamp.com/album/le-vent-de-face-2">Le
                        Vent de Face by Tchoukadane</a></iframe>
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

