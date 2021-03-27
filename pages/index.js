import Head from "next/head";
import styles from "../styles/Home.module.css";
import Counter from "../components/Counter";

export default function Home() {
  return (
    <div className={`${styles.container} bg-dark`}>
      <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous"/>
        <title>+1 App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Counter />
    </div>
  );
}
