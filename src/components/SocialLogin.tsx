import {Box ,HStack ,Divider ,VStack ,Button,Text} from "@chakra-ui/react"
import {FaGithub ,FaComment} from "react-icons/fa";

export default function SocialLogin(){
    
    return(
        <Box mb={"4"}>
        <HStack my={8}>
            <Divider />
            <Text textTransform={"uppercase"} color={"gray.500"} fontSize={"xs"} as="b">Or</Text>
            <Divider />
        </HStack>
        <VStack>
            <Button width={"100%"} leftIcon={<FaGithub />}colorScheme={"telegram"}>
                Continue With GitHub
            </Button>
            <Button width={"100%"} leftIcon={<FaComment />} colorScheme={"yellow"}>
                Continue With Kakao
            </Button>
        </VStack>
    </Box>
    )
}