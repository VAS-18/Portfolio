import Navbar from "@/components/navbar/nav"
import Homepage from "./home/page";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className=" p-5">
      <Navbar />
      <Homepage />
    </main>
  );
}
