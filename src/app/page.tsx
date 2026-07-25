import Hero from "@/components/home/Hero/Hero";
import Vendors from "@/components/home/Vendors/Vendors";
import AboutNutechGroup from "@/components/home/AboutNutechGroup/AboutNutechGroup";
import OurCompanies from "@/components/home/OurCompanies/OurCompanies";
import IndustriesWeServe from "@/components/home/IndustriesWeServe/IndustriesWeServe";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Vendors />
      <AboutNutechGroup />
      <OurCompanies />
      <IndustriesWeServe />
    </>
  );
}