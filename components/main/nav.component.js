import Link from 'next/link'
import {useRouter} from "next/router";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight} from "@fortawesome/free-solid-svg-icons/faAngleRight";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";


let menuActivated = false;
let subMenuActivated = false;

function rotate() {
    document.getElementById('nav-menu-icon').classList.toggle('nav-menu-icon--open')
}

function rotateLight() {
    const light = document.getElementById('light');
    if (light) {
        light.classList.toggle('lightContainer--hidden')
    }
}

function toggleMenu() {
    rotate();
    rotateLight();
    if (menuActivated && subMenuActivated) {
        document.getElementById('nav-menu-main-items').classList.add('nav-menu-main-items--open')
        Array.from(document.getElementsByClassName(`nav-menu-sub-items`)).forEach(e => e.classList.remove(`nav-menu-sub-items--open`))
    }
    menuActivated = !menuActivated;
    document.getElementById('nav-menu-items-wrapper').classList.toggle('nav-menu-items-wrapper--open')
}

function toggleSubMenu(menu_id) {
    subMenuActivated = !subMenuActivated;
    document.getElementById('nav-menu-main-items').classList.toggle('nav-menu-main-items--open')
    document.getElementById(`nav-menu-sub-items-${menu_id}s`).classList.toggle(`nav-menu-sub-items--open`)
}


export default function NavComponent({mode, sm_mode, position, mobile_only = false}) {

    if (!position) {
        position = "absolute";
    }

    const router = useRouter();

    const navs = [
        {
            name: "Accueil",
            link: '/'
        },
        {
            name: "Dates",
            link: '/events'
        },
        {
            name: "Projets",
            submenu: "project"
        },
        {
            name: "Festival",
            submenu: "edition"
        },
        {
            name: "Histoire",
            link: '/histoire'
        },
        {
            name: "Contact",
            link: '/contact'
        },
    ].filter((nav => "submenu" in nav || nav.link !== router.pathname));

    const projects_nav = [
        {
            name: "KLANG",
            link: '/klang'
        },
        {
            name: "KOLM",
            link: '/kolm'
        },
        {
            name: "Madam RamDam",
            link: '/madamramdam'
        },
        {
            name: "Tchoukadane",
            link: '/tchoukadane'
        },
        {
            name: "Zozio",
            link: '/zozio'
        },
        {
            name: "Thibault Gomez Quintet",
            link: '/thibaultgomezquintet'
        },
    ].filter((nav => nav.link !== router.pathname));

    const editions_nav = [
        {
            name: "Edition 2022",
            link: '/festival-des-pantomines'
        },
        {
            name: "Edition 2021",
            link: '/festival-des-pantomines-2021'
        },
    ].filter((nav => nav.link !== router.pathname));


    const mobile = window.innerWidth < 768;
    if (!sm_mode) {
        sm_mode = mode;
    }

    return <>
        {!mobile ? !mobile_only ? (
        <div
            className={`${position} nav-menu ${mode === "light" ? "nav-menu--light" : "nav-menu--dark"} ${sm_mode === "light" ? "mobile-nav-menu--light" : "mobile-nav-menu--dark" } mt-4 pl-4 desktop mobileToTabloid:flex z-50`}>
            <div id="nav-menu-icon" onClick={toggleMenu} className="nav-menu-icon">
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
                <div id="nav-menu-main-items"
                     className="nav-menu-main-items nav-menu-main-items--open nav-menu-items absolute mobileToTabloid:mb-2 mobileToTabloid:flex-row mobileToTabloid:overflow-x-auto">

                    {navs.map((nav, index) => {

                        if ("submenu" in nav) {
                            return <div className="nav-menu-item">
                                <a href="#" onClick={() => toggleSubMenu(nav.submenu)}>
                                    <span className="pr-1">{nav.name}</span>
                                    <FontAwesomeIcon className="nav-menu-item-projets w-3" icon={faAngleRight}/>
                                </a>
                            </div>
                        } else {
                            return <div key={index} className="nav-menu-item">
                                <Link href={nav.link}>{nav.name}</Link>
                            </div>
                        }
                    })}

                </div>
                <div id="nav-menu-sub-items-projects"
                     className="nav-menu-sub-items nav-menu-items mobileToTabloid:mb-2 absolute mobileToTabloid:flex-row mobileToTabloid:overflow-x-auto">
                    {projects_nav.map((nav, index) => {
                        return <div key={index} className="nav-menu-item">
                            <Link href={nav.link}>{nav.name}</Link>
                        </div>
                    })}
                    <div className="nav-menu-item">
                        <a href="#" onClick={() => toggleSubMenu("project")}>
                            <FontAwesomeIcon className="nav-menu-item-retour w-3" icon={faAngleLeft}/>
                            <span className="pl-1">Retour</span>
                        </a>
                    </div>
                </div>
                <div id="nav-menu-sub-items-editions"
                     className="nav-menu-sub-items nav-menu-items mobileToTabloid:mb-2 absolute mobileToTabloid:flex-row mobileToTabloid:overflow-x-auto">
                    {editions_nav.map((nav, index) => {
                        return <div key={index} className="nav-menu-item">
                            <Link href={nav.link}>{nav.name}</Link>
                        </div>
                    })}
                    <div className="nav-menu-item">
                        <a href="#" onClick={() => toggleSubMenu("edition")}>
                            <FontAwesomeIcon className="nav-menu-item-retour w-3" icon={faAngleLeft}/>
                            <span className="pl-1">Retour</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>) : "" : (
        <div
            className={`nav-menu ${sm_mode === "light" ? "nav-menu--light" : "mobile-nav-menu--dark"} absolute w-full mobile z-50`}>
            <div id="nav-menu-items-wrapper" className="nav-menu-items-wrapper absolute bg-black flex w-full h-screen justify-center items-center">
                <div id="nav-menu-main-items" className="nav-menu-main-items nav-menu-main-items--open nav-menu-items">
                    {navs.map((nav, index) => {
                        if ("submenu" in nav) {
                            return <div className="nav-menu-item ">
                                <a className="flex items-center" href="#" onClick={() => toggleSubMenu(nav.submenu)}>
                                    <span className="pr-1">{nav.name}</span>
                                    <FontAwesomeIcon className="w-3" icon={faAngleRight}/>
                                </a>
                            </div>
                        } else {
                            return <div key={index} className="nav-menu-item">
                                <Link href={nav.link}>{nav.name}</Link>
                            </div>
                        }
                    })}
                </div>
                <div id="nav-menu-sub-items-projects" className="nav-menu-sub-items nav-menu-items">
                    {projects_nav.map((nav, index) => {
                        return <div key={index} className="nav-menu-item">
                            <Link href={nav.link}>{nav.name}</Link>
                        </div>
                    })}
                    <div className="nav-menu-item nav-menu-item--return">
                        <a className="flex items-center" href="#" onClick={() => toggleSubMenu("project")}>
                            <FontAwesomeIcon className="w-3" icon={faAngleLeft}/>
                            <span className="pl-1">Retour</span>
                        </a>
                    </div>
                </div>
                <div id="nav-menu-sub-items-editions" className="nav-menu-sub-items nav-menu-items">
                    {editions_nav.map((nav, index) => {
                        return <div key={index} className="nav-menu-item">
                            <Link href={nav.link}>{nav.name}</Link>
                        </div>
                    })}
                    <div className="nav-menu-item nav-menu-item--return">
                        <a className="flex items-center" href="#" onClick={() => toggleSubMenu("edition")}>
                            <FontAwesomeIcon className="w-3" icon={faAngleLeft}/>
                            <span className="pl-1">Retour</span>
                        </a>
                    </div>
                </div>

            </div>
            <div id="nav-menu-icon" onClick={toggleMenu} className="nav-menu-icon mt-4 ml-4 z-20 absolute">
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
        </div>)}
    </>
}
