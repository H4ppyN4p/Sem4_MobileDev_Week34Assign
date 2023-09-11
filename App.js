
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

import { Button, StyleSheet, Text, View } from 'react-native';


function HomePage({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.buttonView}>
        <Button style={styles.buttons}
        title='Go to About page'
        onPress={() =>
        navigation.navigate('About')}
        />
      </View>

      <View style={styles.buttonView}>
        <Button style={styles.buttons} 
        title='Go to "Read More"'
        onPress={() =>  
        navigation.navigate('ReadMore')}
        />
      </View>

    <Text style={styles.text}>This is the home page</Text>
    
</View>
  );
}

function AboutPage() {
  return (
    <View>
      <Text>This is the AboutMe section</Text>
    </View>
  )
}

function ReadMore() {
  return (
    <View>
      <Text>This is the Read More section</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={HomePage} />

        <Stack.Screen name="About" component={AboutPage} />

        <Stack.Screen name="ReadMore" component={ReadMore} />



      </Stack.Navigator>  
    </NavigationContainer>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonView: {
    marginTop: "10px"
  }
});