
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

import * as FileSystem from 'expo-file-system'
/* import { DocumentDirectoryPath, writeFile } from 'react-native-fs'; */
/* import { writeFile } from 'react-native-fs';
 */

import JSonNotes from './saved-notes.json'

import { Alert, Button, StyleSheet, Text, View } from 'react-native';
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

    <Text style={styles.textColorStyle}>This is the home page</Text>
</View>
  );
}

function AboutPage() {
  return (
    <View>
      <Text>This is the AboutMe section</Text>
      <Text>Some about me text</Text>
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

  /* const path = DocumentDirectoryPath + '/saved-notes.json' */

  /*const fs = require('fs')*/


  let notesToMap = JSonNotes.notes
  let notesArrayLen = notesToMap.length

  let newNoteId = notesToMap[notesArrayLen-1].id+1


  /* function buttonHandler(){
    
    notesToMap.push({'id': newNoteId, 'post': '' + text})    
    
    console.log(notesToMap)

    notesToMap = notesToMap

    notesStringified = JSON.stringify(notesToMap)

    newNoteId++
   
   } */



  
  const listOfNotes = notesToMap.map(note =>
    <View key={note.id}>
      <Text>{note.post}</Text>
    </View>
  )

  return (
    <View>
      <Button style={styles.textBoxStyle} title='Press Me' ></Button>

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
  },
  textBoxStyle: {
    width: '50%',
    margin: 'auto'
  },
  textColorStyle: {
    color: 'red'
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