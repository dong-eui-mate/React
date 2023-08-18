import { Widget } from "../Components/Widget_Component";
import { Footer } from "../layout/Footer_layout";
import { Header } from "../layout/Headers_layout";
import { Nav } from "../layout/Nav_layout";

const Main = () => {
  getPosWeather();
    
  return (
    <>
      <Header Title="Main Page" />
      <Nav />
      <Widget />
      <Footer />
    </>
  );
};

export { Main };
