import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CenterdSlider from "./components/CenterdSlider";
import MultipleRows from "./components/MultipleRows";
import Multislider from "./components/Multislider";

function App() {
  return (
    <div>
      <CenterdSlider />
      <MultipleRows />
      <Multislider/>
    </div>
  );
}

export default App;
