
export default function FestivalEventV2Component(
  {
    image=null,
    title,
    title_color = "black",
    place_and_time,
    musique_style,
    link,
    newPage = null,
    description = "",
    listenLink = null,
    fbEvent = null,
    copyright=null,
  }
) {
    return (
        <div className="m-6" style={{width: "1024px", maxWidth: "100%"}}>
            { image ?
                    <div
                        style={{
                            width: "1024px",
                            maxWidth: "100%",
                            height: "500px",
                            backgroundImage: `url(/images/${image})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "bottom",
                            margin: "auto"
                        }}
                    />
                : ""
            }
            { copyright ?
                <p className="text-sm text-right">© { copyright }</p>
                : ""
            }

            <a href={link} target={newPage ? "_blank" : "_self"} rel="noreferrer" style={link ? {cursor: "pointer"} : {cursor: "default"}}>
                <h5 className="text-4xl pt-4 pb-4 font-bold" style={{color: title_color}}>{title}</h5>
            </a>
            <p>{place_and_time}</p>
            <p className="italic pt-1" style={{color: "grey"}}>{musique_style}</p>
            <p className="pt-4" dangerouslySetInnerHTML={{__html: description}}>
            </p>
            <div className="flex flex-col items-center justify-center">
              { listenLink ?
                <a className="underline mt-4" target="_blank" rel="noreferrer" href={listenLink}>Écouter</a>
                : ""
               }
               { fbEvent ?
                <a className="underline mt-2" target="_blank" rel="noreferrer" href={fbEvent}>Plus d'infos/évènement Fb</a>
                : ""
               }
            </div>
        </div>
    )
}
