import CardsModels from "../../components/cardsModels/CardsModels";
import Desc from "../../components/desc/Desc";
import HomeSwiper from "../../components/homeSwiper/HomeSwiper";
import Models from "../../components/models/Models";

function Home() {
  return (
    <>
      <main>
        <HomeSwiper />
        <Desc />
        <Models />
        <CardsModels />
      </main>
    </>
  );
}

export default Home;
