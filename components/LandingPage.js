import React from "react";
import styles from "../styles/Home.module.css"
import Dish from "./Dish";
import OurServices from "./OurServices"
import Middle from "./Middle"
import Footer from "./Footer";
import Location from "./Location";


const LandingPage = () => {


    return (
        <div className={styles.home}>
            <div className={`container-fluid`}>
                <div className="row d-flex  align-items-center">
                    <div className={`${styles.column1} col-md-4 col-12  w3-container w3-left w3-animate-top`}>
                        <h1 className={styles.food_heading}>Food</h1>
                        <h1 className={styles.heading} >
                            Discover Restaurant <br /> & Delicious Food
                        </h1>
                        <div className={`${styles.searchbox} d-flex align-items-center justify-content-between py-2 ps-3 pe-2`}>
                            <input type="text" className="border-0 outline-0  " placeholder="search restaurant or food" />
                            <button type="submit" className={`${styles.btn}`}> GO </button>
                        </div>
                    </div>
                    <div className={styles.location}>
                        <Location />
                    </div>
                    <div className={`${styles.right_panel}  col-sm-6  col-12`}>
                        <div className={`${styles.bar} w3-container w3-left w3-animate-right`}>
                            <div className={styles.dots}>
                            </div>
                            <div className={`${styles.bar_child}`}>
                                <Dish />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={`${styles.service}`}>
                <OurServices />
                <Middle />
                <Footer />
            </div>
        </div>

    )
}

export default LandingPage