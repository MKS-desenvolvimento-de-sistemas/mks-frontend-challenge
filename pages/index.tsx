import Head from "next/head";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>MKS Sistemas | E-commerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </>
  );
}
