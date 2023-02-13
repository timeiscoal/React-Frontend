
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query"
import { getRoom } from "../api";
import { IRoomDetail } from "../types";
import {Box, Heading, Skeleton,Grid} from "@chakra-ui/react"

export default function RoomDetail(){
    const { roomPk } = useParams()
    console.log(roomPk)
    const {isLoading, data} = useQuery<IRoomDetail>([`rooms`,roomPk], getRoom);
    console.log(data)


    return (<Box mt={10} px={{base:10, lg:10}}>
        <Skeleton isLoaded={!isLoading}>
            <Heading> {data?.name} </Heading>
        </Skeleton>
        {data?.rating}
        <Grid>
            그리드
        </Grid>
            
    </Box>)
}