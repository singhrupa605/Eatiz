import  React, {useState} from "react";
import styles from "../styles/Search.module.css"


// w3-container w3-left w3-animate-top
   
const Search = () => {

    return (
        <div className={styles.parent}>
            <div className={styles.foodParent}>
                <p className={styles.food} >Food</p>
            </div>
            <div className={styles.sloganParent}>
                <p className={styles.slogan}> Discover Restaurant  <br />  & Delicious Food  </p> 
            </div>      
            <form className={styles.searchParent}  >
              <input className={styles.search} placeholder="search restaurant or food" ></input>
              <button className={styles.btn}> GO </button>
            </form>
        </div>
    )
}

export default Search