import Desc from "../../components/desc/desc";
import HomeSwiper from "../../components/homeSwiper/HomeSwiper";
import Models from "../../components/models/Models";

function Home() {
  return (
    <>
      <main>
        <HomeSwiper />
        <Desc />
        <Models />
      </main>
    </>
  );
}

export default Home;
