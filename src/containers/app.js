
import React, { Component } from 'react';
import {View,Text} from 'react-native';
const {Router, Route} = require('react-native-redux-router');
import Launch from "./pages/first";
import Second from "./pages/second";
import Third from "./pages/third";
export default class App extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <Router>
                    <Route name="first" component={Launch} initial={true} hideNavBar={true} title="Firsst"/>
                    <Route name="second" component={Second} initial={false} hideNavBar={true} title="Second"/>
                    <Route name="third" component={Third} initial={false} hideNavBar={true} title="Third"/>
                </Router>
            </View>
        );
    }
    map
}


