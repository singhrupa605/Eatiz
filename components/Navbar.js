import React from "react";
import styles from "../styles/Navbar.module.css"
import avatar from "../resources/Avatar.jpg"
import Image from "next/image";
import SideBar from "./SideBar";
import { AiOutlineMenu } from "react-icons/ai"


const NavBar = () => {

  const [open, setOpen] = React.useState(false);



  return (
    <div style={{ zIndex: "100" }}>
      {
        open ? <SideBar /> : null
      }
      <nav className="d-flex align-items-center justify-content-between px-5 navbar">
        <div className={styles.leftparent}>
          <div onClick={()=>setOpen(!open)} className={styles.icon}><AiOutlineMenu /></div>
          <div className={styles.logo}>
            <a href="#"> <h2>eatiz</h2></a>
          </div>
          <div className={styles.list}>
            <a className="nav-link" href="#">Menu One</a>
            <a className="nav-link" href="#">Menu Two</a>
            <a className="nav-link" href="#">Menu Three</a>
            <a className="nav-link" href="#">Menu Four</a>
          </div>
        </div>
        <div className={styles.avatar}>
          <Image alt="avatar" src={avatar} />
          <p>User</p>
        </div>
      </nav>
    </div>
  )
}

export default NavBar

