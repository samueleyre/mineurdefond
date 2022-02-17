
import style from "../../styles/exploration-rock.module.scss"



export default function ExplorationProjectComponent({ title, depth, rock, link, bottom, right }) {
    return (
        <div className={`layer roche`}
             style={{ bottom: `${bottom}%`, right: `${right * -1}%` }}
             data-depth={ depth }>
            <a className="cursor-none no-underline sm:text-3xl" href={ link }>
                <div className={`roche-img ${style['roche_'+rock]}`}>
                    <span className="font-amatic text sm:leading-8 mobile:leading-4">{title}</span>
                </div>
            </a>
        </div>
    )
}
