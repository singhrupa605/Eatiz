import React from "react"
import styles from "../styles/Main.module.css"
import Search from '../components/Search'
import Location from '../components/Location'
import Middle from '../components/Middle'
import OurServices from '../components/OurServices'
import Home from "./Home"

const Main = ()=>
{
  return (  
  <div className = {`${styles.parent}`}>
   <Home /> 
   </div>
  )
}
   
    {/* <div> */}
      {/* <div className={`${styles.search} col-xs-4`}>
      <Search />
      </div>
       <div className="col-xs-2">
        <Location />
      </div> */}
  
      
     

    {/* </div> */}

     {/* <div>
    <OurServices />
     </div>
      <div>
      <Middle />
      </div> */}
    



export default Main;