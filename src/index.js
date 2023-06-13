import React from "react";
import {createRoot} from "react-dom/client"; 
import  App  from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";

const el = document.getElementById('root');
const Root = createRoot(el);
Root.render(<Provider store={store}><App /></Provider>);