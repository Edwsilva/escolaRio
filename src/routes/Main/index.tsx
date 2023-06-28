import { Routes as RouterDOM, Route, Outlet, Link } from "react-router-dom";
import Home from '../../pages/Home'
import Listening from "../../pages/Listening";
import Dictionary from "../../pages/Dictionary";
import Gramar from "../../pages/Gramar";
import Pronunciation from "../../pages/Pronunciation";
import PageNotFound from "../../pages/PageNotFound";
import Sidebar from "../../components/Sidebar";
import { ContainerMain, ContentMain } from "./style"; 
import Header from "../../components/Header";

export default function Main() {

    return (
        <ContainerMain>
            <Sidebar />
            <ContentMain>
                <Header />
                <RouterDOM>
                    <Route path="/" element={<Home />} />
                    <Route path="/listening" element={<Listening />} />
                    <Route path="/dictionary" element={<Dictionary />} />
                    <Route path="/gramar" element={<Gramar />} />
                    <Route path="/pronunciatio" element={<Pronunciation />} />
                    <Route path="*" element={<PageNotFound />} />
                </RouterDOM>
            </ContentMain>
        </ContainerMain>
    )
}