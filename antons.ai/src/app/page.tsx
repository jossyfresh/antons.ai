import CTA from "@/components/Landing/CTA";
import Footer from "@/components/Landing/Footer";
// import Header from "@/components/Landing/Header";
import Hero from "@/components/Landing/Hero";
// import TopHeader from "@/components/Landing/TopHeader";



export default function Home() {
  return (
    <div>
      {/* <div className="bg-[#EFEFEF]">
      <TopHeader/>
      </div>
      <Header/> */}
      <Hero/>   
      <CTA/> 
      <Footer/>
    </div>
  );
}

