import {VStack , Box , Image , Grid ,Text , Button , HStack,useColorModeValue} from "@chakra-ui/react"
import {FaRegHeart , FaStar} from "react-icons/fa"
import { Link } from "react-router-dom";
import {IRoomList} from "../types"

export default function Room({pk,name,city,rating,price}:IRoomList){
    const gray = useColorModeValue("gray.600","gray.300")
    return(

    <Link to={`/rooms/${pk}/`}>
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
                        {name}
                    </Text>
                    <HStack _hover={{
                        color:"red.400",
                    }} spacing={1} alignItems={"center"}>
                        <FaStar size={15} />
                        <Text>{rating}</Text>
                    </HStack>
                </Grid>
                <Text fontSize={"sm"} color={gray}>
                        {city}
                </Text>
            </Box>
            <Text fontSize={"sm"} color={gray}>
                <Text as="b">${price}</Text> / night
            </Text>
        </VStack>
    </Link>
    )
}