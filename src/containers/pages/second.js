
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
var {Actions} = require('react-native-redux-router');

export default class Second extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native with Redux!
                </Text>
                <Text style={styles.instructions}>
                    second page!
                </Text>
                <Button title={"next page!"} onPress={Actions.third} style={styles.instructions}/>
                <Button title={"Previous page!"} onPress={Actions.first} style={styles.instructions}/>
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

