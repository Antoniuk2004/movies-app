import Navigation from "@/components/header/navigation/Navigation";
import Image from 'next/image';
import {Component} from "react";

const Header = () => {
    return (
        <div className="header flex w-full">
            <div className="logo basis-1/3 flex items-center">
                <Image src={""} alt={"Icon"} width={30} height={30}/>
                <h1>Movie Watcher</h1>
            </div>
            <Navigation/>
            <div>

            </div>
        </div>
    )
}

export default Header