import FestivalEventV2Component from "../components/festival/festival-event-v2.component";
import HeadComponent from "../components/main/head.component";
import dynamic from "next/dynamic";

const NavComponent = dynamic(() => import('../components/main/nav.component'), {ssr: false})


function FestivalDesPantomines() {

    const mainColor1 = "#5f3993"
    const mainColor2 = "#f2c030"

    return <>
        <HeadComponent title="Le festival des Pantomines"
                       meta_description="Les 13 et 14 août 2025 à Villaroger et Sainte-Foy en Savoie"/>
        <NavComponent mode="dark" sm_mode="light" position="fixed"/>

        <div style={{backgroundColor: "white"}} className="overflow-hidden">
            <div className="relative ProjectPage pb-10">
                <div className="max-w-screen-lg m-auto">
                    <div className="md:pt-8">
                        <div className="fest_2024_image m-auto bg-center max-w-full" style={{
                            backgroundImage: "linear-gradient(black, black), url(/images/fest_top_2024.webp)",
                            width: "800px",
                            boxShadow: "1px 5px 10px #979797",
                            backgroundBlendMode: "saturation"
                        }}>
                            <h1 className="font-camero white bold w-full h-full flex justify-center items-center"
                                style={{backgroundColor: "#0000006b", color: mainColor2}}>
                                Festival <br/>
                                des Pantomines
                            </h1>
                        </div>
                    </div>
                    <h2 className="font-cameo text-5xl pt-2 mb-2 text-center" style={{color: "#050505"}}>
                        13 et 14 Août 2025
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

                    <p className="text-xl pt-8 mb-6 pl-4 pr-4">
                        Le <b>Festival des Pantomines</b> revient les <b>13 et 14 août</b> sur les communes de
                        Villaroger et Sainte-Foy-Tarentaise !
                        <br/><br/>
                        Du cirque au rock en passant par la chanson et le théâtre, six spectacles et concerts entre alpages et coeurs de villages sont au rendez-vous cette année.
                        <br/><br/>
                        La programmation de cette édition vous est toujours proposées par Les Mineureuses, mais la réalisation et l’organisation du festival sont cette fois-ci assurées par les communes de Villaroger et Sainte-Foy-Tarentaise et les communauté de commune de Haute-Tarentaise.
                        <br/><br/>
                        Venez (re)découvrir des concerts et spectacles hauts en couleur dans les superbes paysages tarins !
                    </p>
                    <p className="text-xl mb-8 pl-4 pr-4 text-center">
                        <span className="pl-2 pr-2 font-cameo">ENTREE LIBRE</span><br/>
                    </p>
                    <br/>
                    <br/>
                    <p className="text-2xl mb-6 text-center mt-16 italic" style={{color: "grey"}}>
                        PROGRAMME
                    </p>
                    <p className="p-6 text-4xl text-center">Mercredi 13 Août - <span className="text-4xl"> SAINTE-FOY-TARENTAISE</span></p>
                    <div className="mobile:p-4 sm:pt-22 sm:pb-22 sm:pl-4 sm:pr-4 mb-24 flex flex-wrap justify-center">

                        <FestivalEventV2Component
                            image="terra_mare3.webp"
                            image_position="top"
                            title="Terra Mare"
                            subtitle_color="grey"
                            title_capital="small"
                            title_font="font-cameo"
                            title_color={mainColor1}
                            place_and_time="11h au bachal de la Masure (Sainte-Foy-Tarentaise)"
                            actors="Paolo Gauthier - Guitare-cithare et chant, Marion Ruault – Contrebasse, Yurie Hu – Violon, Maiana Lavielle – Violoncelle"
                            description={"Terra Mare est un quatuor de chansons folk créé en 2025 par l'artiste savoyard Paolo Gauthier à partir de ses carnets de voyage et de sa guitare - cithare.<br><br>" +
                                "Sa poésie, sublimée par le trio à cordes de Yurie Hu, Marion Ruault et Maëlle Le Gall, raconte le départ, les retrouvailles, les montagnes, la mer et la mémoire des migrations, dans la langue natale du chansonnier comme celles de ses proches ancêtres, l'español, l’italien et l’occitan alpin.<br><br>" +
                                "L’univers de Terra Mare est inspiré par l'impressionnisme, trouve un écho en la phénoménologie et une histoire avec la poésie contemplative."}
                        />

                        <FestivalEventV2Component
                            image="the_toi.avif"
                            title="Thé Toi"
                            subtitle_color="grey"
                            title_capital="small"
                            title_font="font-cameo"
                            title_color={mainColor1}
                            place_and_time="17h au bachal de la Masure (Sainte-Foy-Tarentaise)"
                            actors="Iorhanne Da Cunha"
                            description={"Mais si on tenait absolument à définir ce solo pour vous donner envie de venir le découvrir, on pourrait dire, sans trop vous mentir que c'est un peu de sarcasme, pas mal d'autodérision, quelques notes de Chopin, une pointe d'audace, un trapèze Washington bancal, un violon qui pendouille, du Boris Vian et surtout, \"l'aigreur joyeuse et communicative d'une confiance en soi a jamais disparue car dissoute dans une succession laborieuse et indélébile d'expérience humaine et relationnelle...<br><br>" +
                                "On vous attend pour partager cette bonne dose de convivialité !"}
                        />


                        <FestivalEventV2Component
                            image="oasis_boom.webp"
                            title="Oasis Boom"
                            subtitle_color="grey"
                            title_capital="small"
                            title_font="font-cameo"
                            title_color={mainColor2}
                            place_and_time="20h à la salle Planjo (Sainte-Foy-Tarentaise)"
                            actors="Mélissa Acchiardi (batterie préparée, synthé), Vincent Duchosal (guitare électrique préparée, effets)"
                            description={"Des White stripes en passant par les Black Keys, le duo batterie/guitare est au rock ce que le trio piano/basse/batterie est au jazz : un classique. Néanmoins, ce serait une erreur de vouloir réduire la musique d'Oasis Boom a une seule esthétique. Dans l'autoradio du cactus bus (c'est le nom de la seule et unique piece fleuve qu'ils jouent sur scène), il y a certes du bon gros rock graisseux, mais aussi de la surf-music, du drone, de la berceuse et de la musique de club. L'engin roule à tombeau ouvert, se transforme et vole, se téléporte. Il est direct et sans arrêt. On admire à travers ses fenêtres salies de sable rouge les paysages hallucinés du Piton de la Fournaise, les méandres alanguis du fleuve Niger et les immensités sèches de l'Arizona.<br><br>" +
                                "Quand à l'arrivée, Mélissa Acchiardi et Vincent Duchosal descendent en silence, les mains noircies d'électricité, les yeux encore pleins d’horizons fondus, on comprend que ce voyage-là ne s'arrête jamais vraiment."}
                        />

                    </div>
                    <p className="p-6 text-4xl text-center">Jeudi 14 Août - <span className="text-4xl">VILLAROGER</span></p>

                    <div className="mobile:p-4 sm:pt-22 sm:pb-22 sm:pl-4 sm:pr-4 mb-24 flex flex-wrap justify-center">

                        <FestivalEventV2Component
                            image="kobon.webp"
                            title="Kobon"
                            subtitle_color="grey"
                            title_capital="small"
                            title_font="font-cameo"
                            title_color={mainColor1}
                            place_and_time="11h à l'église (Villaroger)"
                            actors="Clément Merienne (piano), Emilian Ducret (batterie) et Etienne Renard (contrebasse)"
                            description={"Le jazz du trio Kobon naît d’une quête inspirée par un problème non résolu : celui du triangle de Kobon, une métaphore des interactions infinies entre les instruments, qui représente l’équilibre entre rigueur et liberté, structure et improvisation."}
                        />


                        <FestivalEventV2Component
                            image="comics_trip.webp"
                            title="Comic's Trip"
                            subtitle_color="grey"
                            title_capital="small"
                            title_font="font-cameo"
                            title_color={mainColor1}
                            place_and_time="17h au jardin de l'église (Villaroger)"
                            actors="Luka Fiorello, Simon Teissier, Nathan Roumenov"
                            description={"Rencontrés sur les bancs de l’école, Nathan, Simon et Luka ont noué une amitié forte et ensemble ont créé un spectacle aux accents burlesques avec une esthétique et des codes de jeu théâtraux directement inspirés de la bande dessinée."}
                        />


                        <FestivalEventV2Component
                            image="thibault_gomez.webp"
                            title="Thibault Gomez"
                            subtitle_color="grey"
                            title_capital="small"
                            title_font="font-cameo"
                            title_color={mainColor2}
                            place_and_time="20h à l'église (Villaroger)"
                            actors="Thibault Gomez (piano préparé)"
                            description={"Le pianiste Thibault Gomez propose un concert en piano solo mêlant compositions et improvisations libres.<br><br>" +
                                "Le piano, ici, est préparé : quelques objets glissés entre les cordes modifient subtilement les sons, transforment l’instrument en un terrain d’exploration sonore. Les timbres se frottent, résonnent, grincent parfois — autant d’inattendus qui éveillent l’écoute autrement.<br>" +
                                "Pas besoin de connaissances préalables pour écouter cette musique, seulement un peu de curiosité : elle se découvre dans l’instant, à l’écoute des textures, des rythmes... <br><br>Une expérience simple, où le son parle de lui-même."}
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
                    <a className="justify-center flex" href="/documents/programme2025.pdf" target="_blank"
                       rel="noreferrer">
                    <span className="p-4"
                          style={{backgroundColor: "#242424", color: "white"}}>Télécharger le programme</span>
                        <img width="60px" src="/images/plan.webp" alt="le plan du festival"/>
                    </a>
                </div>

                <p className="text-center mt-16 mb-8 pl-4 pr-4">
                    Tous les spectacles sont gratuits.
                </p>

                <p className="text-center mt-16 mb-8 pl-4 pr-4">
                    Les programmes des éditions précédentes : <br/>
                    <a style={{color: "#a76a53"}} href="festival-des-pantomines-2024" target="_blank" rel="noreferrer">Pantomines
                        2024</a> <br/>
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
