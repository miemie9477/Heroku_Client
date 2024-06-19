import Frame from "../../BasicFrame/frame";

const style={
    position:"relative",
    display:"block",
    paddingTop:"50px",
    paddingLeft:"100px",
    paddingRight:"100px",
    justifyContent:"left",
    height:"1000px"
}

const IntroductionPage = () =>{
    return(
        
        <div style={{position:"relative"}}>
            <Frame/>
            <div style={style}>

                <h1>關於買酒網</h1><hr/><br/>
                <h6>  MY9買酒網在2007年正式設立網路平台，並於2011年起在台北陸續成立銷售門市，提供酒類相關產品資訊與透明化的價格，買酒網把關產品來歷且保證品質的初衷作為經營宗旨，所有酒類商品均來自各品牌總公司、進口代理商或授權經銷商，我們希望帶給大家最值得信任的來源、最齊全的品項、最實惠的價格以及最周到完善的服務。 買酒網網站及銷售門市提供多元且全方位的酒類飲品資訊與透明化價格，自有車隊結合物流公司的宅配服務，讓您不用出門就能輕鬆選酒，享受迅速送達指定地點的便利與酒類資訊學習互動的樂趣。 買酒網總能陪伴在您生活中的每一個時刻：從威士忌、葡萄酒、清酒再到啤酒，有MY9買酒網的每個場合都將更美好。不論是居家品酒、朋友聚會小酌、春酒尾牙、私人派對、大小型活動、日常及年節送禮，甚至是專業收藏等用途，皆可依據不同需求提供商品推薦與量身訂做的專案服務；酒類服務上您所希望的，即便是門市未陳列，或是網站中未介紹的品項，我們將竭誠替您向各大酒廠或代理商洽詢，並彙集相關資訊給您分享。<br/><br/>
            在這個資訊快速流通的時代，買酒網透過即時商品推薦、主題專欄，美酒餐搭等各主題向各位介紹，更不定期推播品酒會、會員活動及節慶活動等，希望拉近彼次間的距離，與大家一同體驗新鮮事物的生活品味，也請大家記得追蹤我們的買酒網官網，社群平台: line@、Instagram。我們團隊中的每位成員將秉持喜愛酒類的熱情，真摯地傳遞分享給您們。</h6>
            </div>
            
        </div>
    );
}

export default IntroductionPage;