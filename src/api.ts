
import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/",
});


export const getRooms= () => instance.get("rooms/").then((response) => response.data);


export const getRoom = ({queryKey}:QueryFunctionContext) =>  {
    console.log(queryKey);
    const[, roomPk] = queryKey;
    console.log(roomPk);
    return instance.get(`rooms/${roomPk}/`).then((response)=>response.data);}