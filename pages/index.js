import Head from 'next/head'
import LandingPage from "../components/LandingPage"
import Script from 'next/script'
import styles  from "../styles/Home.module.css"


export default function Home() {
  return (
    <div  >
      <Head>
        <title>Eatiz</title>
        <meta name="description" content="Best food ordering and restaurant discovering website" />
        <meta name="keywords" content="eatiz , food apps, food, best food ordering website "></meta>
        <link rel="icon" href="/favicon.ico" />
     </Head>
     {/* <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous" /> */}

      <main  className={`${styles.main} container-fluid`}> 
        <LandingPage />
      </main>

    </div>
  )
}
