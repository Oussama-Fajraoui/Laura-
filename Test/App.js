import React from "react";
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from "react-navigation-stack"
import Users from "./screens/Users";

const stackNavigator = createStackNavigator({
  Users: Users
})

const App = createAppContainer(stackNavigator)
export default App
