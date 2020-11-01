import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View>
        <Text style={styles.text}>Hi There test</Text>
        <Button 
          onPress={()=>{
            console.log('Button pressed')
          }}
          title="Go to components Demo"
        />
        <TouchableOpacity onPress={()=>console.log('List pressed')}>
            <Text>Go To List Demo</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
