import React from 'react'
import { View, Text,Image,ImageBackground,TouchableOpacity,SafeAreaView,Modal} from 'react-native'
import { useEffect,useState,useContext } from 'react'
import axios from 'axios'
import { useNavigation } from '@react-navigation/core';
import {PokeTeamContext} from '../../Context';
//import {contadorPokemonContext} from '../../Context';

const index = ({route}) => {
    const [modalStatesIsOpen, setModalStatesIsOpen] = useState(false)
    const navigation = useNavigation();
    const context = useContext(PokeTeamContext)
    //const contextContador = useContext(contadorPokemonContext)
    const [pokemonInfo,setpokemonInfo] = useState()
    const {PokeTeam,setPokeTeam} = context
    //const {contadorPokemon,setcontadorPokemon} = contextContador
    useEffect(()=> {
        const getdata = async()=> {
           await axios({
                 method: 'get',
                 url: `${route.params.pokemon}`,
               })
                 .then(function (response) {
                   const data = response.data.results
                   setpokemonInfo(response.data) 
                 });     
         }
        getdata();
    }, [])
    console.log(pokemonInfo);
    return (
      <ImageBackground source={require('../../assets/bg_image.png')} style= {{flex: 1,justifyContent: "center" }}> 
        <SafeAreaView style={{flexDirection:'column'}}>
          <Modal visible ={modalStatesIsOpen} transparent={true} >
            <View 
              style= {{ 
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
                
              }}>
                <View style= {{ 
                   justifyContent: "center",
                   alignItems: "center",
                   backgroundColor: "white",
                   width: "80%",
                   height: "20%",
                   backgroundColor:'orange'
                  }} >
               <Text style= {{fontSize:15,color:'black'}}> {pokemonInfo?.stats.map((stats)=>{
                  return(
                    <>
                      <Text style= {{fontSize:15,color:'black'}}>{stats.stat.name}</Text>
                      <Text style= {{fontSize:15,color:'black'}}> {stats.base_stat}</Text>
                    </>
                  )}
                )}
              </Text>
              <TouchableOpacity style={{backgroundColor:'yellow',padding:6,borderRadius:5,margin:5}} onPress={() =>(setModalStatesIsOpen(false))}>
                <View>
                  <Text style= {{fontSize:15,color:'black'}}>
                    CERRAR 
                  </Text> 
                </View>
               </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <View style={{alignItems:'center',flexDirection: 'column',justifyContent:'center'}}>
              <View >
                  <Image
                    source = {{uri: pokemonInfo?.sprites.front_default}}
                    style={{
                    height:300, 
                    width: 300
                  }}
                  />
              </View >
              <Text style= {{fontSize:15,color:'black'}}> Nombre: {pokemonInfo?.name}</Text>
              <Text style= {{fontSize:15,color:'black'}}> Tipo/s: {pokemonInfo?.types.map((tipo)=>{
                return(
                  <Text>
                    {
                     tipo.type.name
                    }
                  </Text>
                )}   
              )}</Text>
              <Text style= {{fontSize:15,color:'black'}}> Altura: {pokemonInfo?.height}</Text>
              <Text style= {{fontSize:15,color:'black'}}> Peso: {pokemonInfo?.weight}</Text>
              <TouchableOpacity style={{backgroundColor:'yellow',padding:6,borderRadius:5,margin:5}} onPress={() =>(setModalStatesIsOpen(true))}>
                <Text style= {{fontSize:15,color:'black'}}>
                  ESTADISTICAS 
                </Text> 
              </TouchableOpacity>
 
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-around'
          }}>
              <TouchableOpacity style={{backgroundColor:'red',padding:6,borderRadius:5,margin:5}} onPress={() =>{
                navigation.goBack();
                }}>
                    <Text style= {{fontSize:15,color:'black'}}>VOLVER </Text> 
              </TouchableOpacity>

              <TouchableOpacity style={{backgroundColor:'green',padding:6,borderRadius:5,margin:5}}onPress={() =>{
                
                //setContadorPokemon (contadorPokemon + 1)
                //const parseId = parseInt(pokemonInfo.id,10)
                  setPokeTeam([...PokeTeam,
                    <>
                      <View style={{alignItems:'center',flexDirection: 'column',justifyContent:'center'
                        }}>
                            <Image
                            source = {{uri: pokemonInfo?.sprites.front_default}}
                            style={{
                              height:100, 
                              width: 100
                            }}/>
                             <Text style= {{fontSize:15,color:'black'}}>{pokemonInfo.name}</Text>
                            <Text style= {{fontSize:15,color:'black'}}>{pokemonInfo?.types.map((tipo)=>{
                              return(
                                  <Text style= {{fontSize:15,color:'black'}}>{tipo.type.name}</Text>
                              )} 
                            )}
                            </Text>  
                      </View>
                    </>
                  ]);            
               }}>
                    <Text style= {{fontSize:15,color:'black'}}>AGREGAR A PLANTILLA </Text> 
              </TouchableOpacity  >

              <TouchableOpacity style={{backgroundColor:'red',padding:6,borderRadius:5,margin:5}}
                onPress={()=>{
                  navigation.navigate('Poketeam');
                }}>
                  <Text style= {{fontSize:15,color:'black'}}>PLANTILLA</Text>
              </TouchableOpacity>
        </View>
        </SafeAreaView>
      </ImageBackground>
    )
}

export default index
