import React from "react";
import {View} from "react-native";
import { Provider } from "react-redux";
import store from "../store/configure-store";
import App from "./app";


export  default  class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                    <App/>
            </Provider>
        );
    }
}

