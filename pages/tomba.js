import HeadComponent from "../components/main/head.component";
import dynamic from "next/dynamic";

const NavComponent = dynamic(() => import('../components/main/nav.component'), {ssr: false})
const title = "Tomba";
const meta_description = "Tomba - Conte d’un pic noir est un livre écrit, illustré et mis en musique collectivement par Les Mineureuses."

function Tomba() {

    return <>
        <HeadComponent title={title} meta_description={meta_description}/>
        <NavComponent mode="light" sm_mode="light" position="fixed"/>
        <div style={{
            background: "#0d0d0d",
            color: "white"
        }} className="pb-10 pt-20 bg-cover">
            <div className=" mobile:p-2 max-w-screen-lg m-auto">
                <div className="mb-24">
                    <div className="max-w flex justify-center mt-24">
                        <div id="tombaBird" className="svg-container">
                            <svg viewBox="0 0 1606 1165" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="shimmerGradient">
                                        <stop offset="0%" stop-color="#fff"/>
                                        <stop offset="25%" stop-color="#dc960d"/>
                                        <stop offset="50%" stop-color="#1e0487"/>
                                        <stop offset="75%" stop-color="#dc960d"/>
                                        <stop offset="100%" stop-color="#fff"/>
                                    </linearGradient>

                                    <mask id="svgMask">
                                        <g transform="translate(0.000000,1165.000000) scale(0.100000,-0.100000)"
                                           fill="#fff" stroke="none">
                                            <path className="birdSinging hidden"
                                                  d="M15245 11209 c-231 -235 -421 -433 -424 -440 -2 -6 1 -10 7 -8 18 6 852 857 852 869 0 5 -3 10 -7 9 -5 -1 -197 -194 -428 -430z"/>
                                            <path className="birdSinging hidden"
                                                  d="M15007 11478 c-299 -507 -311 -529 -289 -528 4 1 82 130 174 288 93 158 179 306 193 329 14 23 21 44 16 48 -6 3 -48 -59 -94 -137z"/>
                                            <path className="birdSinging hidden"
                                                  d="M15318 10847 c-180 -100 -323 -186 -319 -190 8 -8 670 352 671 366 0 18 -44 -4 -352 -176z"/>
                                            <path
                                                d="M14100 10760 c-283 -34 -541 -152 -1035 -474 -247 -161 -343 -208 -437 -214 -150 -9 -334 45 -578 169 -176 90 -227 103 -405 103 -219 0 -409 -50 -660 -173 -235 -116 -368 -213 -540 -393 -336 -352 -562 -875 -645 -1488 -20 -154 -45 -223 -134 -373 -100 -170 -201 -295 -385 -477 -189 -188 -363 -334 -531 -445 -58 -38 -253 -145 -435 -238 -610 -313 -2385 -1242 -2625 -1375 -616 -340 -1257 -792 -1773 -1250 -64 -57 -117 -108 -117 -112 0 -11 69 -72 110 -97 19 -12 61 -29 93 -38 54 -16 64 -16 155 0 207 36 427 29 427 -14 0 -10 -663 -242 -2130 -746 l-2130 -732 -155 -92 c-85 -51 -159 -97 -163 -101 -5 -4 -3 -26 3 -49 l11 -41 82 0 c45 0 344 7 664 16 321 8 591 14 601 12 12 -2 -22 -45 -127 -158 -80 -85 -155 -166 -167 -180 l-23 -25 30 -33 29 -32 2071 661 2072 662 766 -47 c421 -26 775 -49 787 -52 12 -2 55 -47 102 -109 l81 -106 26 -117 c23 -96 46 -159 135 -352 l109 -235 140 -705 c77 -388 143 -736 146 -775 l7 -70 -105 -150 c-57 -82 -103 -152 -101 -154 2 -2 58 38 126 88 68 50 127 90 132 88 5 -2 49 -72 98 -157 49 -85 93 -158 97 -163 4 -4 -3 75 -16 175 -12 100 -22 183 -20 183 1 1 73 -5 160 -14 86 -9 157 -14 157 -11 0 3 -80 41 -176 85 -97 44 -178 83 -180 87 -3 4 -72 356 -153 782 l-148 775 12 78 c16 101 58 256 96 352 38 96 131 291 139 291 3 0 45 -73 92 -163 81 -152 90 -174 138 -356 44 -165 71 -313 179 -979 l127 -785 -48 -139 c-26 -76 -42 -136 -35 -132 6 4 44 33 82 64 39 31 76 60 83 64 8 5 76 -42 187 -128 96 -75 175 -134 175 -131 0 2 -43 73 -96 157 -53 84 -98 158 -101 164 -3 7 29 13 94 18 131 9 224 18 220 22 -2 2 -91 22 -198 45 -106 23 -197 45 -201 48 -4 4 -64 357 -133 786 -101 627 -124 791 -119 835 17 143 101 350 213 523 l61 94 122 12 c434 44 976 189 1286 345 402 202 828 523 1115 841 111 123 259 316 309 403 17 31 58 90 90 131 78 97 233 333 299 451 142 258 249 542 301 801 19 93 23 145 22 284 -1 150 -4 182 -27 275 -57 223 -98 437 -104 540 -20 379 180 854 572 1355 124 160 238 281 1118 1195 437 454 793 827 791 829 -2 2 -274 -123 -605 -278 -332 -154 -604 -279 -606 -278 -1 2 256 236 572 522 316 285 575 523 575 527 0 9 -28 9 -120 -2z"/>
                                        </g>
                                    </mask>
                                </defs>

                                <g mask="url(#svgMask)">
                                    <rect width="1606" height="1165" fill="#fff"/>
                                    <rect className="gradient-overlay" width="1606" height="1165"
                                          fill="url(#shimmerGradient)"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-6xl text-center" style={{color: "#dc960d"}}>TOMBA</h1>
                    <p className="text-3xl text-center">Conte d'un pic noir</p>
                </div>

                <div className="my-12 text-xl mobile:text-justify">
                    <p className="mb-2 font-bold text-center">
                        Les Mineureuses sont fièr.e.s de vous présenter Tomba - Conte d’un pic noir, leur premier livre
                        !
                    </p>

                    <div className="flex my-12 justify-center">
                        <a className="p-5 text-3xl"
                           style={{
                               color: "white",
                               backgroundColor: "#dc960d",
                           }}
                           target="_blank"
                           rel="noreferrer"
                           href="https://www.helloasso.com/associations/les-mineureuses/boutiques/tomba-conte-d-un-pic-noir-le-livre">Se procurer le livre</a>
                    </div>

                    <p className="mb-2">
                        C'est l'histoire d'un oiseau qui ne savait pas qu'il pouvait voler, d'un chemin qui vient à la
                        rencontre d'une marche et d'un qui de joie qui résonne dans le cirque des montagnes.
                        Un album de 13 morceaux musicaux a été composé pour accompagner la lecture de Tomba.
                    </p>
                    <p className="mb-2">
                        Tomba - Conte d’un pic noir est un livre écrit, illustré et mis en musique collectivement par
                        Les Mineureuses.
                    </p>
                    <p className="mb-2">
                        En 2022, la folle aventure des Mineureuses tombe sur une veine de quartz et la chance de
                        co-écrire un livre. C’est ainsi que l’équipe est fière de vous dévoiler ce conte, aussi né à la
                        croisée des chemins entre le dessin, la parole, l’écriture et le son, tout plein de leurs
                        faire-ensemble, de leurs sueurs et de leurs philosophades.
                    </p>
                </div>
                <div className="flex justify-center">
                    <video src="videos/tomba_compressed.mp4" autoPlay loop muted className="max-w object-cover"/>
                </div>

                <div className="my-12 text-xl mobile:text-justify">

                    <p className="mb-2">
                        Pour sublimer le tout nous avons eu la chance de travailler avec l'atelier de sérigraphie
                        artisanale "L'apothicaire" pour la couverture ainsi que l'imprimeur Pierre Pore pour
                        l'impression du livre. Merci !
                    </p>
                    <p>
                        Nous remercions Mia Olofsson pour son précieux soutien graphique.
                    </p>
                </div>

            </div>
        </div>
        {/*<img className="max-w" src="images/tomba_bot.webp" alt=""/>*/}
    </>
}

export default Tomba
