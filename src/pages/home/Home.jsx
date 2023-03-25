import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Hero from "../../components/hero/Hero";
import NewArraival from "../../components/new_arraivals_section/NewArraival";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <div className="App">
      <div className="bg-[#EEE]">
        <NavBar />
        <div className="relative">
          <Hero />
          <div className="max-w-[1600px] lg:w-[85%] mx-auto lg:-mt-16">
            <NewArraival />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
