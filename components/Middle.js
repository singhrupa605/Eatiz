import React from "react";
import scooter from "../resources/scooter.png";
import Image from "next/image";
import booking from "../resources/restaurant.png"
import styles from "../styles/Middle.module.css";
import spoon from "../resources/spoon-fork.png";


const Middle = () => {
    return (
        <div className={styles.dot}>
            {/* <Image alt = "scooter" src={scooter} /> */}
            <div className={styles.dining}>
                <div className={styles.pic}>
                   <Image alt = "Dining" src={booking} />
                </div>
                <div className={styles.heading}>
                <h5>
                    food for free  <br/> 24/7
                </h5>
                <p>
                Lorem ipsum dolor sit amet <br/> consectetur adipiscing  <br/> elit, sed do eiusmod 
                </p>
                </div>
            </div>
            <div className={styles.dining}>
               <div  className={styles.plateText}>
               <div className={styles.heading}>
                <h5>
                    advance table <br/> booking
                </h5>
                <p>
                Lorem ipsum dolor sit amet <br/> consectetur adipiscing  <br/> elit, sed do eiusmod 
                </p>
                </div>
               </div>
               <div className={styles.pic}>
               <Image alt = "Spoon-Fork" src={spoon} />
               </div>
            </div>
            <div className={styles.scooter}>
              <div className={styles.scooterPic}>
              <Image alt = "Scooter" src={scooter} />
              </div>
              <div className={styles.heading}>
                <h5>
                    free home delivery <br/> at your door steps
                </h5>
                <p>
                Lorem ipsum dolor sit amet <br/> consectetur adipiscing  <br/> elit, sed do eiusmod 
                </p>
              </div>
            </div>
        </div>
    )

}

export default Middle;