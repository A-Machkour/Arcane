import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Characters from "./components/Characters";
import Story from "./components/Story";
import Separator from "./components/Separator";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Title />
      <Separator />
      <Story />
      <Characters />
      <Footer />
    </div>
  );
}

export default App;
