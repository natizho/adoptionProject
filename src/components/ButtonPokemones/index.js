import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

const index = ({children,color}) => {
    return (
        
        <TouchableOpacity>
            <Text>{children}</Text>
        </TouchableOpacity>
    );
};

export default index
