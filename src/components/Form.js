import React, { Component } from 'react';

import { View, Text, ImageBackground, Dimensions, Image } from 'react-native';

import Button from '../commons/Button';

const { width, height } = Dimensions.get('window');

class Form extends Component {

    renderSection(text) {

        return(
            <View style={styles.section}>
                    <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ textAlign: 'center', flex: 9 }}>{text}</Text>

                        <Image
                        source={require('../img/ok.png')}>
                        </Image>

                    </View>
            </View>
        );

    }

    rendererPickerButton(text) {
        return (
            <View>   
                <View style = {styles.pickerButtonStyle}>
                
                <Image
                    source={require('../img/add.png')}>
                </Image>

                </View>
                <Text style = {styles.pickerTextStyle}>
                    {text}
                </Text>
            </View>
        )

    }

    render() {

        return(

            <ImageBackground
            source={require('../img/bg.png')}
            style={{ width, height, alignItems: 'center', justifyContent: 'center' }}
            >
            
            <Image
            source={require('../img/logo.png')}>
            </Image>

            
            {this.renderSection('Konumunuz')}
            {this.renderSection('Sevdiceğin konumu')}

            <View style = {styles.pickerMainViewStyle}>
                {this.rendererPickerButton('Senin fotoğrafın')}
                {this.rendererPickerButton('Sevdiceğinin fotoğrafı')}
            </View>
            
            <Button text = 'Yol Haritası Oluştur' />

            </ImageBackground>
        );

    }
}

const styles = {
    pickerTextStyle: {
        color: 'white',
        width: width * 0.24,
        textAlign: 'center',
        marginTop: 10
    },

    pickerMainViewStyle: {
        flexDirection: 'row',
        marginTop: 20,
        width: width * 0.59,
        justifyContent: 'space-between'
    },

    pickerButtonStyle: {
        width: width * 0.24,
        height: width * 0.24,
        borderRadius: (width * 0.24) / 2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    section: {
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        width: width * 0.59,
        height: height * 0.045,
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    }
};

export default Form;