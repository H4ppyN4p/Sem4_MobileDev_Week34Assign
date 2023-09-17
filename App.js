
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

import JSonNotes from './saved-notes.json'

import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';


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

      <View style={styles.buttonView}>
        <Button style={styles.buttons} 
        title='Go to Notes page'
        onPress={() =>  
        navigation.navigate('Notes')}
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

function Notes() {


  const [text, setText] = useState('')

  function buttonHandler(){
    alert('you pressed a button ' + text)
  }

  notesToMap = JSonNotes.notes
  
  const listOfNotes = notesToMap.map(note =>
    <View key={note.id}>
      <Text>{note.post}</Text>
    </View>
  )

  return (
    <View>
      <Button title='Press Me' onPress={buttonHandler}></Button>
      <TextInput onChangeText={(txt) => setText(txt)}/>

      <Text>This is the Notes section</Text>
      {listOfNotes}
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

        <Stack.Screen name="Notes" component={Notes} />




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


/*

const notes = Notes
console.log(notes.notes)

const listOfNotes = notes.map(note =>
  
  <View key={note.id}>
    <View>{note.post}</View>
  </View>
  )


  {listOfNotes}

  */