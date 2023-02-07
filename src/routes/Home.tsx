import {Grid, Skeleton ,Box ,SkeletonText} from "@chakra-ui/react"
import { useEffect,useState } from "react"
import Room from "../components/Room"

interface IRoom {
    name:string;
    city:string;
    rating:number;
    price:number;
}

export default function Home(){
    const [isLoading, setIsLoading] = useState(true);
    const [rooms, setRooms] = useState<IRoom[]>([]);
    const fectRoom = async() =>{
        const response = await fetch("http://127.0.0.1:8000/rooms/");
        const json = await response.json();
        setRooms(json)
        setIsLoading(false)

    }

    useEffect(() =>{fectRoom()},[])
    return (

        <Grid my={10} px={{base:10,lg:40,}} columnGap={4} rowGap={8}  templateColumns={{
            sm:"1fr",
            md:"1fr 1fr",
            lg:"repeat(3, 1fr)",
            xl:"repeat(4, 1fr)",
            "2xl":"repeat(5, 1fr),"
        }}>
            


            {isLoading ?             
            <Box>
                <Skeleton rounded="2xl" height={280} mb={6}  />
                <SkeletonText w="50%" noOfLines={3} />
            </Box> : null}
            {rooms.map(room =><Room name={room.name} city={room.city} rating={room.rating} price={room.price} />)}

        </Grid>
    )


}