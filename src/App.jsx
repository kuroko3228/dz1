import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Trade from "./components/Trade/Trade";
import Fotter from "./components/Fotter/Fotter";
import './global.css'
import Seller from "./components/Seller/Seller";
import Lastfooter from "./components/SecondFooter/SecondFooter";
import Deal from "./components/DealOfWeek/DealOfWeek";

function App (){
    return (
    <>
      <Header/>
      <Shop/>
      <Seller/>
      <Deal/>
      <Trade/>
      <Fotter/>
      <Lastfooter/>
    </>
    );
}
export default App;