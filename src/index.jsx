import React from "react"
import { render } from "react-dom"
import { Application } from "./components/Application/Application";

const root = document.createElement("div");
document.body.appendChild(root)
render(<Application />, root)

