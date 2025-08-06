import ProjectRockComponent from "../components/project/project-rock.component";
import ProjectLayoutComponent from "../components/project/project-layout.component";

function Kolm() {
    return <>
        <ProjectRockComponent title="Thibault Gomez Quintet" description="« RÊVE GÉNÉRAL ! »"/>
        <ProjectLayoutComponent>
            <p className="text-xl md:w-10/12 text-center m-auto mb-10">
                Ce quintet voit le jour sous l’impulsion de Robinson Khoury et Thibault Gomez après une première rencontre en région Rhône-Alpes.            </p>
            <div className="flex flex-wrap justify-evenly items-center mt-16 mb-16">
                <p className="flex flex-col p-20 text-xl">
                    <span className="flex flex-col pb-2">
                        <span className="font-bold block">Thibault Gomez</span>
                        Piano
                    </span>
                    <span className="flex flex-col pb-2">
                        <span className="font-bold">Robinson Khoury</span>
                        Trombone
                    </span>
                    <span className="flex flex-col pb-2">
                        <span className="font-bold">Pierre-Marie Lapprand</span>
                        Saxophones
                    </span>
                    <span className="flex flex-col pb-2">
                        <span className="font-bold">Etienne Renard</span>
                        Contrebasse
                    </span>
                    <span className="flex flex-col pb-2">
                        <span className="font-bold">Benoît Joblot</span>
                        Batterie
                    </span>
                </p>
                <div className="max-w-full">
                    <img style={{width: "600px"}} src="images/tbq.jpg" alt="Affiche de Thibault Gomez Quintet"/>
                </div>
            </div>
            <p className="text-center m-auto text-xl md:w-10/12 mt-10">
                Afin de laisser place à l’imaginaire et au récit, Thibault Gomez offre à ses compositions un développement ample et progressif, où affleurent des sonorités inconnues. S’écrit alors un jazz résolument contemporain influencé par les musiques improvisées et à l’originalité espiègle. S’il manie à la perfection le vocable pianistique traditionnel, Thibault Gomez est aussi un fervent praticien du piano préparé. Accordant une belle place au tromboniste Robinson Khoury et au saxophoniste Pierre-Marie Lapprand, et avec le soutien d’Etienne Renard à la contrebasse et Benoît Joblot à la batterie, il porte son quintette à une fusion digne de la formation orchestrale. D’intenses et lumineuses improvisations alternent avec des séquences aux accents rythmiques puissants et aux tournes persistantes, dans une atmosphère onirique. Alliant fougue, sensibilité et exigence technique.
            </p>
            <figure
                className="flex justify-center mt-16">
                <iframe width="700" height="400" src="https://www.youtube.com/embed/HeUdPg9vFO0?feature=oembed"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""></iframe>
            </figure>
            <p className="text-center m-auto text-xl md:w-10/12 mt-12 mb-12">
                Ainsi, ces cinq jeunes musiciens proposent une expérience unique à chaque concert.
                Ils enregistrent en Août 2016 leur premier album au studio de la Buissone qui est sorti sur le label Parrallel Record en Avril 2018.
            </p>
            <div className="flex flex-wrap justify-between">
                <img className="p-2 w-4/12" src="images/benoit.jpg" alt=""/>
                <img className="p-2 w-4/12" src="images/robinson.jpg" alt=""/>
                <img className="p-2 w-4/12" src="images/pierre-marie.jpg" alt=""/>
            </div>
            <div className="flex flex-wrap justify-between">
                <img className="p-2 w-6/12" src="images/etienne.jpg" alt=""/>
                <img className="p-2 w-6/12" src="images/thibault.jpg" alt=""/>
            </div>


        </ProjectLayoutComponent>
    </>
}

export default Kolm
