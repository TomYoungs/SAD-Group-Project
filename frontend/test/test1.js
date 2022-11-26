//import { expect } from "chai";
import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
//import { expect } from "chai";

const validator = require("validator");

import Navbar from "./components/Navbar"

let rootContainer;

beforeEach(()=>{
    rootContainer = document.createElement("div");
    document.body.appendChild(rootContainer);
});

afterEach(()=>{
    document.body.removeChild(rootContainer);
    rootContainer = null;
});


describe('User Interactions', ()=>{
    it('bs test', ()=>{
        act(() =>{
            ReactDOM.render(<Navbar />, rootContainer);
        });
        const h1 = rootContainer.querySelector("h1");
        expect(h1.textContent).to.equal("Class Scheduler📝");
    });
});
