import React, {useState, useContext} from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity,ImageBackground} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {PokeTeamContext} from '../../Context';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const index = () => {
    const navigation = useNavigation();
    const context = useContext(PokeTeamContext)
    const {PokeTeam,setPokeTeam} = context
    console.log(PokeTeam);
    
    return (
        <ImageBackground source={require('../../assets/bg_image_center.png')} style= {{flex: 1,justifyContent: "center" }}> 
        <SafeAreaView>
            <ScrollView>
            <View style={{alignItems:'center',flexDirection: 'column',justifyContent:'center'}}>
                {context.PokeTeam.map(pokemon =>{
                return(
                 <>
                    <Text style= {{fontSize:15,color:'black'}}> {pokemon}</Text>
                    <View style={{alignItems:'center',flexDirection: 'row',justifyContent:'space-between'}}>


                        <TouchableOpacity style={{backgroundColor:'yellow',padding:6,borderRadius:5,margin:5}}
                        onPress={()=> {
                            const filtered = PokeTeam.filter(function(element) {
                                return element != pokemon;
                            })
                            setPokeTeam(filtered);                        
                        }} >
                        <Text style= {{fontSize:15,color:'black'}}>ELIMINAR DE EQUIPO</Text> 
                    </TouchableOpacity> 
                </View>
                 </>
                )})}
                <TouchableOpacity style={{backgroundColor:'green',padding:6,borderRadius:5,margin:5}}
                        onPress={() =>{

                            {context.PokeTeam.map(pokemon =>{
                                const obj = {
                                pokemon 
                            };
                            AsyncStorage.setItem('pokemones',JSON.stringify(obj));
                            console.log(obj);
                            })}
                        }} >   
                        <Text style= {{fontSize:15,color:'black'}}> GUARDAR EQUIPO</Text> 
                    </TouchableOpacity>
                     <TouchableOpacity style={{backgroundColor:'red',padding:6,borderRadius:5,margin:5}}
                            onPress={() =>{
                                navigation.goBack();
                            }} >
                            <Text style= {{fontSize:15,color:'black'}}> VOLVER</Text> 
                        </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
        </ImageBackground> 
    )
}

export default index
