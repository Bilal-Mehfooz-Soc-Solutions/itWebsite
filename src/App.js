import "./App.css";
import Header from "./Component/Header";
import Inventing from "./Screen/Home/Inventing";
import WebsiteFeatures from "./Screen/Home/WebsiteFeatures";
import WebsitePrice from "./Screen/Home/WebsitePrice";
import Project from "./Screen/Home/Project";
import Industries from "./Screen/Home/Industries";
function App() {
  return (
    <div className="App">
      <Header />
      <Inventing />
      <WebsiteFeatures />
      <WebsitePrice />
      <Project />
      <Industries />
    </div>
  );
}

export default App;
