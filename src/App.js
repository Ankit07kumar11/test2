
import Body4 from "./Components/Serviceprovider";
import Foot from "./Components/Foot";
import Header from "./Components/Header";
import Items from "./Components/Items";
import Serviceproducts from "./Components/Serviceproducts";
import Serviceslider from "./Components/Serviceslider";
import Swiper1 from "./Components/Swiper1";

export default function App() {
  return (
    <div className="bg-gray-100">
      <Header/> 
      <Swiper1/>
      <Items/>
      <Serviceproducts/>
      <Serviceslider/>
      <Body4/>
      <Foot/>
    </div>
  )
}