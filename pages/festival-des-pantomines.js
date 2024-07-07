import FestivalEventV2Component from "../components/festival/festival-event-v2.component";
import HeadComponent from "../components/main/head.component";
import dynamic from "next/dynamic";
import ParallaxImage from "./parallaxeImage";

const NavComponent = dynamic(() => import('../components/main/nav.component'), {ssr: false})


function FestivalDesPantomines() {

    const mainColor1 = "#2b96b0"
    const mainColor2 = "#d93536"

    return <>
        <HeadComponent title="Le festival des Pantomines"
                       meta_description="Du 15 au 18 août 2024 à Villaroger et Sainte-Foy en Savoie"/>
        <NavComponent mode="dark" sm_mode="light" position="fixed"/>

        <div style={{position: 'relative'}}> {/* Adjust the height as needed */}
            <ParallaxImage imageSrc="/images/Gravure.webp" height="1000px" startOffset="0"/>
        </div>
        <div style={{backgroundColor: "white"}} className="overflow-hidden">
            <div className="relative ProjectPage pb-10">
                <div className="max-w-screen-lg m-auto">
                    <div className="md:pt-8">
                        <div className="fest_2024_image m-auto bg-center max-w-full" style={{
                            backgroundImage: "url(/images/fest_top_2024.webp)",
                            width: "800px",
                            boxShadow: "1px 5px 10px #979797"
                        }}>
                            <h1 className="font-camero white bold w-full h-full flex justify-center items-center"
                                style={{backgroundColor: "#0000006b"}}>
                                Festival <br/>
                                des Pantomines
                            </h1>
                        </div>
                    </div>
                    <h2 className="font-cameo text-5xl pt-2 mb-2 text-center" style={{color: "#050505"}}>
                        Du 15 Au 18 Août 2024
                    </h2>
                    <p className="text-xl mb-6 text-center italic" style={{color: "#656565"}}>
                        Une célébration artistique au cœur des Alpes
                    </p>
                    <p className="text-xl mb-1 text-center" style={{color: "#050505"}}>
                        A Villaroger et Sainte-Foy-Tarentaise
                    </p>
                    <p className="text-l mb-6 text-center italic" style={{color: "#656565"}}>
                        (Savoie - entre Bourg Saint Maurice et Val d’Isère)
                    </p>

                    <div className="p-6 justify-center flex m-auto w-full">
                        <a className="justify-center flex" href="/documents/plan2024.pdf" target="_blank"
                           rel="noreferrer">
                    <span className="p-4"
                          style={{backgroundColor: "#242424", color: "white"}}>Télécharger le plan</span>
                            <img width="60px" src="/images/plan.webp" alt="le plan du festival"/>
                        </a>
                    </div>

                    <p className="text-xl pt-8 mb-6 pl-4 pr-4">
                        Le <b>Festival des Pantomines</b> sera de retour du <b>15 au 18 août</b> sur les communes de
                        Villaroger
                        et Sainte-Foy-Tarentaise !
                        <br/><br/>
                        Avec des concerts et des spectacles en pleine nature, le Festival des Pantomines est un
                        événement
                        original tout en itinérance pour vous faire découvrir les joyaux de la Haute-Tarentaise.
                        <br/><br/>
                        Pour cette <b>quatrième édition</b>, retrouvez au programme pas moins de <b>dix concerts et
                        spectacles</b> : certains festifs, d’autres contemplatifs, tous surprenants ! <br/>
                        Allant du jazz aux musiques d’inspiration voire de collectage traditionnel, du théâtre au
                        spectacle
                        de marionnettes, nous passerons d'un versant à l'autre de la montagne et prendrons les chemins
                        de
                        traverse pour découvrir des musiques et des histoires à danser et à partager.
                    </p>
                    <p className="text-xl mb-12 pl-4 pr-4 italic">
                        Nous maintenons notre politique d’entrée à prix libre afin que ce festival soit accessible pour
                        tous.tes.
                    </p>
                    <p className="text-xl mb-8 pl-4 pr-4 text-center">
                        <span className="pl-2 pr-2 font-cameo">ENTREE A PRIX LIBRE / BUVETTE SUR PLACE </span><br/>
                    </p>
                    <br/>
                    <br/>
                    <p className="text-2xl mb-6 text-center mt-16 italic" style={{color: "grey"}}>
                        PROGRAMME
                    </p>
                    <p className="p-6 text-4xl text-center">Jeudi 15 Août</p>
                    <div className="mobile:p-4 sm:pt-22 sm:pb-22 sm:pl-4 sm:pr-4 mb-24 flex flex-wrap justify-center">

                        <FestivalEventV2Component
                            image="tomba_pic_noir.webp"
                            title="TOMBA LE PIC NOIR"
                            subtitle="Balade contée - Conte et musiques des Alpes"
                            subtitle_color="grey"
                            title_capital="small"
                            title_font="font-cameo"
                            title_color={mainColor1}
                            place_and_time="10h00 <br> Départ à partir du parking de l’échaillon, Sainte- Foy-Tarentaise"
                            actors="Paolo Gauthier - Conteur et musicien"
                            description={"L'histoire de cet oiseau est celle d'une échappée vers les cimes. Une ascension initiatique imaginée collectivement par les artistes des Mineureuses. Un conte drôle et tendre raconté par Paolo Gauthier, au fil d'une balade ponctuée au violon par des aires populaires des Alpes."}
                            duration="2h environ"
                        />
                        <FestivalEventV2Component
                            image="a_more.webp"
                            title="A MORE"
                            subtitle="Solo de danse"
                            title_font="font-cameo"
                            title_color={mainColor2}
                            place_and_time="19h30 <br> Salle polyvalente de Planjo, Sainte-Foy-Tarentaise (accès PMR)"
                            description="A MORE se situe dans le paradoxe de son titre.<br>
Lisez-le comme vous le souhaitez.<br>
C’est d’une solitude dont on sera témoin.<br>
On y observe un être inadapté sur un terrain qui se meut, se déchire et se dérobe.<br>
Une quête de sens à être ici, dont le corps s’empare, taisant les mots.<br>
Dont les mots résonnent jusqu’à faire sonner l’espace.<br>
<br><br>
Claire Lamothe habite les seuils entre danse, théâtre et chant, proposant une performance mobile et plastique qui révoquent l’idée même de frontière. Elle évolue dans une scénographie de papier se déployant sans cesse.
Avec cette pièce, elle souhaite nous inviter dans le ressenti qu’elle se fait du flux d’informations croissant et incessant, où elle questionne nos positions et mouvements variables.
"
                            actors="De et par Claire Lamothe<br>
Ana Samoilovich - lumière<br>
Paul Boulier - régie son<br>
Charlotte Thomas & Claire Lamothe - scénographie<br>
Béatrice Debrabant - assistance chorégraphique<br>
Elsa Guiet & Pierre Teregeol - musique<br>
Claire Lamothe - montage son"
                        />
                        <FestivalEventV2Component
                            image="Ginette_Guirolle.webp"
                            title="GINETTE GUIROLLE, UNE MARIONNETTE DE BAR"
                            subtitle="Spectacle de marionnette"
                            title_font="font-cameo"
                            title_color={mainColor1}
                            place_and_time="21h00 <br> Salle polyvalente de Planjo, Sainte-Foy-Tarentaise (accès PMR)"
                            description="L’essentiel, du côté du cœur, des joies et des blessures, sera dit là, sur le zinc. C’est là, dans la vie, quand les bistrots sont ouverts, que les solitudes s’épanchent et se confient. Ginette, effrontée, prend le zinc comme elle prendrait la scène. Toute sa vie se déroule devant nos yeux, on pourrait presque dire, comme un documentaire, sur le portrait d’une femme, devenue jeune fille pendant la 2ème guerre mondiale, femme, épouse puis amante, puis un jour orpheline, et un autre jour mère puis grand mère... Une vie.
<br><br>
Inspirée par Angèle dans la pièce de théâtre “Inventaires” de Philippe Minyana, l’humanité du personnage de Ginette réside dans sa naïveté ; naïve, elle l’est jusque dans la révolte contre l’occupation, contre l’antisémitisme, le racisme, la mort. C’est toute la beauté de Ginette et c’est cela que Cendre Chassanne et Gallia Vallet chercheront à faire émerger, ce point de révolte, universel, intemporel, nécessaire et qui fait qu’on retrouve du sens commun dans l’intimité des bars."
                            actors="
                        Cendre Chassanne - mise en scène <br>
Gallia Vallet - manipulation, construction et jeu <br>
Olivier Vallet - création lumière <br>
Julien Vallet - Regard extérieur <br>
Sous le regard de Anne Bitran <br>
                        "
                        />
                    </div>
                    <p className="p-6 text-4xl text-center">Vendredi 16 Août </p>
                    <div className="mobile:p-4 sm:pt-22 sm:pb-22 sm:pl-4 sm:pr-4 mb-24 flex flex-wrap justify-center">

                        <FestivalEventV2Component
                            image="zamakan.webp"
                            title="ZAMAKAN"
                            subtitle="Musique orientale et acoustique"
                            title_font="font-cameo"
                            title_color={mainColor2}
                            place_and_time="16h <br> Le Champet, clairière des Îles - Sainte-Foy-Tarentaise <br> (accès depuis le parking du Champet situé le long de la D902 entre Viclaire et Sainte-Foy-Tarentaise)"
                            description="Zamakan composé d’Abdallah Abozerkry et de Baptiste Ferrandis respectivement au saz et à la guitare, explore avec fougue et sensibilité les chemins de traverses qui rassemblent d’Orient à Occident. A travers un univers musical qui navigue entre énergie pure et rêverie poétique, Zamakan casse les frontières du genre et affirme son appartenance à cette nouvelle génération de musiciens fiers de défendre les identités multiples de la richesse musicale mondialisée. <br>
                        Zamakan est un duo devenu trio avec les virtuoses Abdallah Abozekry au saz, Baptiste Ferrandis à la guitare et Baiju Bhatt au violon."
                            actors="Abdallah Abozekry - saz, voix, percussions, effets, composition <br> Baiju Bhatt - violon <br> Baptiste Ferrandis - guitare, effets, composition"
                            listenLink="https://www.youtube.com/watch?v=jIfA8KexMwk&ab_channel=ZAMAKAN"
                        />

                        <FestivalEventV2Component
                            image="duo_garenne.webp"
                            title="DUO GARENNE"
                            subtitle="Musique traditionnelle française"
                            title_font="font-cameo"
                            title_color={mainColor1}
                            place_and_time="19h30 <br> Le Champet, clairière des Îles - Sainte-Foy-Tarentaise <br> (accès depuis le parking du Champet situé le long de la D902 entre Viclaire et Sainte-Foy-Tarentaise)"
                            description="Clémence Cognet et Noëllie Nioulou sont imprégnées de musique baroque comme elles le sont des musiques de violons populaires du Massif Central. Elles ont donc pris la liberté de construire un répertoire de concert sur instruments baroques, exposant la fluidité de ce qui apparaît comme un grand continuum musical.
                        <br><br>Les mélodies à danser baroques répondant aux complaintes traditionnelles, les brunettes aux bourrées. Leur solide complicité bâtie sur des années de jeu en bal, donne à entendre une musique vive et subtile, un son profond et riche."
                            actors="Clémence Cognet - violon baroque et chant <br> Noëllie Nioulou - violon baroque, viole de gambe et chant"
                        />

                        <FestivalEventV2Component
                            image="duo_vargoz.webp"
                            title="DUO VARGOZ"
                            subtitle="Musique de montagne (Alpes du Sud, Auvergne, Appalaches)"
                            title_font="font-cameo"
                            title_color={mainColor2}
                            place_and_time="21h00 <br> Le Champet, clairière des Îles - Sainte-Foy-Tarentaise <br> (accès depuis le parking du Champet situé le long de la D902 entre Viclaire et Sainte-Foy-Tarentaise)"
                            description="L'harmonica et le violon sont deux instruments populaires porteurs d'histoires et d'imaginaires. En jouant des airs patinés par le temps, ce duo cherche avec une énergie commune, sa propre liberté de jeu et une complicité avec les personnes qui dansent. <br>
Le Duo Vargoz a été créé en 2017 par deux frères, Guillaume et Robin. Chacun explore les musiques et danses de traditions orales depuis une vingtaine d’années. Si le répertoire principal du Duo Vargoz est issu du territoire alpin, ils ont confronté leur regard avec de nombreux musiciens-chercheurs d’autres régions: Auvergne, Irlande, Piémont italien, Appalaches…"
                            actors="Guillaume Vargoz - harmonicas <br> Robin Vargoz - violon, violon alto, voix, pieds"
                        />

                    </div>
                    <p className="p-6 text-4xl text-center">Samedi 17 Août</p>
                    <div className="mobile:p-4 sm:pt-22 sm:pb-22 sm:pl-4 sm:pr-4 mb-24 flex flex-wrap justify-center">
                        <p className="text-2xl text-bold pb-12">
                            Journée de fête organisée par le comité des Goyets
                        </p>
                        <FestivalEventV2Component
                            image="radio_crochet.webp"
                            title="RADIO-CROCHET"
                            subtitle="Concert participatif"
                            title_font="font-cameo"
                            title_color={mainColor1}
                            place_and_time="11h00 <br> Le Pré, Villaroger (accès PMR)"
                            description="Cette journée prendra naturellement des airs de fête de village. L’orchestre des Pantomines se joint à la fête des Goyets avec un radio crochet (karaoké) accompagné de musiciens aguerris. Chacun et chacune est invité à monter sur scène pour nous chanter sa plus belle chanson, devant un public déjà conquis.
Contactez-nous pour vous inscrire et choisir votre chanson. De Nougaro à Stromae, il est certain que vous trouverez votre titre favori parmi notre liste gargantuesque de chansons."
                            actors="Thibault Gomez, membre du collectif Les Mineureuses - coordinateur musical"
                        />

                    </div>
                    <p className="p-6 text-4xl text-center">Dimanche 18 Août</p>
                    <div className="mobile:p-4 sm:pt-22 sm:pb-22 sm:pl-4 sm:pr-4 mb-24 flex flex-wrap justify-center">
                        <FestivalEventV2Component
                            image="balade.webp"
                            title="BALADE GUIDÉE"
                            subtitle="Randonnée contée"
                            title_font="font-cameo"
                            title_color={mainColor2}
                            place_and_time="9h30 <br> Le Miroir, Sainte-Foy-Tarentaise"
                            description="Joignez-vous à une randonnée originale face aux glaciers ! Pascale vous emmènera dans un hameau incontournable de la commune de Sainte-Foy pour vous faire découvrir les architectures typiques savoyardes ainsi que d’étonnantes histoires locales."
                            actors="Pascale Guichon - guide du patrimoine et accompagnatrice en moyenne montagne"
                            duration="environ 2h30"
                        />

                        <FestivalEventV2Component
                            image="lola_malique.webp"
                            title="LOLA MALIQUE"
                            subtitle="Solo de violoncelle"
                            title_font="font-cameo"
                            title_color={mainColor1}
                            place_and_time="12h00 <br> Le Miroir, Sainte-Foy-Tarentaise"
                            description="La violoncelliste Lola Malique livre un programme solo éphémère telle une expérience de l’intimité musicale, destinée à un public aux oreilles curieuses."
                            actors="Lola Malique - violoncelle"
                        />

                        <FestivalEventV2Component
                            image="touffe_errance.webp"
                            title="TOUFFE D’ERRANCE"
                            subtitle="Théâtre"
                            title_font="font-cameo"
                            title_color={mainColor2}
                            place_and_time="16h00 <br> Lotissement route du Passet, Sainte-Foy-Tarentaise"
                            description="Touffe d’errance, c’est l’histoire d’Arthème et Birgueune. Leur sport de vie, c’est l’errance. Vous les connaissez ?<br>
Il paraît qu’elles sillonnent les routes avec leur caravane, depuis une éternité. Y en a même qui disent qui les ont vu voler. Il paraît que parfois elles s'arrêtent ici ou là. Un moment. Elles observent, croisent, rencontrent des paysages et des personnes qui leur transmettent des histoires, des histoires à se souvenir. Alors elles les captent, les récoltent, les partagent. Et si cette fois, prises dans un ultime tourbillon, la pratique de leur discipline les poussaient vers un nouvel ailleurs ?
<br><br>
Avec leur caravane, Elodie, Lucile et Pauline se sont installées le temps d’une demi journée sur un
marché, une place de village... et ont invitées des personnes à y entrer pour leur poser trois questions :<br>
Si on te dit le mot 'errance' ?<br>
Est-ce que tu peux nous raconter un virage, une bifurcation, dans ta vie ?<br>
Si tu avais un message à faire passer, maintenant, ce serait lequel ?<br>
Touffe d’errance, c’est l’histoire de toutes ces personnes qu’elles ont rencontrées."
                            actors="- conception collective - <br> Pauline Drach et Elodie Guibert <br> Lucile Marianne - mise en scène"
                        />

                    </div>
                </div>
            </div>
            <div className="py-10 px-4 text-center" style={{
                backgroundPositionX: "center",
                backgroundImage: "linear-gradient(to bottom, #ffffff 5%, rgba(0, 0, 0, 0) 10%), url(/images/fest_bot_2024.webp)"
            }}>
                <p className="font-bold text-4xl mb-6 text-center mt-16 italic"
                   style={{color: "grey", lineHeight: "0.5rem"}}>
                    Infos pratiques
                </p>


                <div className="p-6 justify-center flex m-auto w-full">
                    <a className="justify-center flex" href="/documents/programme2024.pdf" target="_blank"
                       rel="noreferrer">
                    <span className="p-4"
                          style={{backgroundColor: "#242424", color: "white"}}>Télécharger le programme</span>
                        <img width="60px" src="/images/plan.webp" alt="le plan du festival"/>
                    </a>
                </div>

                <p className="text-center bold mb-8 pl-4 pr-4">
                    Contacts : c.mineursdefond@gmail.com / 06.87.29.02.65
                </p>

                <p className="text-center mt-16 mb-8 pl-4 pr-4">
                    Tous les spectacles sont à prix libre (conseillé 10€).
                </p>

                <p className="text-center">
                    Vous pouvez suivre l'évènement sur <a className="underline" style={{color: "#a76a53"}}
                                                          href="https://www.facebook.com/CollectifMineursdefond"
                                                          target="_blank" rel="noreferrer">Facebook</a> et <a
                    style={{color: "#a76a53"}} className="underline"
                    href="https://www.instagram.com/festivaldespantomines/?hl=fr" target="_blank"
                    rel="noreferrer">Instagram</a>
                </p>

                <p className="text-center mt-16 mb-8 md:w-1/2 mx-auto">
                    Un événement organisé par le collectif Mineurs de fond avec le soutien des Communes de Villaroger et
                    Sainte-Foy, de la Communauté de communes de Haute-Tarentaise, du Département de la Savoie et de la
                    SPEDIDAM.
                </p>

                <p className="text-center mt-16 mb-8 pl-4 pr-4">
                    Les programmes des éditions précédentes : <br/>
                    <a style={{color: "#a76a53"}} href="festival-des-pantomines-2023" target="_blank" rel="noreferrer">Pantomines
                        2023</a> <br/>
                    <a style={{color: "#a76a53"}} href="festival-des-pantomines-2022" target="_blank" rel="noreferrer">Pantomines
                        2022</a> <br/>
                    <a style={{color: "#a76a53"}} href="festival-des-pantomines-2021" target="_blank" rel="noreferrer">Pantomines
                        2021</a>
                </p>
            </div>
        </div>


    </>
}

export default FestivalDesPantomines
