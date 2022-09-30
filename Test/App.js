import React from "react";
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from "react-navigation-stack"
import Users from "./screens/Users";
import oneUser from "./screens/oneUser";

const stackNavigator = createStackNavigator({
  Users: {
    screen:Users
  },
  oneUser: {
    screen: oneUser
  } 
})

const App = createAppContainer(stackNavigator)
export default App
