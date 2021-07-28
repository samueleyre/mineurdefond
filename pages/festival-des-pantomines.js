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
            En journée ou à la faveur des lucioles, ce festival vous invite à plonger dans des paysages
exceptionnels autour de rencontres musicales insolites et fortes en émotion. Toujours en pleine
nature, chaque rendez-vous sera donné dans un lieu différent des communes de Villaroger et
Sainte-Foy.
            <br/>
            La programmation éclectique réserve de nombreuses surprises avec le trio de musiques des
Balkans Lesto Drom, une balade menée par un guide et suivie d’un concert du violoniste Frédéric
Aurier, le tandem de chansonniers Tchoukadane, le spectacle Touffe de Spleen à l’énergie 100%
féminine ou encore les chansons folk de Siri Byrkjedal tout droit venue de Norvège... pour finir
avec le bal de MaDam RamDam offert sous les étoiles !
            </p>
            <p className="text-2xl mb-6 text-center mt-16 italic" style={{color: "grey"}}>
            Programme
            </p>
            <p className="p-6 text-4xl">13 AOUT</p>
            <div className="mobile:p-4 sm:p-22 flex flex-wrap justify-center">

                <FestivalEventComponent
                    image="lesto.jpg"
                    title="LESTO DROM"
                    title_color="#a76a53"
                    link="https://www.noe-clerc.com/lesto-drom"
                    newPage="true"
                    place_and_time="Les îles, Villaroger à 18h"
                    musique_style="Musiques des Balkans"
                    description="De la Turquie à la Bulgarie et roulé en caravane tzigane, le trio kaval kaval emportant avec lui les plus belles mélodies des Balkans."
                    listenLink="https://www.youtube.com/watch?v=xHrT_ToheOg&amp;ab_channel=Lo%C3%AFcVx"
                    fbEvent="https://fb.me/e/JqzSeUWK"
                />
            </div>
            <p className="p-6 text-4xl">14 AOUT</p>
            <div className="mobile:p-4 sm:pt-22 sm:pb-22 sm:pl-28 sm:pr-28 flex flex-wrap justify-center">
                <FestivalEventComponent
                    image="fred.jpeg"
                    title="FRED AURIER & CO"
                    title_color="#a8834b"
                    link="https://quatuorbela.com/le-quatuor-bela/frederic-aurier/"
                    newPage="true"
                    place_and_time="Le Monal, Sainte-Foy à 11h"
                    musique_style="Balade - Concert"
                    description="Une balade avec un guide et quelques surprises sera suivie d&#39;un concert de l&#39;étonnant violoniste et compositeur Frédéric Aurier (Quatuor Bela, La Soustraction des Fleurs...)"
                    fbEvent="https://fb.me/e/2vBJRj5hn"
                />
                <FestivalEventComponent
                    image="tchouk.jpg"
                    title="TCHOUKADANE"
                    link="tchoukadane"
                    title_color="#73638d"
                    place_and_time="La Gurraz, Villaroger (front de vanoise) à 15h"
                    musique_style="Chants - Guitares"
                    description="De l'errance comme souffle de vie, ce tandem murmure en miroir et s'enivre en guitares. Ouvrant un autre rapport à l'espace, au son et au texte, Tchoukadane nous entraîne vers un conte musical singulier."
                    listenLink="https://www.youtube.com/watch?v=dSCmDhRXe8g"
                    fbEvent="https://fb.me/e/AgeH86F5"
                />
                <FestivalEventComponent
                    image="touff.jpg"
                    title="TOUFFE DE SPLEEN"
                    title_color="#8cada0"
                    link="https://www.savoie.fr/web/sw_59525/Culture/Touffedespleen"
                    newPage="true"
                    place_and_time="La Masure, Sainte-Foy à 19h"
                    musique_style="Caravane - Théâtre"
                    description="Après avoir collecté des témoignages sur le spleen et la mélancolie, ces trois acolytes nous invitent à un joyeux tête-à-tête autour de leur caravane -on a déjà oublié qu'on n'allait pas bien."
                    fbEvent="https://fb.me/e/j8PTa8EDH"
                />

            </div>
            <p className="p-6 text-4xl">15 AOUT</p>
            <div className="mobile:p-4 sm:p-22 flex flex-wrap justify-center">
                <FestivalEventComponent
                    image="siri.jpg"
                    title="SIRI BIRK"
                    title_color="#333d67"
                    link="http://www.siribyrkjedal.com/"
                    newPage="true"
                    place_and_time="Le Planay, Villaroger à 11h"
                    musique_style="Folk"
                    description="Siri a traversé l'Europe pour nous apporter de Norvège ses chansons folk aux mélodies claires et couleurs boréales."
                    fbEvent="https://fb.me/e/Vnjcsbe4"
                />
                <FestivalEventComponent
                    image="madam.jpg"
                    title="MADAM RAMDAM"
                    link="madamramdam"
                    title_color="#963332"
                    place_and_time="Planjo, Sainte-Foy à partir de 19h30"
                    musique_style="Grand Bal"
                    description="Ces cinq compères vont nous faire guincher sous les étoiles : un bal haut en couleur et pour tous les goûts à rendre jaloux le meilleur des jukebox ! Buvette et restauration légère."
                    listenLink="https://www.youtube.com/watch?v=CrXQrFW27xY&amp;ab_channel=MaDamRamDam"
                    fbEvent="https://fb.me/e/6FQH4gfsx"
                />

            </div>

            <p className="text-xl underline text-center mt-8 mb-8 pl-4 pr-4">
            <a className="p-4 inline-flex" style={{backgroundColor: "#242424", color: "white"}} href="/documents/programme2021.pdf" target="_blank">Télécharger le programme</a>
            </p>


            <p className="text-2xl mb-6 text-center mt-16 italic" style={{color: "grey"}}>
            Infos pratiques
            </p>

            <p className="text-center mt-16 mb-8 pl-4 pr-4">
              Tous les spectacles sont à prix libre (mais conseillé 10€).
            </p>
            <p className="text-center mb-8 pl-4 pr-4">
              Un camping sera mis à disposition : contactez-nous !
            </p>
            <p className="text-center bold mb-8 pl-4 pr-4">
            Infos : <br/>
            c.mineursdefond@gmail.com / 06.87.29.02.65
            </p>


            <p className="text-center">
            Vous pouvez suivre l'évènement sur Facebook : <a href="https://fb.me/e/5hcGg9hG0" target="_blank">https://fb.me/e/5hcGg9hG0</a>
            </p>

            <p className="text-center mt-16 mb-8 pl-4 pr-4">
              Une proposition construite avec les communes de
            Villaroger et Sainte-Foy et la communauté de commune
            de Haute-Tarentaise.
            </p>


        </ProjectLayoutComponent>
        <img src="/images/fest_bot.webp" width="100%" />

    </>
}

export default FestivalDesPantomines
