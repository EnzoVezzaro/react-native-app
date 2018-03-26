/*
This functional component will be responsible for handling the navigation 
in my app.
*/
import React from "react";
import { Router, Scene, Actions } from "react-native-router-flux";
import firebase from 'firebase';
//Components 
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import forgotPass from './components/auth/forgotPass';
import passReset from './components/auth/passReset';
import Home from "./components/main/Home";
import Profile from "./components/main/Profile";
import CreateWorkoutPlanner from "./components/main/CreateWorkoutPlanner";

const RouterNav = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth" hideNavBar>
                    <Scene key="login" component={Login} initial />
                    <Scene key="register" component={Register}  />
                    <Scene key="forgotPass" component={forgotPass} />
                    <Scene key="passReset" component={passReset} />
                </Scene>

                <Scene key="main">
                    <Scene 
                    onRight={() => Actions.profile()}
                    rightTitle=" View Profile"
                    key="home" component={Home} title="Home" 
                    
                    />
                    <Scene 
                    onRight={() => Actions.createWorkout()}
                    rightTitle=" Create Workout"
                    key="profile" component={Profile} title="My Profile" />
                    
                    <Scene key="createWorkout" component={CreateWorkoutPlanner} title="Create Your Workout" />
                </Scene>
            </Scene>
        </Router>
    );
}

export default RouterNav;