import React from "react";
import dish from "../resources/dish.png"
import leaf from "../resources/leaf.png"
import styles from "../styles/Dish.module.css"
import Image from "next/image";


const Dish = () => {
    return (
        <div className={`${styles.right_banner}`}>
            <div className={`${styles.dish}`}>
                <div className={`${styles.leaf_img}`}>
                    <Image alt="leaf" className="img-fluid" src={leaf} />
                </div>
                <Image alt="Dish" className="img-fluid" src={dish} />
            </div>
        </div>

    )
}

export default Dish;