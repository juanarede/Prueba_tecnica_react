
import JobOpporunities from "../components/homeComponent/cardOpportunities/JobOpporunities";
import Cards from "../components/homeComponent/cards/Cards";
import Form from "../components/homeComponent/form/Form";
import Header from "../components/homeComponent/header/Header";
import Impact from "../components/homeComponent/impact/impact";
import CarrouselLogos from "../components/homeComponent/slide/CarouselLogos";
import OurFinanciersSlide from "../components/homeComponent/slide/OurFinanciersSlide";

export default function Home() {
  return (
    <main>
      <Header/>
      <Cards/>
      <CarrouselLogos/>
      <OurFinanciersSlide/>
      <Impact/>
      <JobOpporunities/>
      <Form/>
    </main>
  )
}
