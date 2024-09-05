import { useSelector } from "react-redux";
import Homeitems from "../components/Homeitems";

const Home = ()=>{
   
  const items = useSelector(store => store.items)
  

 return <>
  <main>
        <div className="items-container">
          {items.map((item)=> <Homeitems key={item.id} item={item}/>)}
         
        </div>
    </main>
 </>
}
export default Home;