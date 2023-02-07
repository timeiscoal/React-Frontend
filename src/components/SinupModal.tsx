import {Modal ,ModalOverlay ,ModalContent ,ModalHeader, ModalCloseButton ,ModalBody ,VStack, InputGroup, InputLeftElement, Box, Input, InputRightElement ,Button} from "@chakra-ui/react"
import {FaUserNinja ,FaLock ,FaEnvelope , FaUser} from "react-icons/fa";
import SocialLogin from "./SocialLogin";

interface SignUpModalProps{
    isOpen:boolean;
    onClose:()=>void;
}

export default function SinUpModal({isOpen,onClose}: SignUpModalProps){
    return(

        <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>
                Sin Up
            </ModalHeader>

            <ModalCloseButton />
                
            <ModalBody>
                <VStack>
                    <InputGroup>
                    <InputLeftElement children={
                        <Box color="gray.400">    
                            <FaEnvelope />
                        </Box>    } />
                    <Input variant={"filled"} placeholder="이메일" />
                    </InputGroup>

                    <InputGroup>
                    <InputLeftElement children={
                        <Box color="gray.400">    
                            <FaUser />
                        </Box>    } />
                    <Input variant={"filled"} placeholder="사용자 이름" />
                    </InputGroup>

                    <InputGroup>
                    <InputLeftElement children={
                        <Box color="gray.400">    
                            <FaUserNinja />
                        </Box>    } />
                    <Input variant={"filled"} placeholder="사용자 아이디" />
                    </InputGroup>

                    <InputGroup>
                    <InputLeftElement children={
                        <Box color="gray.400">    
                            <FaLock />
                        </Box>    } />
                    <Input variant={"filled"} placeholder="비밀번호" />
                    </InputGroup>
                        
                    <Button colorScheme={"orange"} w="100%">회원가입</Button>

                </VStack>

                <SocialLogin />


            </ModalBody>


        </ModalContent>
    </Modal>
    )
}