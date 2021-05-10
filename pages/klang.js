import dynamic from "next/dynamic";
import ProjectRockComponent from "../components/project/project-rock.component";
import Head from "next/head";
import ProjectLayoutComponent from "../components/project/project-layout.component";

function Klang() {
    return <>
        <ProjectRockComponent title="Klang" description="Née de l’impact entre arts visuels et sonores, KLANG est efficace comme une onomatopée et frappante comme sa sonorité"/>
        <ProjectLayoutComponent>
            <p>
                KLANG, qui se traduit « son » en allemand » est une initiative curatoriale portée par Violette Gillet, libre de forme suivant l’intuition de nouvelles rencontres entre arts visuels et musique expérimentale.
            </p>
            <h2 className="text-center">Tel un lys parmi les épines…</h2>
            <p className="text-center">
                exposition visuelle et sonore
            </p>
            <p className="text-center">
                8-18 décembre 2018 – Passage Guigon, Paris 12e
            </p>
            <div className="flex flex-wrap justify-evenly mt-10">
                <img style={{width: "500px"}} className="max-w-full" src="images/klang.png" alt="Affiche de Tel un lys parmi les épines…"/>
                <p className="flex flex-col p-20">
                    <span className="pb-2">avec les oeuvres de</span>
                    <span className="font-bold">Margot Darvogne</span>
                    <span className="font-bold">John Deneuve</span>
                    <span className="font-bold">Thibault Gomez</span>
                    <span className="font-bold">Pauline Hisbacq</span>
                    <span className="font-bold">Ilanit Illouz</span>
                    <span className="font-bold">Pierre Juillard</span>
                    <span className="font-bold">Timothée Quost</span>
                    <span className="font-bold">Théophile Stern</span>
                    <span className="font-bold">Luise Volkmann</span>
                </p>
            </div>
            <h2 className="text-center">SILVERBACK #1</h2>
            <p className="text-center">
                14 avril 2018 – La Générale Nord-Est, Paris 11e
            </p>
            <p className="text-center">
                carte blanche à Luise Volkmann
            </p>
            <div className="flex flex-wrap justify-evenly mt-10">
                <p style={{width: "400px"}} className="flex flex-col justify-center p-10">
                    <span><b>Luise Volkmann/Paul Jarret/Loic Vergnaux</b> (trio musique improvisée)</span>
                    <span><b>Timothée Quost solo</b> (trompette, no-input)</span>
                    <span><b>LEONE Sauvage</b></span>
                    <span>avec <b>Marie Thiébault</b> (comédienne) et des projections <b>Violette Gillet</b></span>
                    <span>Ingénieure du son : <b>Anais Georgel</b></span>
                </p>
                <img style={{width: "500px"}} className="max-w-full" src="images/klang_silverback.jpg" alt="Affiche de SILVERBACK #1"/>
            </div>
            <p className="pt-6">
                Le Silverback ou « dos argenté » est le mâle dominant des gorilles. Il peut atteindre jusqu’à 2 m en station debout, 3 m d’envergure et 250 kg. En charge du groupe, il assure le maintien et la postérité de celui-ci grâce à un système autocratique. Il procède par intimidation avec son cri de guerre et est porteur de sagesse. L’espèce, bien que d’une grande stabilité sociale, est en voie d’extinction.
            </p>
        </ProjectLayoutComponent>
    </>
}

export default Klang
