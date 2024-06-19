import Frame from "../../BasicFrame/frame";
import Wine from "./pic/vodka.jpg"
import Dropdowns from "./Dropdowns";
import Merchandise from "./Merchandise";
import "./css/WinePage.css"


const TestCss = {
    color: "black",
    fontSize: "20px",
    position: "relative"
}

const BannerCss = {
    backgroundImage: `url(${Wine})`,
}

const VodkaPage = () => {
    return(
        <div>
            <div style={TestCss}>
            <Frame/>
            <div className="Banner" style={BannerCss}>
                <span>伏特加 Vodka</span>
            </div>

            <Dropdowns />
            <Merchandise />


            

            
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        </div>
    );
}

export default VodkaPage