
import './App.css'
import Navbar from '../src/Components/Navbar';
import Home from '../src/Components/Home';
import Explore from './Components/Explore';
import CreatePage from './Components/CreatePage';
import SharePage from './Components/SharePage';
import FooterSection from './Components/FooterSection';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* Make sure to import Navbar at the top */}
    <Navbar />
      <Home />
      <Explore />
      <CreatePage />
      <SharePage />
      <FooterSection />
    </>
  )
}

export default App
