"use client";
import DrawerAppBar from "./components/Navigation/NavBar";
import Head from 'next/head';

export default function Home() {
  return (
    <main>
      <Head>
        <title>2vur2 | Ana sehife</title>
      </Head>
      <DrawerAppBar />
    </main>
  );
}
