import React from "react";
import dish from "../resources/dish.png"
import leaf from "../resources/leaf.png"
import styles from "../styles/Dish.module.css"
import Image from "next/image";


const Dish = ()=>
{
    return(
        <div className={`${styles.box}`}>
           <div className={`${styles.leaf} img-fluid`}>
            <Image src={leaf} alt="Leaf"/>
           </div>
           <div className={`${styles.dish} img-fluid`}> 
            <Image src={dish} alt="dish" />
            </div>
        </div>

    )
}

export default Dish;