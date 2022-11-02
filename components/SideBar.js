import React from "react"
import styles from "../styles/Navbar.module.css"

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_list}>
        <a className="nav-link" href="#">Menu One</a>
        <a className="nav-link" href="#">Menu Two</a>
        <a className="nav-link" href="#">Menu Three</a>
        <a className="nav-link" href="#">Menu Four</a>
      </div>
    </div>
  )
}
export default SideBar 