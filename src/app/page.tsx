import Navbar from "@/components/navbar/nav"
import Homepage from "./home/page";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
   
    <main className=" min-h-screen border-[0.5rem] border-white  bg-inherit rounded">
       <Navbar/>
        <Homepage></Homepage>
    </main>
  );
}
