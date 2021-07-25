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
            Le Festival des Pantomines débarque en Haute-Tarentaise du 13 au 15 août 2021 avec une série de
            concerts et spectacles détonnants !
            </p>
            <p className="text-xl mb-8 pl-4 pr-4">
            En journée ou à la faveur des lucioles, ce festival vous invite à une plongée dans des paysages
            exceptionnels autour de rencontres musicales insolites et fortes en émotion.
            Toujours en pleine nature, chaque rendez-vous sera donné dans un lieu différent des communes
            de Villaroger et Sainte-Foy. La programmation éclectique vous réserve de nombreuses surprises
            avec le trio de musiques des Balkans Lesto Drom, une balade matinale menée par un guide
            et suivie d’un concert du violoniste Fred Aurier, une envolée musicale chantée par le tandem
            Tchoukadane, le spectacle Touffe de Spleen à l’énergie 100% féminine ou encore les chansons
            folk de Siri Byrkjedal tout droit venue de Norvège, pour finir avec le grand bal de MaDam
            RamDam offert sous les étoiles.
            </p>
            <p className="text-2xl mb-6 text-center mt-16 italic" style={{color: "grey"}}>
            Programme
            </p>
            <p className="p-6 text-4xl">13 AOUT</p>
            <div className="mobile:p-4 sm:p-22 flex flex-wrap justify-center">

                <FestivalEventComponent
                    title="LESTO DROM"
                    title_color="#a76a53"
                    place_and_time="Les îles, Villaroger à 18h"
                    musique_style="Musique des Blakans"
                />
            </div>
            <p className="p-6 text-4xl">14 AOUT</p>
            <div className="mobile:p-4 sm:pt-22 sm:pb-22 sm:pl-28 sm:pr-28 flex flex-wrap justify-center">
                <FestivalEventComponent
                    title="FRED AURIER & CO"
                    title_color="#a8834b"
                    place_and_time="Le Monal, Sainte-Foy à 11h"
                    musique_style="Ballade - Concert"
                />
                <FestivalEventComponent
                    title="TCHOUKADANE"
                    link="tchoukadane"
                    title_color="#73638d"
                    place_and_time="La Gurraz, front de vanoise, Villaroger à 15h"
                    musique_style="Chants - Guitares"
                />
                <FestivalEventComponent
                    title="TOUFFE DE SPLEEN"
                    title_color="#8cada0"
                    place_and_time="La Masure, Sainte-Foy à 19h"
                    musique_style="Caravane - Théâtre"
                />

            </div>
            <p className="p-6 text-4xl">15 AOUT</p>
            <div className="mobile:p-4 sm:p-22 flex flex-wrap justify-center">
                <FestivalEventComponent
                    title="SIRI BIRK"
                    title_color="#333d67"
                    place_and_time="Le planay, Villaroger à 11h30"
                    musique_style="Folk"
                />
                <FestivalEventComponent
                    title="MADAM RAMDAM"
                    link="madamramdam"
                    title_color="#963332"
                    place_and_time="Planjo, Sainte-Foy à partir de 19h30"
                    musique_style="Grand Bal"
                />

            </div>
            <p className="text-center mt-16 mb-8 pl-4 pr-4">
            Une proposition construite avec les communes de
            Villaroger et Sainte-Foy et la communauté de commune
            de Haute-Tarentaise.
            </p>

        </ProjectLayoutComponent>
    </>
}

export default FestivalDesPantomines
