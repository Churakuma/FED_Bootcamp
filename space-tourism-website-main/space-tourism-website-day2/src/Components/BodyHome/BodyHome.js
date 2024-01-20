import React from "react";
import Header from "../Header/Header";
import "./BodyHome.scss"
import LargeButton from "../LargeButton/LargeButton";
import TextHome from "../TextHome/TextHome";

const BodyHome = () => {
    return (
        <div className="bg-dark home">
            <>
                <Header></Header>
                <TextHome></TextHome>
                <LargeButton></LargeButton>
            </>
        </div>
    )
}

export default BodyHome;