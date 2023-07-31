
export default function FestivalEventV2Component(
  {
    image=null,
    second_image=null,
    title,
    title_font = "font-amatic",
    title_color = "black",
    title_capital = "capitalize",
    place_and_time = null,
    actors = null,
    link,
    newPage = null,
    description = "",
    listenLink = null,
    fbEvent = null,
    copyright=null,
    image_position = "middle",
    second_image_position = "middle",
    duration = null,
  }
) {
    return (
        <div className="m-6 mb-12" style={{width: "1024px", maxWidth: "100%"}}>
            { image && !second_image ?
                    <div
                        className="festival-event-image m-auto"
                        style={{
                            backgroundImage: `url(/images/${image})`,
                            backgroundPosition: image_position,
                        }}
                    />
                : ""
            }
            { second_image && image ?
                <div
                  className="flex justify-between"
                >
                  <div
                      className="festival-event-image mr-4"
                      style={{
                          backgroundImage: `url(/images/${image})`,
                          backgroundPosition: image_position,
                      }}
                  />
                  <div
                      className="festival-event-image"
                      style={{
                          backgroundImage: `url(/images/${second_image})`,
                          backgroundPosition: second_image_position,
                      }}
                  />
                </div>

                : ""
            }
            { copyright ?
                <p className="text-sm text-right">© { copyright }</p>
                : ""
            }

            <a href={link} target={newPage ? "_blank" : "_self"} rel="noreferrer" style={link ? {cursor: "pointer"} : {cursor: "default"}}>
                <h5 className={"text-4xl pt-4 pb-4 font-bold " + title_font} style={{color: title_color}}>{title}</h5>
            </a>
            { place_and_time ?
                <p className="font-bold" dangerouslySetInnerHTML={{__html: place_and_time}}></p>
                : ""
            }
            <p className="pt-4" dangerouslySetInnerHTML={{__html: description}}></p>
            { actors ?
                <p className="italic pt-6" style={{color: "grey"}}>{actors}</p>
                : ""
            }
            { duration ?
                <p className="italic pt-6" style={{color: "grey"}}>Durée : {duration}</p>
                : ""
            }
            <div className="pt-8">
              { listenLink ?
                <a style={{ borderColor: "#a76a53", color: "#a76a53" }} className="underline p-4 border rounded-full" target="_blank" rel="noreferrer" href={listenLink}>Écouter</a>
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
