import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Filmyte</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Filmyte web server!</h1>
        {process.env.NEXT_PUBLIC_GRAPHQL_PLAYGROUND_ENV !== 'production' && (
          <h2>
            Visit the <Link href="/api/graphql">Filmyte web server GraphQL playground</Link>.
          </h2>
        )}
        <h2>
          Visit the{' '}
          <Link href={process.env.NEXT_PUBLIC_FILMYTE_CLIENT_URL}>Filmyte web client</Link>.
        </h2>
      </main>
    </div>
  );
}
