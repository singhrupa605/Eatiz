import React from "react";
import scooter from "../resources/scooter.png";
import Image from "next/image";
import booking from "../resources/restaurant.png"
import styles from "../styles/Middle.module.css";
import spoon from "../resources/spoon-fork.png";
import leftarrow from "../resources/left-arrow.png";
import rightarrow from "../resources/right-arrow.png";
import line from "../resources/minus.png";



const Middle = () => {
    return (

        <div className={styles.middle}>
            <div className={styles.leftArrow}>
                <Image alt="leftArrow" src={leftarrow} />
            </div>
            <div className={styles.rightArrow}>
                <Image alt="rightArrow" src={rightarrow} />
            </div>
            <div className="container-fluid px-5">
                <div className={`${styles.main_row} row`}>
                    <div className={`${styles.subdiv1} col-md-6 col-12 `}>
                        <div className={`${styles.subdiv1_part1} row`}>
                            <div className={`${styles.part1_img}`}>
                                <Image className="img-fluid" alt="Dining" src={booking} />
                            </div>
                            <div className={`${styles.part1_txt}`}>
                                <h5>
                                    advance table <br /> booking
                                </h5>
                                <p>
                                    Lorem ipsum dolor sit  <br /> consectetur adipiscing  <br /> elit, sed do eiusmod
                                </p>
                            </div>
                        </div>


                        {/*  Bottom Div */}

                        <div className={`${styles.subdiv1_part2} row`} >

                            <div className={`${styles.part2_txt}`}>
                                <h5>
                                    food for free  <br /> 24/7
                                </h5>
                                <p>
                                    Lorem ipsum dolor sit  <br /> consectetur adipiscing  <br /> elit, sed do eiusmod
                                </p>
                            </div>

                            <div className={`${styles.part2_img}`}>
                                <Image className="img-fluid" alt="Spoon-Fork" src={spoon} />
                            </div>

                        </div>
                    </div>


                    {/* Last Div */}
                    <div className={`${styles.subdiv2} col-md-4 col-12`}>
                        <div className={styles.scooterPic}>
                            <Image alt="Scooter" className="img-fluid" src={scooter} />
                        </div>
                        <div className={styles.scooterText}>
                            <h5>
                                free home delivery <br /> at your door steps
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet <br /> consectetur adipiscing  <br /> elit, sed do eiusmod
                            </p>
                        </div>
                        <div className={styles.line}>
                            <Image src={line} alt="line" />
                        </div>
                        <hr className={styles.divider} />
                    </div>
                </div>
            </div>

        </div>








    )

}

export default Middle;