
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';

import * as FileSystem from 'expo-file-system'
/* import { DocumentDirectoryPath, writeFile } from 'react-native-fs'; */
/* import { writeFile } from 'react-native-fs';
 */

import JSonNotes from './jsonData/saved-notes.json'

import { Alert, Button, StyleSheet, Text, View, TextInput  } from 'react-native';


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

    <Text style={styles.textColorStyle}>This is the home pageeee</Text>
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
 

  /* function buttonHandler(){
    
    notesToMap.push({'id': newNoteId, 'post': '' + text})    
    
    console.log(notesToMap)

    notesToMap = notesToMap

    notesStringified = JSON.stringify(notesToMap)

    newNoteId++
   
   } */


   const [text, setText] = useState('')


   let notesToMap = JSonNotes.notes
   let notesArrayLen = notesToMap.length
 
   let newNoteId = notesToMap[notesArrayLen-1].id+1

   async function handelButtonPress(){

   

   }

  
  const listOfNotes = notesToMap.map(note =>
    <View key={note.id}>
      <Text>{note.post}</Text>
    </View>
  )

  return (
      <View>
        <Button style={styles.textBoxStyle} title='Press Me' 
        onPress={handelButtonPress}></Button>

        <Text>Add a  new note:</Text>
        <TextInput 
          value={text}
          onChangeText={(text) => setText(text)}
          placeholder={'Some text'}
        />
        <Text>This is the Notes section</Text>
        <Text></Text>
        {listOfNotes}
    </View>
  )
}



const Stack = createNativeStackNavigator();

function App() {


  /*
  */
  useEffect(() => {

    const jsonFilePath = `${FileSystem.documentDirectory}myData.json`;


    /*
    */
    async function createEmptyJasonFile() {

      fileExist = checkForFile(jsonFilePath);

      if (fileExist == false) {
        try {
          // Create an empty JSON object.
          const emptyJson = {};

          //convert the JSON object to a string
          const jsonContent = JSON.stringify(emptyJson);
      
          // Write the empty string to the file.
          await FileSystem.writeAsStringAsync(jsonFilePath, jsonContent);
      
          console.log('Empty text filee created:', jsonFilePath);

        } catch (error) {
          console.error('Error creating text file:', error);
        }

      }
      
    }
    
    /*
    */

    async function checkForFile(filePath) {
      const fileInfo = await FileSystem.getInfoAsync(filePath);

      if (fileInfo.exists) {
        console.log(`File exists at path: ${filePath}`);
        return true
      } 
      else {
        console.log('File does not exist at path for :' + fileInfo);
          // Call the function to create the empty text file.
          createEmptyJasonFile()  
      }

    }

    /*
    */
    
  

    console.log('App started')
  }, [])

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

