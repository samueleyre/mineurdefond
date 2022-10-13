import dynamic from "next/dynamic";
import HeadComponent from "../components/main/head.component";
import getEvents from "../lib/airtable_api";
import {Component} from "react";

const NavComponent = dynamic(() => import('../components/main/nav.component'), {ssr: false})


export default class Events extends Component {

    events;

    constructor({ events }) {
        super({ events });
        this.events = events.filter((event) => new Date(event.date).getTime() >=  (new Date().getTime() - 86400000) );
    }


    render() {


        return <>
            <HeadComponent title="Events"/>
            <NavComponent mode="light"/>
            <div style={{background: "#0d0d0d"}} className="pb-10 pt-20 bg-cover min-h-screen	">
                <div className=" mobile:p-2 max-w-screen-lg m-auto">
                    <h1 className="text-6xl text-center white mb-20">DATES A VENIR</h1>
                    {this.events.map((event, index) => {
                        return <a className="sm:duration-300 sm:ease-in-out sm:grayscale sm:hover:grayscale-0" target="_blank" href={event.link}><div className="p-4 flex white mb-20 mobile:flex-col mobile:text-center">
                            <img src={event.image[0].url}  alt={event.name} className="rounded-full w-40 h-40 sm:mr-10 mobile:m-auto object-cover mobile:mb-4"/>
                            <div>
                                <h2 className="text-4xl text-gradient-color">{event.name}</h2>
                                <h3 className="text-2xl">{event.date} · {event.hour}h · {event.place}</h3>
                                <p className="pt-4 mobile:text-justify">{event.description}</p>
                            </div>
                        </div></a>
                    })}
                </div>
            </div>
        </>
    }
}

export async function getStaticProps() {
    return {
        props: {
            events: await getEvents() || [],
        },
    }
}

