import Parallax from "parallax-js";
import ExplorationProjectComponent from "./exploration-project.component";


if (document.readyState === "complete") {
  setTimeout(()=> {
    init();
  }, 2000);
}

window.addEventListener("load", function(){
  init();
});

function init() {

  const parent = document.getElementById('exploration');

  new Parallax(parent, {
      invertX: true,
      invertY: true,
      limitX: 26,
      limitY: 5,
  });

  initMouseHallow();

}

/**
 * Special cursor for exploration
 */
function mouseMove(e) {

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        return;
    }

    const x = e.clientX;
    const y = e.clientY;

    const circle = document.getElementById("circle-mask");
    const shadowCircle = document.getElementById("circle-shadow");

    const top = document.body.offsetTop;
    const left = document.body.offsetLeft;

    const mX = (x - left);
    const mY = (y - top);

    circle.setAttribute("cx", mX.toString())
    circle.setAttribute("cy", mY.toString())
    shadowCircle.setAttribute("cx", mX.toString())
    shadowCircle.setAttribute("cy", mY.toString());

}

function initMouseHallow() {
    const circle = document.getElementById("circle-mask");
    const shadowCircle = document.getElementById("circle-shadow");

    const top = window.innerHeight;
    const left = window.innerWidth;

    const mX = (left / 2);
    const mY = (top / 2);

    circle.setAttribute("cx", mX.toString())
    circle.setAttribute("cy", mY.toString())
    shadowCircle.setAttribute("cx", mX.toString())
    shadowCircle.setAttribute("cy", mY.toString());
    shadowCircle.style.fill = "url(#gradient) transparent";
}



export default function ExplorationComponent() {
    return (
        <>

            <div onMouseMove={mouseMove} className="exploration"  id="exploration" style={{zIndex: 1, position: "fixed", cursor: "none"}}
                 data-pointer-events="true">
                <div className="layer fonds mobile:hidden" data-depth="0"
                     style={{backgroundImage: "url(/images/exploration_bg.jpeg)"}}>
                    <div className="returnLink">
                        <a className="font-amatic text-4xl" href="/">Accueil</a>
                    </div>
                </div>
                <ExplorationProjectComponent
                    title="KLANG"
                    bottom="4"
                    right="-20"
                    depth="1"
                    link="klang"
                    rock="caillans"
                />
                <ExplorationProjectComponent
                    title="KOLM"
                    bottom="-20"
                    right="20"
                    depth="1"
                    link="kolm"
                    rock="minus"
                />
                <ExplorationProjectComponent
                    title="Tchoukadane"
                    bottom="-40"
                    right="-70"
                    depth="3"
                    link="tchoukadane"
                    rock="caillans"
                />
                <ExplorationProjectComponent
                    title="Thibault Gomez Quintet"
                    bottom="30"
                    right="70"
                    depth="3"
                    link="thibaultgomezquintet"
                    rock="minus"
                />
                <ExplorationProjectComponent
                    title="Terra Mare"
                    bottom="-40"
                    right="60"
                    depth="2"
                    link="terramare"
                    rock="minus"
                />
                <ExplorationProjectComponent
                    title="Madam RamDam"
                    bottom="30"
                    right="-60"
                    depth="2"
                    link="madamramdam"
                    rock="minus"
                />

            </div>
            <svg className="exploration" id="svg" style={{zIndex: 5, position: "absolute", pointerEvents: "none"}}>
                <radialGradient id="gradient" x2="1" y2="1">
                    <stop offset="0%" stopColor="transparent"/>
                    <stop offset="60%" stopColor="transparent"/>
                    <stop offset="95%" stopColor="black"/>
                    <stop offset="100%" stopColor="black"/>
                </radialGradient>
                <defs>
                    <mask id="mask" x="0" y="0" width="100%" height="100%">
                        <rect x="0" y="0" width="100%" height="100%" fill="#fff"/>
                        <circle id="circle-mask" r="200"/>
                    </mask>
                </defs>
                <rect width="100%" height="100%" mask="url(#mask)"/>
                <circle id="circle-shadow" r="200"
                        style={{fill: "black", strokeWidth: "68px", stroke: "black"}}/>
            </svg>
            <div className="absolute z-40 bg-black h-full w-full fade-out pointer-events-none"/>
        </>
    )
}
