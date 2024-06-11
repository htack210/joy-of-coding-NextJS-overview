"use client";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import bryson from "@/public/images/Bryson.jpeg";
import { Metadata } from "next";
// import HeavyComponent from "./components/HeavyComponent";
import { sensitiveHeaders } from "http2";
import { useState } from "react";
import dynamic from "next/dynamic";
const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  // const session = await getServerSession(authOptions);
  const [isVisible, setVisible] = useState(false);
  return (
    <main className="relative h-screen">
      {/* <h1>Hello, {session && <span>{session.user!.name}</span>}!</h1> */}

      <h1>Hello, friend!</h1>

      <button onClick={() => setVisible(true)}>Show</button>
      {isVisible && <HeavyComponent />}
      {/* <Image
        src={bryson}
        alt="Bryson"
        fill
        // style={{ objectFit: "cover" }}
        // style={{ objectFit: "contain" }}
        className="object-contain"
        sizes="(max-width: 480px) 100vw, (max-width:768px)50vw, 33vw"
        quality={75} // Can be up to 100
        // priority //Used for images that need to be view immediately.
      /> */}
      {/* <Image
        src="https://bit.ly/react-cover/"
        alt="course cover"
        // width={300}
        // height={170}
        fill
        // style={{ objectFit: "cover" }}
        style={{ objectFit: "contain" }}
      /> */}
      {/* <ProductCard /> */}
    </main>
  );
}

// export const metadata: Metadata = {
//   title: "Awesomest Next Site ever!",
//   description: "Only the best NextJS website (written by me).",
// };

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("");

//   return {
//     //Do these without quotes
//     title: "product.title",
//     description: "product.description",
//   };
// }
