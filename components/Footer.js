import React from "react"
import styles from "../styles/Footer.module.css"
import Image from "next/image"
import lettuce from "../resources/lettuce.png"
import bottle from "../resources/bottle.png";
import googleplay from "../resources/googleplay.png";
import applestore from "../resources/applestore.png";


const Footer = () => {
    return (
        <div style={{ backgroundColor: "rgb(253, 236, 226)", marginTop: "5rem" }}>

            <div className="container-fluid p-5 mx-5" >
                <div className="row flex-md-row  flex-column align-items-center px-4">
                    <div className={`${styles.part1}  col-md-8 col-12 `}>
                        <div className={`${styles.title}`}>
                            <div className={styles.bar}></div>
                            <span className={styles.heading}>Download app for <br />  Exciting Deals</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aliquip ex ea commodo
                            commodo consequat aliquip ex ea commodo consectetur adipiscing elit.
                        </p>
                        <div className={`d-flex flex-sm-row flex-column ps-md-4 align-items-center justify-content-md-start justify-content-center`}>
                            {/* <button className={`${styles.googleplay}`}> */}
                            <Image alt="download from google play" className={`${styles.social_btn1} img-fluid`} src={googleplay} />
                            {/* </button> */}
                            {/* <button className={`${styles.applestore}`}> */}
                            <Image alt="download from apple store" className={`${styles.social_btn2} img-fluid`} src={applestore} />
                            {/* </button> */}

                        </div>
                    </div>

                    <div className={`${styles.part2}   col-md-4 col-12 mt-md-0 mt-5`}>
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