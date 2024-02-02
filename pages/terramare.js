import ProjectRockComponent from "../components/project/project-rock.component";
import ProjectLayoutComponent from "../components/project/project-layout.component";


export default function Terramare() {
    return <>
        <ProjectRockComponent title="Terra Mare" description="Paolo Gauthier – Chansons – Guitare-cithare"/>
        <ProjectLayoutComponent>
            <p className="text-xl md:w-10/12 text-center m-auto mb-10">
                Chansons mystérieuses & lutherie imaginaire
            </p>
            <div className="flex flex-wrap justify-evenly items-center mt-16 mb-16">
                <p className="flex flex-col sm:p-20 text-xl w-5/12 mb-4">
                    <span className="flex flex-col pb-2">
                        <span className="font-bold block">Paolo Gauthier</span>
                        Guitare-cithare, chant, tambour, poèmes, musique & images
                    </span>
                    <span className="flex flex-col pb-2">
                        <span className="font-bold">Clément Lemêtre</span>
                        Son
                    </span>
                    <span className="flex flex-col pb-2">
                        <span className="font-bold">Laurent Huchard</span>
                        Lutherie
                    </span>
                </p>
                <div className="max-w-full">
                    <img style={{width: "500px"}} src="images/terra_mare2.webp" alt="Affiche de Terra mare"/>
                </div>
            </div>
            <p className="text-justify m-auto text-xl mt-16">
                Terra Mare est une échappée folk, guitare-voix, de l’auteur-compositeur-interprète Paolo Gauthier. Initié en 2018, l’artiste des Alpes du nord, se consacre avec tendresse à l’écriture de chansons dont la poésie fait se rencontrer les langues de ses ancêtres avec celles de ses rencontres, dessine de manière instinctive les émotions qu’éveille l’amour, la montagne, la mer, le départ, le retour, la mémoire et l’ivresse de l’errance.
            </p>
            <figure
                className="flex justify-center mt-16">
                <iframe width="1200" height="500" src="https://www.youtube.com/embed/NmgIoHzkJLo?feature=oembed"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""></iframe>
            </figure>
            <p className="text-justify m-auto text-xl mt-16">
                Sa guitare, de douze ou dix-huit cordes, est une une co-création avec le luthier Laurent Huchard et rappelle les intonations de la harpe ou de la cithare, inspire une musique des berceuses.
                <br/>
                <br/>
                Il enregistre un premier disque en 2020, Liuervehc, dans la chapelle de Montclar-Sur-Gervanne dans la Drôme. Les années suivantes sont ponctées de veillées dans des cafés associatifs, lieux collectifs et en église. Animé par sa culture montagnarde, le musicien organise une première tournée-à-pied en avril 2023 dans les chapelles du Limousin.
                <br/>
                <br/>
                Un deuxième disque a été enregistré, toujours avec Clément Lemêtre, dans la chapelle de La Jarjatte à Lus-La-Croix-Haute, en mai 2023 dans la Drôme. Terra Mare est membre & soutenu par le collectif Les Mineureuses en Savoie.
            </p>
            <div className="max-w-full flex justify-center mt-20">
                <iframe style={{border: 0, width: "350px", height: "350px"}} src="https://bandcamp.com/EmbeddedPlayer/album=534948509/size=large/bgcol=ffffff/linkcol=333333/minimal=true/transparent=true/" seamless><a href="https://terramare.bandcamp.com/album/liuervehc">Terra Mare by paolo gauthier</a></iframe>
            </div>

        </ProjectLayoutComponent>
    </>
}

