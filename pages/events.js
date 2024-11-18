import dynamic from "next/dynamic";
import HeadComponent from "../components/main/head.component";
import getEvents from "../lib/airtable_api";
import {Component} from "react";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import Head from "next/head";


const NavComponent = dynamic(() => import('../components/main/nav.component'), {ssr: false})


export default class Events extends Component {

    events;

    constructor({ events }) {
        super({ events });
        this.events = events.filter(
            (event) =>
                new Date(event.date).getTime() >=  (new Date().getTime() - 86400000)
                && event.confirmed
        );
    }


    render() {


        return <>
            <HeadComponent title="Events"/>
            <Head>
                {this.events.length > 0 && this.events[0].image && (
                    <link rel="preload" href={this.events[0].image[0].url} as="image" />
                )}
            </Head>
            <NavComponent mode="light"/>
            <div style={{background: "#0d0d0d"}} className="pb-10 pt-20 bg-cover min-h-screen	">
                <div className=" mobile:p-2 max-w-screen-lg m-auto">

                    {this.events.length > 0 ? (
                    <>
                    <h1 className="text-6xl text-center white mb-20">DATES A VENIR</h1>
                    {this.events.map((event, index) => {
                        return <a key={index} className="sm:duration-300 sm:ease-in-out sm:grayscale sm:hover:grayscale-0" target={event.link ? "_blank" : "_self"} rel="noreferrer" href={event.link ? event.link : "javascript:void(0)"}><div className="p-4 flex white mb-20 mobile:flex-col mobile:text-center mobile:items-center">
                            <div> {/*no choice but to use a div here*/}
                                {event.image !== null ? (
                                    <Image layout="fixed" width="200px" height="200px" src={event.image[0].url}  alt={event.name} className="rounded-full object-cover mobile:pt-10"/>
                                ) : (
                                    <div style={{"width": "200px", "height": "200px"}}></div>
                                )}
                            </div>
                            <div className="mobile:pt-4 sm:ml-10 flex flex-col justify-center">
                                <h3 className="text-4xl text-gradient-color sm:w-max">{event.name}</h3>
                                <p className="text-2xl">{new Date(event.date).toLocaleDateString()} · {event.hour ? event.hour + "h · " : ""}{event.place}</p>
                                <p className="pt-4 mobile:text-justify">{event.description}</p>
                            </div>
                        </div></a>
                    })}
                    </>
                    ) : (
                        <>
                            <h1 className="text-6xl text-center white mb-20">AUCUNES DATES DE PREVUES</h1>
                            <div className="md:pt-5 flex justify-center items-center">
                                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/C.MineursDeFond"><FontAwesomeIcon className="p-2 white w-16" icon={faFacebook}/></a>
                                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/mineurs_de_fond/"><FontAwesomeIcon className="p-2 white w-16" icon={faInstagram}/></a>
                            </div>
                        </>

                    )}
                </div>
            </div>
        </>
    }
}

export async function getStaticProps() {
    return {
        props: {
            events: await getEvents() || []
        },
    }
}

