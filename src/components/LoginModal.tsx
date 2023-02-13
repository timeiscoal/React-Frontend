import {Modal ,ModalOverlay ,ModalContent ,ModalHeader, ModalCloseButton ,ModalBody ,VStack, InputGroup, InputLeftElement, Box, Input, InputRightElement ,Button} from "@chakra-ui/react"
import {FaUserNinja ,FaLock} from "react-icons/fa";
import SocialLogin from "./SocialLogin";

interface LoginModalProps{
    isOpen:boolean;
    onClose:()=>void;
}

export default function LoginModal({isOpen,onClose}: LoginModalProps){
    return(

        <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    Login
                </ModalHeader>

                <ModalCloseButton />
                    
                <ModalBody>
                    <VStack>
                        <InputGroup>
                        <InputLeftElement children={
                            <Box color="gray.400">    
                                <FaUserNinja />
                            </Box>    } />
                        <Input variant={"filled"} placeholder="유저아이디" />
                        </InputGroup>

                        <InputGroup>
                        <InputRightElement children={
                            <Box color="red.400">    
                                <FaLock />
                            </Box>    } />
                        <Input variant={"filled"} placeholder="비밀번호" />
                        </InputGroup>
                            
                        <Button colorScheme={"orange"} w="100%">Log In</Button>

                    </VStack>

                    <SocialLogin />


                </ModalBody>


            </ModalContent>
    </Modal>
    )
}