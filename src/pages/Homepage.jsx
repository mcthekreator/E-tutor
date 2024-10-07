import FirstNav from "../components/FirstNav";
import Header from "../components/Header";
import TopNav from "../components/TopNav";

export default function Homepage() {
    return (
        <div className="h-screen">
            <TopNav/>
            <FirstNav/>
            <Header/>
            
        </div>
    )
}
