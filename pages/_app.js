import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import NavBar from '../components/Navbar'
import Head from 'next/head'
import Script from 'next/script'



function MyApp({ Component, pageProps }) {
  return  <>
   <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
   </Head>
   <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous" />
     <NavBar /> 
     <Component {...pageProps} />
    </>
}

export default MyApp
