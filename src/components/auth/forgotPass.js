import React, { Component } from "react";
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from "react-native-elements";
import { Card, CardSection, Input, Button } from '../reusable';
import { Actions } from 'react-native-router-flux';

class forgotPass extends Component{

    //This method will render view for the email input
    // renderEmailInput() {
    //     if(this.props.email) {
    //         return (

    //         );
    //     }
    // }

    renderNewPassInput() {
        if(this.props.password) {
            return (
                <Input 
                    label="Confirm Password"
                    placeholder="password"
                    secureTextEntry
                />
            );
        }
    }

    render() {

        return (
            <View>
                <Header
   
                    centerComponent={{ text: 'Reset Password', 
                    style: { color: '#fff', 
                            fontSize: 20,
                            fontWeight: 'bold'
                     } }}
                     outerContainerStyles={{ backgroundColor: 'black' }}
                        />

                <Card>
                    <CardSection>
                    <Input 
                        label="Email"
                        placeholder="Enter Email Address."                
                    />
                    </CardSection>
                    
                    <CardSection>
                        <Button onPress={() => Actions.passReset()}>Reset Password</Button>
                    </CardSection>
                </Card>
            </View>
        );
    }   
}

export default forgotPass;