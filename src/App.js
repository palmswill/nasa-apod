import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import Calender from "./components/Calender";
import "./App.css";
import {store} from './redux';
import {Provider} from 'react-redux';
import FavoritePhoto from "./components/FavoritePhoto";

export default function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <div className="app">
          <Route component={Home} path="/" exact />
          <Route component={NasaPhoto} path="/nasaphoto" />
          <Route component={Calender} path="/nasaphoto" />
          <Route component={FavoritePhoto} path="/nasaphoto" />
      </div>
      </Provider>
    </BrowserRouter>
  );
}
