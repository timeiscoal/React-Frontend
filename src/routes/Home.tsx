import {Grid, Skeleton ,Box ,SkeletonText} from "@chakra-ui/react"
import { useEffect,useState } from "react"
import Room from "../components/Room"
import{useQuery} from "@tanstack/react-query"
import { getRooms } from "../api";

interface IRoom {
    name:string;
    city:string;
    rating:number;
    price:number;
    pk:number;
}

export default function Home(){
    const {isLoading, data} = useQuery<IRoom[]>(["rooms"], getRooms);
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
            {data?.map(room =><Room name={room.name} city={room.city} rating={room.rating} price={room.price} pk={room.pk}/>)}

        </Grid>
    )


}