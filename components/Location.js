import React from "react";
import styles from "../styles/Location.module.css"


const Location = ()=>
{ 
       
    return (
           <div  className={`${styles.location} w3-container w3-right w3-animate-left`}  >     
             <i className="material-icons">place</i> <p>Hyderabad</p> 
           </div>
    )


}

export default Location;