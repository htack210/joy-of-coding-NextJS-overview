import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import bryson from "@/public/images/Bryson.jpeg";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      <h1>Hello, {session && <span>{session.user!.name}</span>}!</h1>
      <Image
        src={bryson}
        alt="Bryson"
        fill
        // style={{ objectFit: "cover" }}
        // style={{ objectFit: "contain" }}
        className="object-contain"
        sizes="(max-width: 480px) 100vw, (max-width:768px)50vw, 33vw"
        quality={75} // Can be up to 100
        // priority //Used for images that need to be view immediately.
      />
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
