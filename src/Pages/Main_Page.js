import { Navigate } from "react-router-dom";
import { Footer } from "../layout/Footer_layout";
import { Header } from "../layout/Headers_layout";
import { Nav } from "../layout/Nav_layout";
import { getPosWeather } from "../Function/getWeather_Function";

const Main = () => {
    getPosWeather();
    return (
        <>
            <Header Title="Dong-Eui Mate"/>
            <Nav />
            Main Page
            <Footer />
        </>
    )
}

export { Main };