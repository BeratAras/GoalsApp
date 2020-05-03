import React, { useState } from 'react'
import { TextInput, Button, StyleSheet, Modal, SafeAreaView, View } from 'react-native'

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState(''); 

    
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

     return (
       <Modal visible={props.visible} animationType="slide">
        <SafeAreaView style={styles.InputTextContainer}>
          <TextInput 
          placeholder="Course Goal" 
          style={styles.InputText} 
          onChangeText={goalInputHandler}
          value={enteredGoal}
          />
          <View style={styles.buttonContainer}>
            <Button title="CANCEL" color="red" onPress={props.onCancel}/>
            <Button title="ADD" onPress={addGoalHandler}/>
          </View>
        </SafeAreaView>
      </Modal>
    )
}

const styles = StyleSheet.create({
  InputTextContainer:{
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  InputText: {
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
    width: '90%'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '30%',
  }
});

export default GoalInput;