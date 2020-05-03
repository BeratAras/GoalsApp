/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  View,
  Button,
  FlatList,
  StyleSheet
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    if(goalTitle.length === 0){ //Yazı yoksa ekleme yapma
      return;
    }
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId =>{
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    })
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.container}>
      <Button title='Show Input' onPress={() => setIsAddMode(true)}  />
        <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler} />
        <View>
            <FlatList 
            keyExtractor={(item, index) => item.id}
            data={courseGoals} 
            renderItem={itemData => <GoalItem onDelete={removeGoalHandler.bind(this, itemData.item.id)} title={itemData.item.value} />} 
            />
        </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 30,
  },
});
export default App;
