import dynamic from "next/dynamic";
import HeadComponent from "../components/main/head.component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NavComponent = dynamic(() => import('../components/main/nav.component'), {ssr: false})


function Histoire() {
    return <>
        <HeadComponent title="Histoire"/>
        <NavComponent mode="light"/>
        <div style={{height: "2000px"}} className="w-full max-w-screen absolute overflow-hidden">
            <div id="light" className="lightContainer">
                <div className="light"></div>
            </div>
        </div>
        <div style={{background: "#0d0d0d"}} className="pb-10 pt-20 h-full bg-cover pr-12 pl-12">
            <div className=" mobile:p-2 max-w-screen-lg m-auto">
                <h1 className="text-6xl text-center white">Histoire</h1>
                <div className="md:pt-20 mobile:pt-10 white text-2xl">
                    <p>C'est dans le chahut
                        d'une multitude, entre l'usine des halles et la buissonnière, qu'aurait pu
                        naître, une nuit, La Collective Des Mineure De Fond. Mais il faut parfois plusieurs obscurités
                        pour que quelques souffles éparses se retrouvent.</p>

                    <br/><br/>

                    <p>Pourtant c'est bien là, dans la folie de la
                        foule du Champs-De-Berry*, que fut découvert, en 2009 du calendrier binaire, la première veine
                        de lumineuse.</p>
                    <br/><br/>

                    <p> Ce printemps-là, plusieurs jeunesses s'aventuraient à la recherche
                        du tout-brillant, dans les galeries anciennes de Vogue-Là* comme dans celles qui
                        n'existaient plus, alentour, et qu'il devenait nécessaire de redécouvrir pour
                        s'y retrouver et s'y blottir. Et de celles, des nuits, qui fît fête, fut celle des
                        halles du Champs-De-Berry*. Près d'une centaine de têtes de pioches s'étaient
                        retrouvées au fond de l'ancienne usine* pour célébrer la fin des succursales de
                        L'Éducation Rationnelle*. Chœurs sous le cercle noir du peintre, bal-à-la-bougie dans
                        ledit gymnase et farandoles folâtres sous la foudre qui tonitruait étaient en liesse. </p>
                    <br/><br/>


                    <p>C'était la saison des multiples et des collectives, la première des
                        possibles, et l'on se rencontrait, avec joie, dans le Bassin-De-Berry. De ces
                        futurs-fleuves, dont allait jaillir La Collective Des Mineurs De Fond, il y avait Vincent, venu
                        des hautes galeries de Bercer-Maurice*, Violette des ramifications du Bouger*, Thibault, Fabien
                        et Paolo d'Aigre-Douce*, Antoine des Hauts-De-Berry*, Benoît des Bois-De-Berry* et Lola de
                        Pont-Paladru*.</p>

                    <br/><br/>

                    <p>L'appel était puissant et toutes ces jeunes sueurs-froides se
                        retrouvaient tant à Vogue-Là, qu'à La Boîte-à-Musique* qu'au troc-café du
                        coin.</p>
                    <br/><br/>


                    <p>En 2010, des premières formes virent le jour et les aventures se
                        multipliaient, saison après saison, au C'est-Sérieux* du Champs-De-Berry, puis à celui de
                        Ville-Urbaine* et de Lions-Nous* ainsi qu'à la Place-D'arts* de cette même ville que
                        dans d'autres alternatives.</p>

                    <br/><br/>

                    <p>C'est en 2013, que dans les bouges de Lions-Nous, se forgeaient les
                        groupes comme le Thibault Gomez Quintet, Tchoukadane MaDam RamDam.</p>

                    <br/><br/>

                    <p>Puis toutes et tous étaient appelées vers d'autres profondeurs, à
                        Biniou-Sur-Air*, Pavane*, et ailleurs. Les lignes étaient parfois coupées, les signaux rares et
                        les connexions difficiles. Mais joie! Toutes et tous se retrouvaient chaque année à L'Eté
                        Des Nuits*, terre d'argile dont èlil (elles-ils) firent leurs masques de fête et
                        d'espoir.</p>

                    <br/><br/>

                    <p>Et c'est en 2016, après quintes de souterraines, que se retrouvaient
                        ces quelques clairs-de-nuit, à Pavane*, pour y créer La Collective Des Mineure De Fond, enfin!
                        Des petits exploits au grand cœur furent accomplit, à La Petite Maison, puis au Frigo. Mais un
                        coup de grisou emporta grand Benoît des Bois-De-Berry vers d'autres organisations
                        périphériques*. Et c'est aussi, l'année suivante, qu'un effondrement eu
                        presque emporté Paolo d'Aigre-Douce, qui fut rapatrié dans les Grottes-De-L'Epine*.
                        En 2019 parti Thibault d'Aigre-Douce pour l'équipe des casques-à-cornes du nord*
                        avant de revenir à Pavane. Depuis, l'équipe se partage les avancées des cathédrales
                        souterraines par signaux cycliques et se retrouvent chaque année à l'occasion de fêtes,
                        empruntant parfois aussi, malgré le tort fait aux presque dieux des forêts*, La Sifflante
                        Nerveuse des Chemins Fous. </p>

                    <br/><br/>

                    <p>Aujourd'hui La Collective Des Mineure De Fond ouvre
                        grandes ses mines, à ciel ouvert comme dans les circuits digitaux grâce au jeune Sam
                        d'Aigre-Douce, pour y partager ses chants et ses sons, ses images et ses rêves, comme des
                        crédos, sur la rive d'un lac souterrain comme à l'apostrophe des interstices. Ici,
                        des poètes-sans-paroles, des musiciens-sans-muses et des fédérateurs-sans-drapeaux, au courage
                        de se perdre mille fois pour, à l'aube de la nuit, toujours colporter la joie.»</p>

                    <br/><br/>

                    <ul className="italic">
                        <li>*Champs-De-Berry: Chambéry</li>
                        <li>*Vogue-Là: Lycée Vaugelas</li>
                        <li>*halles du
                            Champs-De-Berry, l'ancienne usine: Anciennes Halles de Chambéry</li>
                        <li>*succursales de
                            L'Education Rationnelle: Baccalauréat</li>
                        <li>*Bercer-Maurice: Bourg Saint Maurice</li>
                        <li>*Bouger: Bugey</li>
                        <li>*Aigre-Douce: Aiguebelette</li>
                        <li>*Hauts-De-Berry, Bois-De-Berry: Alentours de Chambéry</li>
                        <li>*Pont-Paladru: Région du lac de Paladru</li>
                        <li>*Boite-à-Musique: Conservatoire de Chambéry</li>
                        <li>*C'est-Sérieux: CRR</li>
                        <li>*Ville-Urbaine: Villeurbanne</li>
                        <li>*Lions-Nous: Lyon</li>
                        <li>*Place-D'arts: Les Beaux arts de Lyon</li>
                        <li>*Biniou-Sur-Air: Buenos Aires</li>
                        <li>*Pavane: Paris</li>
                        <li>*L'Eté Des Nuits: Festival Les Nuits d'Eté</li>
                        <li>*organisations périphériques: d'autres collectifs amis</li>
                        <li>*l'équipe des casques-à-cornes du nord: Conservatoire de Copenhague</li>
                        <li>*Grottes-De-L'Epine: Région du lac d'Aiguebelette</li>
                        <li>*presque dieux des forêts: les sangliers</li>
                    </ul>

                </div>
                <div className="m-auto max-w-full bg-contain bg-no-repeat bg-center" style={{height: "400px", backgroundImage : "radial-gradient(transparent, rgb(13, 13, 13) 53%), url('images/contact-center.png')"}}></div>
            </div>
        </div>
    </>
}

export default Histoire
