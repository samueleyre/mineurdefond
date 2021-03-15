
import style from "../../styles/exploration-rock.module.scss"



export default function ExplorationProjectComponent({ title, depth, rock, link, bottom, right }) {
    return (
        <div className={`layer roche`} style={{ bottom: `${bottom}%`, right: `${right * -1}%` }}
             data-depth={ depth }>
            <a className="no-underline font-amatic text-3xl" href={ link }>
                <div className={`roche-img ${style['roche_'+rock]}`}>
                    <span className="text">{title}</span>
                </div>
            </a>
        </div>
    )
}
