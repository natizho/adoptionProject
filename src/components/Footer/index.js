import React from 'react'
import { View, Text,Image,ImageBackground} from 'react-native'

const index = () => {
    return (
        <View>
        <ImageBackground 
            source = {require('../../assets/bg_image_footer.png')}
            style ={{
                flex:1,
                height:120,
                alignItems: 'center',
                padding: 15, 
            }}
       >
       </ImageBackground>
    </View>
    )
}

export default index
