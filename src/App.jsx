import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CenterdSlider from "./components/CenterdSlider";
import MultipleRows from "./components/MultipleRows";
import Multislider from "./components/Multislider";
import Life from "./components/life/Life";

function App() {
  return (
    <div>
      <Life/>
      <CenterdSlider />
      <MultipleRows />
      <Multislider/>
    </div>
  );
}

export default App;
