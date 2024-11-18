import Image from "next/image";


export default function ProjectEventComponent({index, event}) {
    return (
        <a key={index} className="sm:duration-300 sm:ease-in-out sm:grayscale sm:hover:grayscale-0"
           target={event.link ? "_blank" : "_self"} rel="noreferrer"
           href={event.link ? event.link : "javascript:void(0)"}>
            <div className="p-4 flex mb-20 mobile:flex-col mobile:text-center mobile:items-center">
                <div> {/*no choice but to use a div here*/}
                    {event.image !== null ? (
                        <Image layout="fixed" width="200px" height="200px" src={event.image[0].url} alt={event.name}
                               className="rounded-full object-cover mobile:pt-10"/>
                    ) : (
                        <div style={{"width": "200px", "height": "200px"}}></div>
                    )}
                </div>
                <div className="mobile:pt-4 sm:ml-10 flex flex-col justify-center">
                    <h3 className="text-4xl text-gradient-color sm:w-max">{event.name}</h3>
                    <p className="text-cameo text-2xl">{new Date(event.date).toLocaleDateString()} · {event.hour ? event.hour + "h · " : ""}{event.place}</p>
                    <p className="pt-4 mobile:text-justify">{event.description}</p>
                </div>
            </div>
        </a>
    )
}



