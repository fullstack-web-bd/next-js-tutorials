import BuyNowButton from "@/components/button/BuyNowButton";
import Head from "next/head";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Head>
        <title>DevsEnv Next JS Tutorials | Homepage</title>
      </Head>
      
      <h2>Home page</h2>
      <hr />
      <Image src="/images/chatbot.png" width={100} height={100} alt="Chatbot" />
      <hr />
      <BuyNowButton />
      <hr />
    </>
  )
}
