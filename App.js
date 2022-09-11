import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';


export default function App() {

  const [enteredWord, setEnteredWord] = useState(''); 

  // a function that listens for words for user to enter

  function wordInputHandler(enteredText) {
    setEnteredWord(enteredText);
  };

  // a function that fires up when Translate button is clicked

  function translateHandler() {

    console.log(enteredWord)

  };



  return (
    <View style={styles.container}>

      <View style={styles.InputContainer}>
        
        <TextInput placeholder='type any word...' style={styles.textInput} onChangeText={wordInputHandler}/>
        <Button title='Translate' onPress={translateHandler} />

      </View>

      <View style={styles.goalsContainer}>

        <Text> The defnition of the word </Text>

      </View>

    </View>
  );
}


const styles = StyleSheet.create(
  {
    container: {
      padding: 50,
      flex: 1,
      paddingHorizontal: 30,
      borderWidth: 1,
      borderColor: 'blue'
    },

    InputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      flex: 1,
      
    },

    textInput: {
      borderWidth: 1,
      borderColor: 'blue',
      width: '70%',
      marginRight: 10,
      padding: 8,
    },


    goalsContainer: {
      flex: 4

    }

  }
);


