import Head from "next/head";
import Image from "next/image";
import Main from "./Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Quote Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </div>
  );
}
