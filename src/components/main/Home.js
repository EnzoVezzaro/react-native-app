import React, { Component } from 'react';
import { Text, View, ImageBackground, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from "../reusable";


class Home extends Component{
    render(){
        
        const { containerStyle, content } = homeStyle;
        return(
            <ImageBackground
                source={{uri: "https://cdn.pixabay.com/photo/2015/02/23/20/00/bodybuilder-646482_960_720.jpg"}}
                style={homeStyle.backgroundImg}
            >
                <ScrollView>
                    <View>
                        <Card>
                            <CardSection>
                                <Text>View Workouts </Text>
                            </CardSection>
                            <CardSection>
                                <Text>View Workouts </Text>
                            </CardSection>
                        </Card> 
                    
                        
                    </View>
                </ScrollView>      
            </ImageBackground>
        );
    }
}

const homeStyle = {
    backgroundImg: {    
        height: '100%',
        width: '100%',
        alignSelf: 'stretch'           
    },
    containerStyle: {
        flex: 1
    },
    content: {
        alignItems: 'center'     
    }
}

export default connect(null, {})(Home);