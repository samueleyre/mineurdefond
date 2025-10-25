import ProjectRockComponent from "../components/project/project-rock.component";
import ProjectLayoutComponent from "../components/project/project-layout.component";


export default function Terramare() {
    return <>
        <ProjectRockComponent title="Terra Mare" description="Folk des Alpes — Paolo Gauthier — Guitare-cithare, chant, tambour, poèmes & musique"/>
        <ProjectLayoutComponent>
            <p className="text-xl md:w-10/12 text-center m-auto mb-10">
                <b>Terra Mare</b> raconte le départ, les retrouvailles, les montagnes, la mer et la mémoire des migrations.
            </p>

            <div className="max-w-full flex justify-center mt-20">
                <img className="image-clip-3" style={{width: "500px"}} src="images/terra_mare4.webp"
                     alt="Affiche de Terra mare"/>
            </div>

            <p className="text-xl md:w-10/12 text-center m-auto my-12">
                Pour origine l’écriture d’une prose où se manifeste l’inconscient, le chansonnier <b>Paolo Gauthier</b> se laisse traverser par les motifs de la contemplation et de la romance. Rythmé par une guitare-cithare unique, la rencontre avec le trio à cordes inédit de <b>Yurie Hu</b>, <b>Maëlle Le Gall</b> et <b>Marion Ruault</b> à pour point de départ une passion partagée pour la poésie et la musique picturale.
            </p>

            <figure
                className="flex justify-center mt-16">
                <iframe width="1200" height="500" src="https://www.youtube.com/embed/EO6FItBSHlg?si=LGvidSlhlx1sFQ-R?feature=oembed"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""></iframe>
            </figure>

            <div className="flex flex-wrap justify-evenly items-center mt-16 mb-16">
                <p className="flex flex-col p-5 text-xl" style={{maxWidth: "500px"}}>
                    <span><span className="font-bold">Paolo Gauthier</span> // voix, poème, musique, guitare-cithare et violon  </span>
                    <span><span className="font-bold">Yurie Hu</span> // violon</span>
                    <span><span className="font-bold">Maëlle Le Gall</span> // violoncelle</span>
                    <span><span className="font-bold">Marion Ruault</span> // contrebasse</span>
                </p>
                <div className="max-w-full">
                    <img className="image-clip-3" style={{width: "500px"}} src="images/terra_mare3.webp"
                         alt="Photo de groupe - Terra Mare"/>
                </div>
            </div>

            <p className="text-center mb-8 pl-4 pr-4 text-xl">
                Contacts : <a className="font-bold" href="mailto:quatuorterramare@gmail.com">quatuorterramare@gmail.com</a>, <a className="font-bold" href="mailto:gauthier.paolo@gmail.com">gauthier.paolo@gmail.com</a>
                <br/>
                Youtube : <a className="font-bold" rel="noreferrer" target="_blank" href="https://youtube.com/@quatuorterramare" >@quatuorterramare</a>
            </p>


        </ProjectLayoutComponent>
    </>
}

