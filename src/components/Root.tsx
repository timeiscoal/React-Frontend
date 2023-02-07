import {Box  ,useDisclosure } from "@chakra-ui/react";
import { Outlet} from "react-router-dom";
import Header from "./Header";

export default function Roots(){
    return (
    <Box> 
        <Header />
        <Outlet />

    </Box>
    );
}