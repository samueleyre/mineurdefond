import {HomeHeaderComponent} from "../components/home/home-header.component";
import HomeMainComponent from "../components/home/home-main.component";
import HeadComponent from "../components/main/head.component";

function Index() {
    return (
        <>
            <HeadComponent title=""/>
            <div className="bg-no-repeat w-full bg-cover " style={{backgroundImage: "url(/images/home_bg.png)"}}>
                <HomeHeaderComponent/>
                <HomeMainComponent/>
            </div>
        </>

    )
}

export default Index
