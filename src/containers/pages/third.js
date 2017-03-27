
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
const {Actions} = require('react-native-redux-router');
import {gotoFirst} from "../../actions"

export default class Third extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native with Redux!
                </Text>
                <Text style={styles.instructions}>
                    third page!
                </Text>
                <Button title={"Previous page!"} onPress={Actions.second} style={styles.instructions}/>
                <Button title={"go first page! (with 1 second delay)"} onPress={()=>gotoFirst()}
                        style={styles.instructions}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

