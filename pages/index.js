import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout.js';

export default function Home() {
  return (
    <Layout>
        <h1 className={styles.title}>
          Üdvözöllek a <a href="https://kek-vonal.hu/" target="_blank" rel="noreferrer">Kék Vonal</a>  <br></br> beosztás készítő rendszerében
        </h1>

        <div className={styles.grid}>
          <a href="/register" className={styles.card}>
            <h3>Először vagyok it &rarr;</h3>
            <p>Adj meg néhány adatot:)</p>
          </a>

          <a href="/schedules" className={styles.card}>
            <h3>Tovább a beosztásokhoz &rarr;</h3>
          </a>
        </div>
    </Layout>
  );
}