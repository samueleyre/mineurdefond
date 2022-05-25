import ProjectRockComponent from "../components/project/project-rock.component";
import ProjectLayoutComponent from "../components/project/project-layout.component";
import FestivalEventComponent from "../components/festival/festival-event.component";

function FestivalDesPantomines() {
    return <>
        <ProjectRockComponent title="Le festival des Pantomines"
                              description="Du 13 au 15 août 2021 à Villaroger et Sainte-Foy en Savoie">
            <div className="m-auto">
                <img style={{filter: "brightness(1.3)"}} width="240px" src="images/festival_des.png" alt="Festival des pantomines"/>
                <img style={{filter: "brightness(1.3)"}} width="300px" src="images/pantomines.png" alt="Festival des pantomines"/>
            </div>

        </ProjectRockComponent>
        <ProjectLayoutComponent>
            <p className="text-xl pt-8 mb-8 pl-4 pr-4 bold">
            Le Festival des Pantomines revient en Haute-Tarentaise en août 2022 avec une série de
            concerts et spectacles détonnants !
            </p>
            <p className="text-xl mb-8 pl-4 pr-4">
            En journée ou à la faveur des lucioles, ce festival vous invite à plonger dans des paysages
exceptionnels autour de rencontres musicales insolites et fortes en émotion. Toujours en pleine
nature, chaque rendez-vous sera donné dans un lieu différent des communes de Villaroger et
Sainte-Foy.
            <br/>
            <br/>
            La programmation arrive bientôt !
            </p>
        </ProjectLayoutComponent>
        <img src="/images/fest_bot.webp" width="100%" />

    </>
}

export default FestivalDesPantomines
