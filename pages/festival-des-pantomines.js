import ProjectRockComponent from "../components/project/project-rock.component";
import ProjectLayoutComponent from "../components/project/project-layout.component";
import FestivalEventV2Component from "../components/festival/festival-event-v2.component";


function FestivalDesPantomines() {
    return <>
        <ProjectRockComponent title="Le festival des Pantomines"
                              meta_description="Du 11 au 15 août 2023 à Villaroger et Sainte-Foy en Savoie"
                              image_name="fest_top_2023.webp"
                              bgMobileClass="mobile:bg-gradient-to-t mobile:from-e1ebee mobile:from-60% mobile:to-black mobile:to-70% md:bg-e1ebee"
        >
            <div></div>
        </ProjectRockComponent>
        <ProjectLayoutComponent bgColor="#e1ebee" >
            <h1 className="font-cameo text-5xl pt-2 mb-2 text-center" style={{color: "#050505"}}>
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
                <span className="pl-2 pr-2">Entrée à Prix libre / Buvette sur place </span><br/>
            </p>
            <br/>
            <br/>
            <p className="text-2xl mb-6 text-center mt-16 italic" style={{color: "grey"}}>
                PROGRAMME
            </p>
            <p className="p-6 text-4xl text-center">Vendredi 11 Août</p>
            <div className="mobile:p-4 sm:pt-22 sm:pb-22 sm:pl-4 sm:pr-4 mb-24 flex flex-wrap justify-center">

                <FestivalEventV2Component
                    image="petit_prince_2.jpg"
                    second_image="petit_prince_1.jpg"
                    title="Le Petit Prince - théâtre tout public"
                    title_capital="small"
                    title_font="font-cameo"
                    title_color="#a76a53"
                    place_and_time="19h - Pierre Giret, Commune de Sainte-Foy-Tarentaise <br> (aller à la Masure, puis suivre les indications)"
                    actors="Emile Bailly et Pauline Drach, jeu ; Benjamin Groetzinger (Compagnie Démembrée), mise en scène ; Tom Georgel, création musicale"
                    description={"Dans un théâtre de verdure, le personnage d’Antoine de Saint-Exupéry prend vie avec une clairvoyance et une profondeur intactes. À travers une mise en scène en résonance avec le monde agricole et son rapport au vivant, il réveille avec sa poésie virulente l'enfant resté en chacun de nous, révolté face à l'absurdité du monde et la folie \"des grandes personnes\". Avec une magnifique création musicale, cette adaptation respecte le texte original tout en déplaçant son univers en terre agricole pour mieux interroger, à la faveur du crépuscule, notre monde contemporain."}
                    copyright="J-P Dupraz"
                    image_position="center"
                    second_image_position="top"
                    duration="1h"

                />

            </div>
            <p className="p-6 text-4xl text-center">Samedi 12 Août</p>
            <div className="mobile:p-4 sm:pt-22 sm:pb-22 sm:pl-4 sm:pr-4 mb-24  flex flex-wrap justify-center">

                <FestivalEventV2Component
                    image="balade.webp"
                    title="Balade guidée et contée"
                    title_font="font-cameo"
                    title_color="#a76a53"
                    place_and_time="10h : départ de l'office du tourisme de la Station de Sainte-Foy-Tarentaise"
                    description="Joignez-vous à une randonnée originale face aux glaciers ! Notre guide de montagne
nous emmènera à la rencontre de deux habitants de la région pour découvrir d’étonnantes
histoires locales.
<br>
<br>
<b>Durée : 3h</b>
"
                    actors="
                    Ludivine Rollier-Sigallet, guide ; Jean-Pierre Bozonet, géologue ; Jean-Louis Bradel, historien et conteur"
                />
                <FestivalEventV2Component
                        image="papanosh.webp"
                        title="Le bal de Papanosh - concert festif"
                        title_font="font-cameo"
                        title_color="#a76a53"
                        place_and_time="Salle polyvalente de Planjo à Sainte-Foy-Tarentaise <br><br> 19h ouverture et initiation danse, 20h début du concert <br> Restauration sur place"
                        musique_style="jazz d’aujourd’hui avec Robinson Khoury (trombone), Mark Priore (piano), Pierre Tereygeol (guitares), Etienne Renard (contrebasse), Elie Martin-Charrière (batterie)"
                        description="Voilà 17 ans que ce quintet rompu à l'exercice jazzistique et féru d'influences et d'imaginaires tous azimuts se régale à faire danser le public avec ses grooves entêtants, ses chansons mexicaines et ses tarentelles endiablées. Pour le bal des Pantomines, les cinq compères invitent Amélie Affagard, maîtresse à danser et magicienne aux mille voix qui nous entraînera toute la nuit dans sa ronde. C’est la promesse de lendemains qui chantent et de mollets qui crampent. Pour reprendre leur expression, attendez-vous à “un sacré gueuleton” !
                        <br><br>Un temps d’initiation à des danses de groupe sera proposé avant le concert."
                        actors="Quentin Ghomari, trompette et chant ; Raphaël Quenehen, saxophones et chant ; Sebastien Palis, accordéon, Rhodes, chant ; Thibault Cellier, contrebasse ; Jérémie Piazza, batterie et Amélie Affagard, chant et danse"
                        copyright={"Jacky Cellier"}
                        image_position="top"
                />
            </div>
            <p className="p-6 text-4xl text-center">Dimanche 13 Août</p>
            <div className="mobile:p-4 sm:pt-22 sm:pb-22 sm:pl-4 sm:pr-4 mb-24 flex flex-wrap justify-center">
                <FestivalEventV2Component
                    image="louise_valette.webp"
                    second_image="timothee.webp"
                    title="Louison Valette  x  Timothée Quost"
                    title_font="font-cameo"
                    title_color="#a76a53"
                    place_and_time="16h30 - La Savinaz (commune de Villaroger)"
                    description="
                    <br>
                    <b>Solo de Danse : Louise Valette</b><br><br>
                    La danseuse et chorégraphe présentera une création adaptée in situ, un solo en dialogue avec notre environnement sonore naturel ou artificiel. La danse part à la rencontre du diapason... Elle crée un espace d'écoute sonore et physique autour de l'orchestration de notre quotidien, de nos standards musicaux, de sensations intimes liées à la perception du son et des fréquences. Elle questionne ainsi notre corps quotidien, individuel et social.
                    <br>
                    <br>
                    <b>Solo de Trompette : Timothée Quost</b><br><br>
                    Trompettiste, compositeur et improvisateur, Timothée Quost a élaboré un solo singulier à partir de son instrument, évoluant au gré de concerts qu’on compte déjà par centaines. Amplifiée et augmentée électroniquement, la trompette sort ici de ses gonds. Le microphone et le haut-parleur permettent de révéler un monde sonore contenu dans le corps de l'instrument conduisant à une musique inouïe et prenante. Un solo qui déjoue nos attentes et notre écoute pour nous immerger dans une poésie sonore d'aujourd'hui.
                    "
                    listenLink="https://youtu.be/UX8xBNrb978"
                    image_position="top"
                    second_image_position="left"
                    duration="1h30"
                />
                <p className="text-2xl text-bold pb-12">Pour poursuivre, une buvette et une petite restauration seront servies à la Gurraz à partir de 18h30.
                </p>
                <FestivalEventV2Component
                    image="sonore_boreale.webp"
                    title="Sonore Boréale - conte musical"
                    title_font="font-cameo"
                    title_color="#a76a53"
                    place_and_time="20h - La Gurraz (Commune de Villaroger)"
                    description="Percussionniste explorateur des instruments du monde entier, <b>Sylvain Lemêtre</b> s’est constitué une table de percussions offrant un panel de jeu illimité qu’il nourrit de sa pratique de l’improvisation. Dans ce spectacle, cet instrumentarium étonnant prend vie à travers des contes chimériques aussi bien parlés que percutés. Tambours brésiliens, chinois, malgaches, bois de tout feu, métaux d’Asie en cloches, en plaques, en tubes, en lames s’entremêlent et dialoguent avec les mots extraits du livre « La Funghimiracolette » d’Olivier Mellano. Ce solo intimiste, drôle et haut en couleur sonore, nous embarque dans un voyage fabuleux ! "
                    actors="Durée : 1h"
                    listenLink="https://www.youtube.com/watch?v=G1uIjjNltNs&ab_channel=SylvainLem%C3%AAtre"
                    copyright={"Rémi Angeli"}
                    image_position="top"

                />

            </div>
            <p className="p-6 text-4xl text-center">Lundi 14 Août</p>
            <div className="mobile:p-4 sm:pt-22 sm:pb-22 sm:pl-4 sm:pr-4 mb-24 flex flex-wrap justify-center">
                <FestivalEventV2Component
                    image="vaguent.webp"
                    title="Vaguent - musique contemplative"
                    title_font="font-cameo"
                    title_color="#a76a53"
                    place_and_time="16h - Le Champet, clairière des Îles <br> (accès depuis l'aire de chaînage située le long de la D902 entre Viclaire et Sainte-Foy)"
                    description="Aérienne et cyclique, la musique de Vaguent se nourrit de motifs minimalistes et de textures de son. Portant l’accent sur une musique résolument chambriste, le quintet joue avec les mélanges de timbres et façonne ainsi des espaces à l'intérieur desquels les repères sonores se troublent. Les formes étirées et brumeuses révèlent alors de somptueux paysages quand d’autres créent des refuges chaleureux où se blottir."
                    actors="Avec Axel Gaudron - bugle, organetta, composition ; Léa Ciechelski - saxophone alto, flûte alto ; Yurie Hu - violon, alto ; Thibaud Boustany - piano ; Adrien Desse - percussions, synthétiseur modulaire. "
                    listenLink="https://www.youtube.com/watch?v=MSBmO2lAxTs"
                    copyright={"Rémi"}
                    duration="1h30"
                />
                <FestivalEventV2Component
                    image="los_hermanos.webp"
                    title="Los Hermanos Pouyé - musique argentine"
                    title_font="font-cameo"
                    title_color="#a76a53"
                    place_and_time="20h - Le Champet, clairière des Îles <br> (accès depuis l'aire de chaînage située le long de la D902 entre Viclaire et Sainte-Foy)"
                    description="Les trois frères Franco-Argentins et leurs acolytes rapportent d’Amérique du sud des milongas et autres chansons traditionnelles. Passant d'une veine intimiste à des pièces résolument festives, ils les accompagnent de compositions originales avec lesquelles les rythmes latino-américains se parent de nouvelles couleurs. Formant un ensemble puissamment expressif, les six musiciens partagent leur passion avec une irrésistible générosité. Attendez-vous à un moment de fête et d’émotion unique !"
                    actors="Avec Thomas Pouyé - violon, Gaspar Pouyé - bandonéon, Jean Pouyé - guitare, Elie Delphin - violon, Louis Prado - contrebasse, Pablo Costadone - batterie."
                    listenLink="https://youtu.be/003m_hjiDdU"
                    image_position="top"
                    duration={"1h30"}
                />
            </div>
            <p className="p-6 text-4xl text-center">Mardi 15 Août</p>
            <div className="mobile:p-4 sm:pt-22 sm:pb-22 sm:pl-4 sm:pr-4 mb-24 flex flex-wrap justify-center">
                <FestivalEventV2Component
                    title="Banquet - Radio-Crochet - repas où vous chantez !"
                    title_font="font-cameo"
                    title_color="#a76a53"
                    place_and_time="11h30 : Ouverture du banquet, 12h30 : Début du Radio crochet <br> Place de l’église de Villaroger - Restauration sur place"
                    description="Date oblige, cette dernière journée prendra naturellement des airs de fête de village, avec un grand banquet et un radio crochet (karaoké) accompagné de musiciens aguerris ! Chacun et chacune est invité à monter sur scène pour nous chanter sa plus belle chanson, devant un public déjà conquis !! <br>
Vous pourrez vous inscrire pendant toute la durée du festival. De Nougaro à Stromae, en passant par France Gall, une liste gargantuesque vous permettra de trouver votre titre favori !
"
                    actors="Inscriptions - c.mineursdefond@gmail.com / 06.87.29.02.65"
                />
                <FestivalEventV2Component
                    image="terra_mare.webp"
                    title="Terra Mare - folk"
                    title_font="font-cameo"
                    title_color="#a76a53"
                    place_and_time="15h - Église de Villaroger"
                    description="Auteur-compositeur originaire des Alpes du Nord, <b>Paolo Gauthier</b> se consacre avec tendresse à l’écriture de chansons. Son solo guitare-voix Terra Mare est une échappée folk, née de la pratique de la marche et éprouvée lors de tournées de chapelles en églises, à l'écoute du vent et de l'échos. Dans une langue vibrante et poétique, il trace de manière instinctive les émotions mystérieuses qu’éveillent l’amour, la montagne, la mer, le départ, le retour. Rassembleuse, sa folk nous entraîne dans son vague-à-l'âme presque incantatoire, sa poésie de l'errance et des retrouvailles. "
                    actors="Durée : 1h"
                    listenLink="https://youtu.be/Il8Eu1ChA4M"
                    image_position="top"
                />
            </div>

            <p className="text-2xl mb-6 text-center mt-16 italic" style={{color: "grey"}}>
                Infos pratiques
            </p>


            <div class="p-6 justify-center flex m-auto w-full">
                <a class="justify-center flex" href="/documents/programme2023.pdf" target="_blank" rel="noreferrer">
                    <span class="p-4" style={{backgroundColor: "#242424", color: "white"}}>Télécharger le plan</span>
                    <img width="60px" src="/images/plan.webp" alt="le plan du festival"/>
                </a>
            </div>

            <p className="text-center bold mb-8 pl-4 pr-4">
                Contacts : c.mineursdefond@gmail.com / 06.87.29.02.65
            </p>

            <p className="text-center mt-16 mb-8 pl-4 pr-4">
                Tous les spectacles sont à prix libre (mais conseillé 10€).
            </p>

            <p className="text-center">
                Vous pouvez suivre l'évènement sur <a className="underline" style={{color: "#a76a53"}} href="https://www.facebook.com/CollectifMineursdefond" target="_blank" rel="noreferrer">Facebook</a> et <a style={{color: "#a76a53"}} className="underline" href="https://www.instagram.com/festivaldespantomines/?hl=fr" target="_blank" rel="noreferrer">Instagram</a>
            </p>

            <p className="text-center mt-16 mb-8 pl-4 pr-4">
                Un événement organisé par le collectif Mineurs de fond avec le soutien des Communes de Villaroger et Sainte-Foy, de la Communauté de communes de Haute-Tarentaise, du Département de la Savoie et de la SPEDIDAM.
            </p>

            <p className="text-center mt-16 mb-8 pl-4 pr-4">
                Les programmes des éditions précédentes : <br/>
                <a style={{color: "#a76a53"}} href="festival-des-pantomines-2022" target="_blank" rel="noreferrer">Pantomines 2022</a> <br/>
                <a style={{color: "#a76a53"}} href="festival-des-pantomines-2021" target="_blank" rel="noreferrer">Pantomines 2021</a>
            </p>




        </ProjectLayoutComponent>
        <img alt="festival image" style={{backgroundColor: "#e1ebee" }} src="/images/fest_bot_2023.webp" width="100%" />

    </>
}

export default FestivalDesPantomines
