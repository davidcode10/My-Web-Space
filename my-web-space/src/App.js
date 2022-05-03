import Header from "./components/Header/Header"
import Image from "./components/Image/image";
import Icons from "./components/Icons/icons";
import Footer from "./components/Footer/footer";
import './App.css'

function App() {
  return (
    <body>
      <div>
        <Header />
      </div>
      <div>
        <Image />
      </div>
      <div>
        <Icons />
      </div>
      <div>
        <Footer />
      </div>
    </body>
  )
}

export default App;
