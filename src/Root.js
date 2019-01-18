import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';

import Form from './components/Form';

class Root extends Component { 

    // eslint-disable-next-line padded-blocks
    render() {

        return (
            <Router>

                <Scene
                    key='Root'
                >
                    <Scene
                    key='Form' 
                    component={Form}
                    hideNavBar
                    initial 
                    />

                </Scene>

            </Router>
        );
    }
 }

 export default Root;
