import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Meet = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20}}>Meet</Text>
    </View>
  )
}

export default Meet;
const styles=StyleSheet.create({
  container:{
    height:'100%',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  }
});