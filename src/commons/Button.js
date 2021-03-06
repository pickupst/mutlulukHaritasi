import React, { Component } from 'react';

import { View, Text, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

class Button extends Component {

    render() {

        return(

            <View style = {styles.buttonStyle}>

            <Text style = {{color: 'white'}}> {this.props.text} </Text>

            </View>
        );

    }
}

const styles = {
    buttonStyle: {
        width: width * 0.70,
        height: height * 0.07,
        backgroundColor: '#53008C',
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
};

export default Button;