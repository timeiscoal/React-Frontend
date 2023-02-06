import {Box , HStack,Button} from "@chakra-ui/react";
import {Outlet} from "react-router-dom";
import {FaAirbnb} from "react-icons/fa";

export default function Roots(){
    return (
    <Box> 
        <HStack justifyContent={"space-between"} py={"5"} px={"10"} borderBottomWidth={1}>    
            <Box color="teal.500">    
                <FaAirbnb size={"38"} />
            </Box>
            <HStack spacing={"2.5px"}>
                <Button colorScheme={"teal"}>Log in</Button>
                <Button colorScheme={"orange"}>Sign Up</Button>
            </HStack>

            
        </HStack>
        <Outlet />

    </Box>
    );
}