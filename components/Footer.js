import React from "react"
import styles from "../styles/Footer.module.css"
import Image from "next/image"
import lettuce from "../resources/lettuce.png"
import bottle from "../resources/bottle.png";
import googleplay from "../resources/googleplay.png";
import applestore from "../resources/applestore.png";


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className="container-fluid ">
                <div className="row d-flex justify-content-between ">
                    {/*Part - 1  */}
                    <div className={`${styles.part1} col-sm-6 col-12 ms-md-3`}>
                        <div className={styles.title}>
                            <div className={styles.bar}></div>
                            <span className={styles.heading}> Download app for <br />  Exciting Deals</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aliquip ex ea commodo
                            commodo consequat aliquip ex ea commodo consectetur adipiscing elit.
                        </p>
                        <div className={`${styles.buttons} row`}>
                            <Image alt="download from google play" className={`${styles.social_btn1} img-fluid col-sm-4 col-8 p-2`}  src={googleplay} />
                            <Image alt="download from apple store"  className={`${styles.social_btn2} img-fluid col-sm-4 col-8 p-2`} src={applestore} />
                        </div>
                    </div>


                    {/* Part - 2 */}

                    <div className={`${styles.part2}  col-sm-4 col-12 py-md-0 py-4`}>
                         <div className={`${styles.footerRight}`}>
                            <div className={`${styles.lettuce}`}>
                                <div className={`${styles.lettuce_bg_img}`}></div>
                                <div className={`${styles.lettuce_img}`}>
                                    <Image alt="lettuce" className="img-fluid" src={lettuce} />
                                </div>
                            </div>

                            <div className={`${styles.bottle}`}>
                                <Image alt="bottle" className="img-fluid" src={bottle} />
                            </div>
                        </div>
                     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;