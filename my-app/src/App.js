import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import {Route, Routes} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Menu from "./pages/menu/Menu";
import TeamPage from "./pages/teamPage/TeamPage";
import ContactsPage from "./pages/contactsPage/contactsPage";
import ReviewsPage from "./pages/reviewsPage/ReviewsPage";
import TeamDetails from "./pages/teamPage/teamSection/TeamDetails/TeamDetails";
import NotFound from "./pages/notFound/NotFound";
import ServicePage from "./pages/servicesPage/ServicePage";

function App() {
    return (
        <div>
            <div>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/menu" element={<Menu/>}/>
                    <Route path="/team" element={<TeamPage/>}/>
                    <Route path="/team/:id" element={<TeamDetails/>}/>
                    <Route path="/contacts" element={<ContactsPage/>}/>
                    <Route path="/reviews" element={<ReviewsPage/>}/>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="/services/:serviceId" element={<ServicePage/>} />
                </Routes>
                <Footer/>
            </div>
        </div>
    );
}

export default App;