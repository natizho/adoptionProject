import React from 'react'
import { View, Text, TouchableOpacity, ScrollView,ImageBackground ,Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
const index = ({navigation}) => {
    return (
        <ImageBackground source={require('../../assets/bg_image_center.png')} style= {{flex: 1,justifyContent: "center" }}> 
            <SafeAreaView>
                <ScrollView>
                    <Header />
                    <View>
                        <TouchableOpacity
                            onPress={()=>{
                                navigation.navigate('Home')
                            }}>
                            <View style= {{margin:205,justifyContent:'center',flexDirection:'row'}}>

                            <Image
                                    source ={require('../../assets/logopokeball.png')} style= {{flex: 1,justifyContent: "center", alignItems: 'center'}}
                                    style= {{height: 100, width: 100}}
                                />
                                    
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Footer/>
                </ScrollView>
            </SafeAreaView>
          </ImageBackground>
    )
}

export default index
