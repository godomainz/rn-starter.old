import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

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
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
