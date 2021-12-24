import React from 'react';
import { View, Text, Image,TouchableOpacity,ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/core';

//si se usa huri se debe hacer con dos pares {{}} ya uqe es una imagen que viene desde afuera del sistema
//si la imagen es un require quiere decir que viene de nuestro sistema y solo necesita un par de {}

const Header = ({}) => {
    const navigation = useNavigation();
    return (
          
        <View>
        <ImageBackground 
            source = {require('../../assets/bg_image_header.png')}
            style ={{
                flex:1,
                height:120,
                alignItems: 'center',
                padding: 15, 
            }}
       >
           
            
       </ImageBackground>
    </View>
 
    );
    
};

export default Header;
/*
<TouchableOpacity
             onPress={()=>{
                navigation.popToTop();
            }}>
            <View>
                <Image 
                    source = {require('../../assets/emblema_pokemon.jpg')}
                    style= {{height: 90, width: 90}}
               />
              
            </View>
            </TouchableOpacity>
*/