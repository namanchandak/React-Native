import React from "react";
import { View, Button, Text } from "react-native";


const Details=({navigation})=>{
    return(
        <View style={{flex:1}}>
            <Text>
                Home
            </Text>
            <Button onPress={()=>{
                console.log("button ") 
                navigation.navigate('Three')
            }
            
            }
            
            title="next"
            
            ></Button>
        </View>
    )
}

export default Details;