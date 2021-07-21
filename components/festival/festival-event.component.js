
export default function FestivalEventComponent({title, title_color = "black", place_and_time, musique_style, link}) {
    return (
        <div className="text-center m-6" style={{width: "250px"}}>
            <a href={link} style={link ? {cursor: "pointer"} : {cursor: "default"}}>
                <h5 className="text-4xl pb-4" style={{color: title_color}}>{title}</h5>
            </a>
            <p>{place_and_time}</p>
            <p className="italic pt-1">{musique_style}</p>
        </div>
    )
}

