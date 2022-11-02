import React from "react";
import Image from "next/image";
import styles from "../styles/OurServices.module.css";

const OurServices = () => {
    return (
        <div className={styles.panel}>
            <div className={styles.left}>
                <div className={styles.bar}></div>
                <span className={styles.text}>Our <br /> Services</span>
            </div>
            <hr className={styles.rule}></hr>
            <div className={styles.right}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aliquip ex ea commodo
                    commodo consequat aliquip ex ea commodo consectetur adipiscing elit.
                </p>
            </div>
        </div>
    )

}

export default OurServices;