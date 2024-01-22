import NavBar from "../../components/navBar";
import ContentPage from "../../components/contentPage";
import ContentFooter from "../../components/contentFooter";

export default function Home (){
    return(
        <div className="min-h-full">
            <NavBar/>
            <ContentPage/>
            <ContentFooter/>
        </div>
    )
}