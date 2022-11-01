import React from "react";
import Link from "next/link";
import styles from  "../styles/Navbar.module.css"

const NavBar = ()=>
{
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light">
       <div className="container-fluid">
    <button className="navbar-toggler"style={{backgroundColor:"red"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className={`${styles.logo} navbar-brand`} href="#"> <h2>eatiz</h2>   </a>
     <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className={`${styles.menu} navbar-nav me-auto mb-2 mb-lg-0 `}>
        <li id="item" className="nav-item">
          <a className="nav-link" href="#">Menu One</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Menu Two</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Menu Three</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Menu Four</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    {/* <div classNameName="collapse" id="navbarToggleExternalContent">
  <div className="bg-dark p-4">
     <ul classNameName={styles.menu}>
         <Link href="#"><li>Menu One</li></Link>
         <Link href="#"><li>Menu Two</li></Link>
         <Link href="#"><li>Menu Three</li></Link>
         <Link href="#"><li>Menu Four</li></Link>
         </ul> 
  </div>
</div>
<nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
</nav> */}

</div>
    )
}

export default NavBar

  // <nav classNameName={styles.header}>
    //     <div classNameName={styles.logo} >
    //         <h2>eatiz</h2>
    //     </div>
    //     {/* <div classNameName={styles.navbar}> */}
   
    // </nav>