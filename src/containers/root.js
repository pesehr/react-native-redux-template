import React from "react";
import {View} from "react-native";
import { Provider } from "react-redux";
import configureStore from "../store/configure-store";
import App from "./app";

const store = configureStore();

export  default  class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                    <App></App>
            </Provider>
        );
    }
}

