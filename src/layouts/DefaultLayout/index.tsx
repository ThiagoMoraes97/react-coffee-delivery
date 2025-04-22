import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { DefaultContainer } from "./style";

export function DefaultLayout() {
    return(
        <DefaultContainer>
            <Header />
            <Outlet />
        </DefaultContainer>
    )
}