import React from "react";
import SupportCard from "../components/SupportCard/SupportCard";
import SuppportTabs from "../components/SupportTabs/SuppportTabs";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function SupportPage() {
  return (
    <>
      <Header />
      <SupportCard />
      <SuppportTabs />
      <Footer />
    </>
  );
}

export default SupportPage;
