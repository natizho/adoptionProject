
import React, { useState,useEffect} from 'react';
import { View, Text, ScrollView, TouchableOpacity,SafeAreaView,Image,ImageBackground } from 'react-native';
import Header from '../../components/Header';
import axios from 'axios';
import { useNavigation } from '@react-navigation/core';
import Footer from '../../components/Footer'

const index = () => {
    const navigation = useNavigation();
    const [listaPokedex,setlistaPokedex] = useState({results:[]})
    useEffect(()=> {
    
        const getdata = async()=> {
        await axios({
                method: 'get',
                url: `https://pokeapi.co/api/v2/pokemon?limit=10`,
            })
            .then(function (response) {
                const data = response.data.results
                setlistaPokedex(response.data) 
            });
        }
        getdata();
    }, [])
    //style= {{fontSize:15,color:'black'}}

    return (
        <ImageBackground source={require('../../assets/bg_image_center.png')} style= {{flex: 1,justifyContent: "center" }}> 
            <SafeAreaView>
                <ScrollView>
                    <Header />
                    {listaPokedex?.results?.map((item)=>{
                    return(
                        <TouchableOpacity onPress={()=>{navigation.navigate('PokemonDetail',{pokemon:item.url})}}>
                            <View style={{alignItems:'center'}}>
                            <Text style= {{fontFamily: 'sans-serif-medium',fontWeight: 'normal',fontSize:15,color:'black'}}>{item.name }</Text>
                            </View>
                            <View style={{alignItems:'center'}}>
                                <Image
                                    source ={require('../../assets/logopokeball.png')} style= {{flex: 1,justifyContent: "center", alignItems: 'center'}}
                                    style= {{height: 100, width: 100}}
                                />
                            </View >
                        </TouchableOpacity>
                    )
                    })
                    }
                    <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TouchableOpacity style={{backgroundColor:'red',padding:6,borderRadius:5,margin:5}}
                            onPress={() =>{
                                navigation.goBack();
                                
                            }}>
                                <Text style= {{fontSize:15,color:'black'}}>  VOLVER ATRAS</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{backgroundColor:'red',padding:6,borderRadius:5,margin:5}}
                            onPress={() =>{
                                navigation.navigate('Poketeam');
                            }}>
                                <Text style= {{fontSize:15,color:'black'}}> TUS POKEMONES</Text>
                        </TouchableOpacity>
                    </View>
                    <Footer/>
                    </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    ) ;  
};

export default index
