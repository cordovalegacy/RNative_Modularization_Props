
import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import GoalForm from './components/GoalForm';
import GoalList from './components/GoalList';

export default function App() {

  const [goals, setGoals] = useState([])

  return (
    <View style={stylesMain.container}>
      <StatusBar style="auto" />
      <GoalForm setGoals={setGoals}/>
      <GoalList goals={goals}/>
    </View>
  );
}

const stylesMain = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30
  }
})
