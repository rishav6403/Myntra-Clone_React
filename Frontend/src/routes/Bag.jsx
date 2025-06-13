import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSumarry";


const Bag = ()=>{
  const bagItem = useSelector((state)=>state.bag);
  const items = useSelector((state)=>state.items)
  
  const finalItems = items.filter((item)=> bagItem.includes(item.id)
  )
  

    return<>
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item)=><BagItem item={item}/>)}
        </div>
        <BagSummary/>
      </div>
    </main>
    </>
}
export default Bag;