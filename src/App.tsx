import './App.css'
import NavBar from "./components/navBar";
import ContentPage from "./components/contentPage";
import ContentFooter from "./components/contentFooter";

function App() {

  return (
    <div className="min-h-full">
        <NavBar/>
        <ContentPage/>
        <ContentFooter/>
    </div>
  )
}

export default App
