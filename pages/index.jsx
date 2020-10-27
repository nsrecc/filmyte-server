import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { NEXT_PUBLIC_FILMYTE_CLIENT_URL } = process.env;

  return (
    <div className={styles.container}>
      <Head>
        <title>Filmyte</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Filmyte web server!</h1>
        <h2>
          <Link href="/api/graphql">Visit the GraphQL playground</Link>
        </h2>
        <h2>
          <Link href={NEXT_PUBLIC_FILMYTE_CLIENT_URL}>Visit the Filmyte web client</Link>.
        </h2>
      </main>
    </div>
  );
}
