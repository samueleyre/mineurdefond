import ProjectRockComponent from "../components/project/project-rock.component";
import ProjectLayoutComponent from "../components/project/project-layout.component";
import {Component} from "react";
import getEvents from "../lib/airtable_api";
import ProjectEventComponent from "../components/project/project-event.component";


export default class Meije extends Component {

    nextEvents;
    pastEvents

    constructor({events}) {
        super({events});
        this.nextEvents = events.filter(
            (event) =>
                new Date(event.date).getTime() >= (new Date().getTime() - 86400000)
                && event.projectName === "Meije"
                && event.confirmed
        );
        this.pastEvents = events.filter(
            (event) =>
                new Date(event.date).getTime() < (new Date().getTime() - 86400000)
                && event.projectName === "Meije"
                && event.confirmed
        );
    }


    render() {
        return <>
            <ProjectRockComponent title="Meije" description="Trio granitique"/>
            <ProjectLayoutComponent>
                <p className="text-xl md:w-10/12 text-center m-auto mb-10">
                    Fruit de plusieurs rencontres improvisées, Meije se dessine à partir de recherches sur des sonorités
                    et
                    textures âpres et envoûtantes. L’univers de ce trio aérien et aquatique, parsemé de compositions
                    minimalistes, peint de grands espaces sonores et des paysages oniriques. </p>
                <div className="flex flex-wrap justify-evenly items-center mt-16 mb-16">
                    <p className="flex flex-col sm:p-20 text-xl sm:w-5/12 mb-4">
                        <span className="flex flex-col pb-2">
                            <span className="font-bold block">Benjamin François</span>
                            Batterie
                        </span>
                        <span className="flex flex-col pb-2">
                        <span className="font-bold"><a rel="noreferrer" href="https://leaciechelski.com/"
                                                       target="_blank">Léa Ciechelski</a></span>
                            Saxophone alto, effets
                        </span>
                        <span className="flex flex-col pb-2">
                        <span className="font-bold"><a rel="noreferrer" href="https://vincentduchosal.fr/"
                                                       target="_blank">Vincent Duchosal</a></span>
                            Guitare électrique, guitare baryton, effets et préparations
                        </span>
                    </p>
                    <div className="max-w-full">
                        <img className="image-clip-2" style={{width: "500px"}} src="images/meije.webp" alt="Photo de concert Meije"/>
                    </div>
                </div>
                <h2 className="text-3xl font-amatic text-center">
                    « Ecoute »
                </h2>
                <div className="max-w-full flex justify-center mt-20">
                    <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1807840978&color=%232b322f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </div>
                <div className="max-w-full flex justify-center mt-20">
                    <iframe style={{border: 0, width: "350px", height: "350px"}}
                            src="https://bandcamp.com/EmbeddedPlayer/album=715485014/size=large/bgcol=ffffff/linkcol=333333/minimal=true/transparent=true/"
                            seamless><a href="https://meije3.bandcamp.com/album/-">Meije</a>
                    </iframe>
                </div>
                <p className="text-sm text-center p-2">
                    EP 2023
                </p>
                <div className="max-w-full mb-16">
                    <h2 className="text-center font-amatic mb-8">
                        » Contact Booking «
                    </h2>
                    <p className="text-center text-xl">
                        <a href="mailto:lea.ciechelski@gmail.com">
                            lea.ciechelski@gmail.com
                        </a>
                    </p>
                    <p className="text-center text-xl">
                        <a href="mailto:contact@vincentduchosal.fr">
                            contact@vincentduchosal.fr
                        </a>
                    </p>
                </div>
                {
                    this.nextEvents.length > 0 ?
                        <h2 className="text-2xl font-amatic text-center mb-8">
                            « Dates à Venir »
                        </h2>
                        : ""
                }
                {
                    // eslint-disable-next-line react/jsx-key
                    this.nextEvents.map((event, index) => <ProjectEventComponent index={index} event={event}/>)
                }

                <div className="max-w-full">
                    <img className="image-clip-1" style={{width: "100%"}} src="images/meije_4.webp"
                         alt="Photo du groupe Meije"/>
                </div>
                {
                    this.nextEvents.length > 0 ?
                        <h2 className="text-2xl font-amatic text-center mb-8 mt-8">
                            « Dates Passées »
                        </h2>
                        : ""
                }
                {
                    // eslint-disable-next-line react/jsx-key
                    this.pastEvents.map((event, index) => <ProjectEventComponent index={index} event={event}/>)
                }


            </ProjectLayoutComponent>
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

