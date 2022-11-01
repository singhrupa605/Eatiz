import React from "react";
import styles from "../styles/Home.module.css"
import Dish from "./Dish";

const Home = ()=>
{
    return(
        <div className={`${styles.home}`}>
            <div className={`${styles.part1}`}>
             Part 1
            </div>
             <div  className={`${styles.part2} row`}>
            <div className={`${styles.food} col-xs-6 col-sm-4`}>
             {/* <Dish /> */}
            </div>
             <div className={`${styles.bar} col-xs-6 col-sm-4`}></div>
            </div>
       
        </div>

    )
}

export default Home;