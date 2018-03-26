import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/AuthAction';
import { Card, CardSection, Button } from '../reusable'

class Profile extends Component{
        
    onButtonPress() {
        this.props.logoutUser();
    }

    render(){
        return(
            <View>

                <Card> 
                    
                    <CardSection>
                        <Text>Welcome User!</Text>
                    </CardSection>

                    <CardSection>
                        <Avatar 
                            xlarge
                            rounded
                            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />
                    </CardSection>

                    <CardSection>
                        <Text>Settings</Text>
                    </CardSection>
                    <CardSection>
                        <Text>Profile Page!</Text>
                    </CardSection>
                    <CardSection>
                        <Button
                        onPress={this.onButtonPress.bind(this)}
                        >Log Out</Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

export default connect(null, {logoutUser})(Profile);