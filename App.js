
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';
import Header from './src/components/Header';
import Home from './src/screens/Home';
import database from './src/database'
import InitialScreen from './src/screens/InitialScreen'
import PokemonDetail from './src/screens/PokemonDetail'
import Context from './src/Context'
import Poketeam from './src/screens/Poketeam'


//conexion a base de datos

//

//instalar navigation stack para poder hacer los botones de avanzar y retroceder npm install @react-navigation/native-stack y crear una constante  ej const MainStack = createNativeStackNavigator(); 
/*comando rnfe hace una estrucutra instantanea de una constante */

const MainStack = createNativeStackNavigator(); 
const App = () => {
    return (
     <Context>
        <NavigationContainer>
            <MainStack.Navigator initialRouteName = "InitialScreen"
            screenOptions={{
                headerShown: false,
            }} >
                
                <MainStack.Screen name="InitialScreen" component={InitialScreen}/>
                <MainStack.Screen name="Home" component={Home}/>
                <MainStack.Screen name="PokemonDetail" component={PokemonDetail}/>
                <MainStack.Screen name="Poketeam" component={Poketeam}/>
               
                
            </MainStack.Navigator>
        </NavigationContainer>
    </Context>
    );
};

export default App;
/*
<SafeAreaView>
<Home />
</SafeAreaView>
*/