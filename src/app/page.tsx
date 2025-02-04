import Navbar from "@/components/navbar/nav"
import Homepage from "./home/page";

export default function Home() {
  return (
   
    <main className=" min-h-screen border-[0.5rem] border-white  bg-inherit rounded">
       <Navbar/>
        <Homepage></Homepage>
    </main>
  );
}
