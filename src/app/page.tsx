import Hero from "@/components/home/Hero/Hero";
import Vendors from "@/components/home/Vendors/Vendors";
import AboutNutechGroup from "@/components/home/AboutNutechGroup/AboutNutechGroup";
import OurCompanies from "@/components/home/OurCompanies/OurCompanies";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Vendors />
      <AboutNutechGroup />
      <OurCompanies />
    </>
  );
}