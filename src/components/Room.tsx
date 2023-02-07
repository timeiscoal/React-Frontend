import {VStack , Box , Image , Grid ,Text , Button , HStack,useColorModeValue} from "@chakra-ui/react"
import {FaRegHeart , FaStar} from "react-icons/fa"

export default function Room(){
    const gray = useColorModeValue("gray.600","gray.300")
    return(

        <VStack alignItems={"flex-start"}>
        <Box position={"relative"} overflow={"hidden"} mb="2" rounded="3xl">
            <Image minH="280" src="https://cdn.pixabay.com/photo/2023/01/21/02/40/cat-7732877__340.jpg"/>
            <Button variant={"unstyled"} position="absolute" top={0} right={0} color="white">
                <FaRegHeart size="20px" />
            </Button>
        </Box>
        <Box>
            <Grid gap={2} templateColumns={"6fr 1fr"}>
                <Text as="b" noOfLines={1} fontSize="">
                    경상북도 고양이, 경북 고양이, 경산 고양이, 첼린지
                </Text>
                <HStack spacing={1}>
                    <FaStar size={15} />
                    <Text>5.0</Text>
                </HStack>

            </Grid>
            <Text fontSize={"sm"} color={gray}>
                    Seoul, S.Korea
            </Text>

        </Box>


        <Text fontSize={"sm"} color={gray}>
            <Text as="b">$72</Text> / night
        </Text>

    </VStack>
    )
}