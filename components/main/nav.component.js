import Link from 'next/link'
import {useRouter} from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight} from "@fortawesome/free-solid-svg-icons/faAngleRight";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";


let menuActivated = false;
let subMenuActivated = false;

function rotate() {
    document.getElementById('nav-menu-icon').classList.toggle('nav-menu-icon--open')
}

function activateMenu() {
    rotate();
    if (menuActivated) {
        if (subMenuActivated) {
            toggleSubMenu();
        }
    }
    menuActivated = !menuActivated;
    document.getElementById('nav-menu-items-wrapper').classList.toggle('nav-menu-items-wrapper--open')
}

function toggleSubMenu() {
    subMenuActivated = !subMenuActivated;
    document.getElementById('nav-menu-main-items').classList.toggle('nav-menu-main-items--open')
    document.getElementById('nav-menu-sub-items').classList.toggle('nav-menu-sub-items--open')
}

export default function NavComponent({ mode }) {

    const router = useRouter();

    const navs = [
        {
            name : "Accueil",
            link : '/'
        },
        {
            name : "Contact",
            link : '/contact'
        },
    ].filter((nav => nav.link !== router.pathname));

    const projects_nav = [
        {
            name : "KLANG",
            link : '/klang'
        },
        {
            name : "KOLM",
            link : '/kolm'
        },
        {
            name : "Madam RamDam",
            link : '/madamramdam'
        },
        {
            name : "Tchoukadane",
            link : '/tchoukadane'
        },
        {
            name : "Terra Mare",
            link : '/terramare'
        },
        {
            name : "Thibault Gomez Quintet",
            link : '/thibaultgomezquintet'
        },
    ].filter((nav => nav.link !== router.pathname));

    return <div className={mode === "light" ? "nav-menu nav-menu--light" : "nav-menu"} >
        <div id="nav-menu-icon" onClick={activateMenu} className="nav-menu-icon">
            <svg
                width="36.011681mm"
                height="14.363094mm"
                viewBox="0 0 36.011681 14.363094"
            >
                <g
                    transform="translate(-58.021206,-120.43598)">
                    <g
                        transform="translate(45.595238,-139.33334)">
                        <circle
                            r="7.1815472"
                            cy="266.95087"
                            cx="30.238091"
                            id="path14"
                            />
                        <circle
                            r="2.6930804"
                            cy="267.09262"
                            cx="45.744568"
                            id="path14-3"
                            />
                        <circle
                            r="2.6930804"
                            cy="266.9509"
                            cx="15.119048"
                            id="path14-3-7"
                            />
                    </g>
                </g>
            </svg>

        </div>
        <div id="nav-menu-items-wrapper" className="nav-menu-items-wrapper">
            <div id="nav-menu-main-items" className="nav-menu-main-items nav-menu-main-items--open nav-menu-items">

                {navs.map((nav, index) => {
                    return <div key={index} className="nav-menu-item">
                        <Link href={nav.link}>{nav.name}</Link>
                    </div>
                })}
                <div className="nav-menu-item">
                    <a href="#" onClick={toggleSubMenu}>
                        <span className="pr-1">Projets</span>
                        <FontAwesomeIcon className="w-3" icon={faAngleRight} />
                    </a>
                </div>
            </div>
            <div id="nav-menu-sub-items" className="nav-menu-sub-items nav-menu-items">
                {projects_nav.map((nav, index) => {
                    return <div key={index} className="nav-menu-item">
                        <Link href={nav.link}>{nav.name}</Link>
                    </div>
                })}
                <div className="nav-menu-item">
                    <a href="#" onClick={toggleSubMenu}>
                        <FontAwesomeIcon className="w-3" icon={faAngleLeft} />
                        <span className="pl-1">Retour</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
}
