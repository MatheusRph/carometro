// pages/index.js
import Createpaste from "@/components/createpaste";
import MyNavbar from "@/components/nav-bar";
import Yourpastes from "@/components/yourpaste";
import "bootstrap/dist/css/bootstrap.css";
import Image from 'next/image';


export default function Carometro() {
    return (
        <>
            <MyNavbar></MyNavbar>
            <Createpaste></Createpaste>
            <Yourpastes></Yourpastes>
        </>
    )
}
