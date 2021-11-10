//import React from "react";
//import {render, screen, fireEvent} from "@testing-library/react" ;
//import Cards from "./Cards";

const React = require("react");
const {render ,  screen, fireEvent} = require("@testing-library/react");
const Cards = require("./Cards.jsx");

describe("My Describes", () => {
    it("Should be  true", () => {
        const foo =true;
        expect(foo).toBe(false);
    })
});
