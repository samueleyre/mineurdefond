import dynamic from "next/dynamic";
import HeadComponent from "../components/main/head.component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NavComponent = dynamic(() => import('../components/main/nav.component'), {ssr: false})
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook"
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";


function Contact() {
    return <>
        <HeadComponent title="Contact"/>
        <NavComponent mode="light"/>
        <div style={{background: "#0d0d0d"}} className="pb-10 pt-20 h-screen bg-cover">
            <div className=" mobile:p-2 max-w-screen-lg m-auto">
                <h1 className="text-6xl text-center white">CONTACT</h1>
                <div style={{height: "220px"}} className="md:pt-20 mobile:pt-10 flex justify-evenly items-center flex-col">
                    <a className="white text-xl md:text-6xl" target="_blank" href="mailto:c.mineursdefond[at]gmail.com">c.mineursdefond
                        [at] gmail.com</a>
                    <div className="md:pt-5 flex justify-center items-center">
                        <a target="_blank" href="https://www.facebook.com/C.MineursDeFond"><FontAwesomeIcon className="p-2 white w-16"
                                                                                            icon={faFacebook}/></a>
                        <a target="_blank" href="https://www.instagram.com/mineurs_de_fond/"><FontAwesomeIcon className="p-2 white w-16"
                                                                                              icon={faInstagram}/></a>
                    </div>
                </div>
                <img className="m-auto max-w-full" width="600px" src="images/contact-center.webp" alt=""/>
            </div>
        </div>
    </>
}

export default Contact
