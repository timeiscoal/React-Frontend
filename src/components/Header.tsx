import {HStack,Box,IconButton,Button,useDisclosure,useColorMode,LightMode, useColorModeValue,Stack} from "@chakra-ui/react"
import {FaAirbnb, FaMoon, FaSun} from "react-icons/fa"
import LoginModal from "./LoginModal";
import SinUpModal from "./SinupModal";


export default function Header() {
    const {isOpen:isLoginOpen,onClose:onLoginClose,onOpen:onLoginOpen} = useDisclosure();
    const {isOpen:isSignUpOpen,onClose:onSignUpClose,onOpen:onSignUpOpen} = useDisclosure();
    const {colorMode, toggleColorMode} = useColorMode();
    const logoColor = useColorModeValue("red.500","red.200");
    const Icon = useColorModeValue(FaMoon,FaSun);
    return(

        <Stack alignItems="center" justifyContent={"space-between"} py={"5"} px={"10"} borderBottomWidth={1} direction={{
            sm:"column",
            md:"row",
            
        }}
        spacing={{
            sm:3,
            md:4,
        }}
        >    
            <Box color={colorMode ==="dark" ? "red.200 ": "red.500"}>    
                <FaAirbnb size={"38"} />
            </Box>
            <HStack spacing={"2.5px"}>
                <IconButton onClick={toggleColorMode} variant={"ghost"} aria-label="Toggle dark mode" icon={<Icon />} />
                <Button colorScheme={"teal"}  onClick={onLoginOpen}>Log in</Button>
                <LightMode>
                    <Button colorScheme={"orange"} onClick={onSignUpOpen}>Sign Up</Button>
                </LightMode>
            </HStack>
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose}/>
            <SinUpModal isOpen={isSignUpOpen} onClose={onSignUpClose}/>


            
        </Stack>

    )
}