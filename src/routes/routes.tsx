import { Routes as RouterDOM, Route, Outlet, Link } from "react-router-dom";
import Home from '../pages/Home'
import Listening from "../pages/Listening";
import Dictionary from "../pages/Dictionary";
import Gramar from "../pages/Gramar";
import Pronunciation from "../pages/Pronunciation";
import PageNotFound from "../pages/PageNotFound";

export default function Routes() {

    return (
        <RouterDOM>
            <Route path="/" element={<Home />} />
            <Route path="/listening" element={<Listening />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/gramar" element={<Gramar />} />
            <Route path="/pronunciatio" element={<Pronunciation />} />
            <Route path="*" element={<PageNotFound />} />
        </RouterDOM>
    )
}