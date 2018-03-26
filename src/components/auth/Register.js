import React, { Component } from "react";
import { View, Text, ScrollView, Picker, TouchableOpacity } from "react-native";
import { RkChoice, RkChoiceGroup } from "react-native-ui-kitten";
import { Header, CheckBox } from "react-native-elements";
import { connect } from "react-redux";
import { 
    regEmailChanged, 
    regPasswordChanged, 
    registerUpdate, 
    regPTChecked, 
    regPTUnChecked,
    registerUser,
    saveNewUserDetails
} from '../../actions/AuthAction';
import { Card, CardSection, Input, Button, SpinnerLoader } from '../reusable';

class Register extends Component{
    

    // constructor(props){
    //     super(props);

    //     this.state = {
    //         gender: 'male' || 'female'
    //     };

    // };

    //Here I define methods to that will invoke the action creator
    //methods on each email and password field
    onEmailChanged(text) {
        this.props.regEmailChanged(text);
    }

    onPasswordChanged(text) {
        this.props.regPasswordChanged(text);
    }
    
    onRegButtonPress(){
        
        const {
            email,
            password, 
            firstName, 
            surName, 
            phone, 
            genderMF, 
            pTChecked,
            role, 
         } = this.props;
        
        
        this.props.registerUser({ email, password });

        
        
        //Register the user and save their details.
        console.log("New user's name is -> " + firstName);
        this.props.saveNewUserDetails({ email, firstName, surName, phone, genderMF: genderMF || 'male', 
        pTChecked, role });

        console.log("New user's name is -> " + firstName);
    }
    
    renderButton(){
    //     if(loading){
    //         return <SpinnerLoader 


    //         />;
    //     }else{
    //         this.props.regGenderChange(genderMF);
    //     }
    // }
    }
    



    onCheckPress() {
        const { pTChecked } = this.props;
        if(!pTChecked){
            this.props.regPTChecked(pTChecked);
        }else{
            this.props.regPTUnChecked(pTChecked);
        }
        
    }

    render() {
        return (
            <View>
                <ScrollView>
                <Header
   
                    centerComponent={{ text: 'Create A New Account', 
                    style: { color: '#fff', 
                            fontSize: 20,
                            fontWeight: 'bold'
                            } }}
                            outerContainerStyles={{ backgroundColor: 'black' }}        
                />
                
                <Card>
                    <CardSection>
                        <Input 
                            label="Firstname"
                            placeholder ="Enter Firstname"
                            value={this.props.firstName}
                            onChangeText={value => this.props.registerUpdate({ prop: 'firstName', value })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input 
                            label="Surname"
                            placeholder ="Enter Surname"
                            value={this.props.surName}
                            onChangeText={value => this.props.registerUpdate({ prop: 'surName', value })}
                        />
                    </CardSection>
                    
                    <CardSection>
                        <Text style={styles.textStyle}>What is your gender?</Text>
                    </CardSection>

                    <CardSection>
                    <Picker
                        style={{ flex: 1, margin: 10 }}
                        selectedValue={this.props.genderMF}
                        onValueChange={value => this.props.registerUpdate({ prop: 'genderMF', value })}
                    >
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                    </Picker>    
                    </CardSection>
                    
                    <CardSection>
                        <Input 
                            label="Enter Phone Number"
                            placeholder="(+44) 7..."
                            value={this.props.phone}
                            onChangeText={value => this.props.registerUpdate({ prop: 'phone', value })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input 
                            label="Email Address"
                            placeholder ="email@mail.com"
                            value={this.props.email}
                            onChangeText={this.onEmailChanged.bind(this)}
                        />
                    </CardSection>

                    <CardSection>
                        <Input 
                            label="Enter Password"
                            placeholder = "password"
                            secureTextEntry
                            value={this.props.password}
                            onChangeText={this.onPasswordChanged.bind(this)}
                        />
                    </CardSection>

                    <CardSection> 
                        <Text style={styles.textStyle}>If you are a Personal Trainer, please tick the box.</Text>
                    </CardSection>     
                    <CardSection>
                        <CheckBox 
                            title="Personal Trainer"
                            checked={this.props.pTChecked}
                            onIconPress={() => this.onCheckPress()}
                        /> 

                    </CardSection>

                    <CardSection>
                        <Button onPress={this.onRegButtonPress.bind(this)}> Register </Button>
                    </CardSection>
                </Card>
                
                </ScrollView>
            </View>    
        );
    }
}

//Stylesheet object 
const styles = {
    textStyle: {
        fontSize: 15
    }
};

//This function maps the state in the combined reducer to the component.
const mapSateToProps = ({ reg }) => {
    const {
        firstName,
        surName, 
        email, 
        password,
        genderMF,
        phone, 
        loading, 
        error,
        role, 
        pTChecked 
    } = reg;
    
    return {
        firstName,
        surName, 
        email, 
        password,
        genderMF, 
        phone,
        loading,
        error,
        role,  
        pTChecked
    };
    
};

export default connect(mapSateToProps, { 
    regEmailChanged, 
    regPasswordChanged, 
    registerUpdate, 
    regPTChecked, 
    regPTUnChecked,
    registerUser,
    saveNewUserDetails 
})(Register);