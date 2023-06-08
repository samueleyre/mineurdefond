import ProjectRockComponent from "../components/project/project-rock.component";
import ProjectLayoutComponent from "../components/project/project-layout.component";
import FestivalEventComponent from "../components/festival/festival-event.component";
import FestivalEventV2Component from "../components/festival/festival-event-v2.component";


function FestivalDesPantomines() {
    return <>
        <ProjectRockComponent title="Le festival des Pantomines"
                              meta_description="Du 11 au 15 août 2023 à Villaroger et Sainte-Foy en Savoie">
            <div className="desktop-only m-auto">
                <img style={{filter: "brightness(1.3)"}} width="320px" src="images/festival_des.webp" alt="Festival des pantomines"/>
                <img style={{filter: "brightness(1.3)"}} width="400px" src="images/pantomines.webp" alt="Festival des pantomines"/>
            </div>
            <div className="mobile-only m-auto">
                <img style={{filter: "brightness(1.3)"}} width="240px" src="images/festival_des.webp" alt="Festival des pantomines"/>
                <img style={{filter: "brightness(1.3)"}} width="300px" src="images/pantomines.webp" alt="Festival des pantomines"/>
            </div>

        </ProjectRockComponent>
        <ProjectLayoutComponent>
            <h1 className="text-5xl pt-2 mb-2 text-center" style={{color: "#050505"}}>
                Festival des Pantomines - du 11 au 15 août 2023
            </h1>
            <p className="text-xl mb-6 text-center italic" style={{color: "#656565"}}>
                Une célébration artistique au cœur des Alpes
            </p>
            <p className="text-xl mb-1 text-center" style={{color: "#050505"}}>
                A Villaroger et Saint Foy Tarentaise
            </p>
            <p className="text-l mb-6 text-center italic" style={{color: "#656565"}}>
                (Savoie - entre Bourg Saint Maurice et Val d’Isère)
            </p>


            <p className="text-xl pt-8 mb-6 pl-4 pr-4">
                Le <b>Festival des Pantomines</b> est de retour du <b>11 au 15 août</b> sur les communes de Villaroger et Sainte-Foy-Tarentaise !
                <br/><br/>
                Pour cette <b>troisième édition</b>, retrouvez au programme pas moins de <b>10 concerts et spectacles</b> : certains festifs, d’autres contemplatifs, tous surprenants ! Allant du jazz aux musiques du monde, de la folk à la musique improvisée, du théâtre à la danse, nous passerons d'un versant à l'autre de la montagne et prendrons les chemins de traverse pour découvrir des musiques et des histoires à danser et à partager.
            </p>
            <p className="text-xl mb-12 pl-4 pr-4 italic">
                Avec des concerts et spectacles en plein air, le Festival des Pantomines est un événement pour toutes et tous. Il invite à la découverte artistique à travers un parcours itinérant mettant à l’honneur les sites exceptionnels de la Haute-Tarentaise.
            </p>
            <p className="text-xl mb-8 pl-4 pr-4 text-center">
                <span className="text-xl mb-0 pb-0" style={{color: "#656565"}}>★★★★★★★★★★★★★★★★★★★★ </span><br/>
                <span className="pl-2 pr-2">Entrée à Prix libre  / Buvette sur place </span><br/>
                <span className="text-xl" style={{color: "#656565"}}>★★★★★★★★★★★★★★★★★★★★ </span>
            </p>
            <br/>
            <br/>
            <p className="text-2xl mb-6 text-center mt-16 italic" style={{color: "grey"}}>
                PROGRAMME
            </p>
            <p className="p-6 text-4xl">Vendredi 11 Août</p>
            <div className="mobile:p-4 sm:pt-22 sm:pb-22 sm:pl-4 sm:pr-4 flex flex-wrap justify-center">

                <FestivalEventV2Component
                    image="balade.webp"
                    title="Le Petit Prince - théâtre tout public"
                    title_color="#a76a53"
                    place_and_time="9h30 - Parking du Chenal d’en bas - Sainte Foy Tarentaise"
                    musique_style="Balade poético-scientifique avec Antoine Gonthier"
                    description="Une promenade poético-scientifique de 2,3km pour se plonger dans l’histoire de notre planète depuis sa formation il y a environ 4,6Mds d’années jusqu’à aujourd’hui. Au rythme temporo-spatial d’1m pour 2 millions d’années, le conférencier présentera les grandes évolutions de la structure géologique et du climat de notre planète - une promenade qui, aussi paisible soit-elle, fait prendre conscience de l’ampleur et de la vitesse des changements en cours. <br><br> <b>Sur réservation</b>"
                    copyright="J-P Dupraz"
                />

            </div>
            <p className="p-6 text-4xl">Samedi 13 Août</p>
            <div className="mobile:p-4 sm:pt-22 sm:pb-22 sm:pl-28 sm:pr-28 flex flex-wrap justify-center">

                <FestivalEventComponent
                    image="jeanne.jpeg"
                    title="Jeanne Bleuse"
                    title_color="#a76a53"
                    place_and_time="10h - Pierre Giret - Sainte-Foy Tarentaise"
                    musique_style="Piano et clavecin, une invitation au voyage"
                    description="La pianiste vagabonde Jeanne Bleuse se lance dans un seul en scène original et virtuose qui renouvelle le récital classique. S’amusant avec les codes du genre, la soliste passe du piano au clavecin, dans un vrai numéro de cirque musical. Jeanne Bleuse nous transporte des confins de la renaissance aux rivages modernes grâce aux plus belles pages du répertoire. De Mozart à Satie et Rameau, en passant par les rythmes flamenco de Falla, le jazz langoureux de Gershwin… jusqu'aux compositeurs d’aujourd'hui."
                    listenLink="https://youtu.be/lacZV6nZ25g"
                />
            </div>
            <p className="text-center pt-10 pb-8 text-2xl" style={{color: "grey"}}>Demi-journée champêtre aux Îles - Villaroger</p>
            <div className="mobile:p-4 sm:pt-22 sm:pb-22 sm:pl-18 sm:pr-18 flex flex-wrap justify-center">
                <FestivalEventComponent
                        image="etienne-dehors.webp"
                        title="Sieste sonore"
                        title_color="#a76a53"
                        place_and_time="16h - Les Îles - Villaroger"
                        musique_style="musique contemplative avec Thibault Gomez (piano, claviers, électronique), Etienne Renard (contrebasse) et Vincent Duchosal (guitares)"
                        description="Une invitation à la contemplation sonore dans un havre naturellement paisible. Trois musiciens rompus à l’improvisation vont extraire de leurs instruments des sonorités insoupçonnées à faire frémir les oiseaux environnants, en toute décontraction. " />

                <FestivalEventComponent
                        image="crusoe.jpg"
                        title='Robinson Khoury "Broken Lines" Quintet '
                        title_color="#a76a53"
                        place_and_time="20h - Les Îles - Villaroger"
                        musique_style="jazz d’aujourd’hui avec Robinson Khoury (trombone), Mark Priore (piano), Pierre Tereygeol (guitares), Etienne Renard (contrebasse), Elie Martin-Charrière (batterie)"
                        description="Le tromboniste Robinson Khoury fait partie de ces figures remarquées très jeunes pour la singularité de leur jeu. Lauréat de nombreux prix et ayant collaboré sur la scène internationale avec, entres autres, Ibrahim Maalouf, Natacha Atlas, Quincy Jones orchestra, le tromboniste nous révèle ici les compositions d’un deuxième album, clair et pictural, accompagné d’acolytes non-moins talentueux.
    Le Quintet Broken Lines crée sur scène un lien entre les courants de la peinture du début du XXème siècle (cubisme, minimalisme et abstraction) et le travail de composition jazzistique, afin d’obtenir un résultat qui associe les couleurs aux modes musicaux, et les formes géométriques aux formules rythmiques, tout cela avec une énergie propre au dialogue entre l'écriture et l’improvisation."
                        listenLink="https://youtu.be/apPZVHuRpRY"
                    />
            </div>
            <p className="p-6 text-4xl">Dimanche 14 Août</p>
            <div className="mobile:p-4 sm:pt-22 sm:pb-22 sm:pl-18 sm:pr-18 flex flex-wrap justify-center">
                <FestivalEventComponent
                    image="balade.webp"
                    title="Marche du temps profond [BIS]"
                    title_color="#a76a53"
                    place_and_time="9h30 - Parking du Chenal d’en bas - Sainte Foy Tarentaise"
                    musique_style="Balade poético-scientifique avec Antoine Gonthier"
                    description="Une promenade poético-scientifique de 2,3km pour se plonger dans l’histoire de notre planète depuis sa formation il y a environ 4,6Mds d’années jusqu’à aujourd’hui. Au rythme temporo-spatial d’1m pour 2 millions d’années, le conférencier présentera les grandes évolutions de la structure géologique et du climat de notre planète - une promenade qui, aussi paisible soit-elle, fait prendre conscience de l’ampleur et de la vitesse des changements en cours. <br><br> <b>Sur réservation</b>"
                />
                <FestivalEventComponent
                    image="9m2.png"
                    title="9m2 de banquise"
                    title_color="#a76a53"
                    place_and_time="13h - Le Fenil - Sainte Foy Tarentaise"
                    musique_style="théâtre par Benjamin Groetzinger (comédien) et Clément Lemêtre (son)"
                    description="Un jeune homme erre, attend et s’ennuie entre les murs de son 9m2. Enfermé de force ou incapable de sortir par lui-même ? Alors qu’il nous dévoile les objets qu’il affectionne, son habitation prend l’aspect d’une étonnante « banquise » … dont il doit prendre soin pour sauver le monde et se sauver lui-même.
<br> Un spectacle entre fable écologique et rêverie surréaliste, dont les impressions visuelles et sonores invitent à imaginer sa propre histoire."
                    listenLink="https://youtu.be/ZDLNU_cXkfA"
                />
            </div>
            <p className="p-6 mt-6 text-3xl text-center" style={{color: "grey"}}>GRAND BAL !</p>
            <p className="pb-8 text-2xl text-center">19h - Ouverture du site et restauration sur place</p>
            <p className="pb-8 text-2xl text-center" style={{color: "#a76a53"}}>Venez manger, guincher et trinquer à Planjo pour un Bal du 15 Août détonnant !</p>
            <div className="mobile:p-4 sm:pt-22 sm:pb-22 sm:pl-18 sm:pr-18 flex flex-wrap justify-center">

                <FestivalEventComponent
                    image="zozio.jpeg"
                    title="ZOZIO"
                    title_color="#a76a53"
                    place_and_time="20h30"
                    musique_style="concert dansant avec Climène Zarkan (voix, percussions, clavier) Romane Déconfin (accordéon, flûte, percussion et voix) Vincent Duchosal (guitare électrique, voix) Louis Prado (ukébasse et voix) Benoît Joblot (batterie et voix)"
                    description="Nourri des musiques de La Réunion et d’ailleurs, Zozio puise son énergie dans les mélodies traditionnelles pour créer une musique originale, singulière, dansante, capable de faire remuer les plumes de tout oiseau de nuit souhaitant tanguer, piaffer, rouler, chavirer le temps d’une soirée…"
                    listenLink="https://youtu.be/IakJ4wuInYY"
                />
                <FestivalEventComponent
                    title="MixFigue MixRaisin"
                    title_color="#a76a53"
                    place_and_time="22h"
                    musique_style="DJ set éclectique et théâtral"
                    description="Simon Teissier (platines, vinyles, jeu) nous concocte un set plein de surprise. Vous êtes plutôt Sun & Surf 70s, Disco paillettes 80s, Nouvelle vague 90s ... ?"
                />
            </div>
            <p className="p-6 text-xl text-center" style={{color: "grey"}}>Fermeture du site à 00h30</p>
            <p className="p-6 text-4xl">Lundi 15 Août</p>
                <div className="mobile:p-4 sm:pt-22 sm:pb-22 sm:pl-18 sm:pr-18 flex flex-wrap justify-center">
                <FestivalEventComponent
                    title="Radio Crochet + Grand Banquet"
                    title_color="#a76a53"
                    place_and_time="11h - place du chef-lieu - Villaroger"
                    musique_style="Radio Crochet avec l'orchestre des Pantomines"
                    description="Ouvert à toutes et tous <br>
Venez chanter une ou plusieurs chansons de votre choix accompagnés par les musiciens des Pantomines avec un repas en banquet. <br><br>
<b>> Inscrivez-vous !</b> <br><br>
Nous pouvons organiser des répétitions avant la date."
                />
                <FestivalEventComponent
                    image="ispolin.jpeg"
                    title="Trio Ispolin"
                    title_color="#a76a53"
                    place_and_time="15h - église de Villaroger"
                    musique_style="voix bulgares avec Diane Bucciali, Camille Mandleur, Christine Clément (voix et percussions)"
                    description="<b>Clôture du Festival des Pantomines 2022</b><br>
                    Le trio tire son nom d’une légende : celle des Ispolin. Ces géants auraient peuplé la Bulgarie avant les premiers Hommes. Grâce à leur voix puissante, ils conversaient et entonnaient des chants d’une montagne à l’autre.
Aujourd’hui, les trois chanteuses d'Ispolin réveillent l’écho de ces géants en insufflant à des morceaux centenaires l'air contemporain qu'elles respirent.
<br>Une odyssée polyphonique poignante entre tradition et pulsion de création."
                    listenLink="https://youtu.be/q7w7G4xFXZQ"
                />
            </div>


            <p className="text-xl underline text-center mt-8 mb-8 pl-4 pr-4">
                <a className="p-4 inline-flex" style={{backgroundColor: "#242424", color: "white"}} href="/documents/programme2022.pdf" target="_blank" rel="noreferrer">Télécharger le programme</a>
            </p>


            <p className="text-2xl mb-6 text-center mt-16 italic" style={{color: "grey"}}>
                Infos pratiques
            </p>

            <p className="text-center bold mb-8 pl-4 pr-4">
                RESERVATIONS / INSCRIPTIONS / INFORMATIONS : <br/>
                c.mineursdefond@gmail.com / 06.87.29.02.65
            </p>

            <p className="text-center mt-16 mb-8 pl-4 pr-4">
                Tous les spectacles sont à prix libre (mais conseillé 10€).
            </p>

            <p className="text-center">
                Vous pouvez suivre l'évènement sur <a className="underline" style={{color: "#a76a53"}} href="https://www.facebook.com/CollectifMineursdefond" target="_blank" rel="noreferrer">Facebook</a> et <a style={{color: "#a76a53"}} className="underline" href="https://www.instagram.com/festivaldespantomines/?hl=fr" target="_blank" rel="noreferrer">Instagram</a>
            </p>

            <p className="text-center mt-16 mb-8 pl-4 pr-4">
                Le Festival des Pantomines est réalisé avec l’aide de la Communauté de Commune de Haute-Tarentaise, des Communes de Villaroger et de Sainte Foy et du département de la Savoie.
            </p>

            <p className="text-center mt-16 mb-8 pl-4 pr-4 underline">
                <a style={{color: "#a76a53"}} href="festival-des-pantomines-2021" target="_blank" rel="noreferrer">Le programme de l'édition précédente</a>
            </p>




        </ProjectLayoutComponent>
        <img alt="festival image" src="/images/fest_bot.webp" width="100%" />

    </>
}

export default FestivalDesPantomines
