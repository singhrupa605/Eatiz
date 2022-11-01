import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import NavBar from '../components/Navbar'



function MyApp({ Component, pageProps }) {
  return  <>
     <NavBar /> 
     <Component {...pageProps} />
    </>
}

export default MyApp
