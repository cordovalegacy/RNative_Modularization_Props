
// !Packages
import { useState } from 'react'
import { View, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'

// !Components
import GoalForm from './components/GoalForm'
import GoalList from './components/GoalList'

// !Styles
import { stylesMain } from './styles/styles'

export default function App() {

  const [goals, setGoals] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const deleteHandler = (id) => {
    console.log("Delete: ", id)
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id))
  }

  const modalToggler = () => {
    setIsModalOpen(!isModalOpen)
  }

  //Button component is pre built. If you want your own custom button you have to use Pressable
  return (
    <View style={stylesMain.container}>
      <StatusBar style="auto" />
      <View style={{marginTop: 50}}>
        <Button title='Add New Goal' color={"purple"} onPress={modalToggler} />
      </View>
      <GoalForm setGoals={setGoals} isModalOpen={isModalOpen} modalToggler={modalToggler} />
      <GoalList goals={goals} deleteHandler={deleteHandler} />
    </View>
  )
}


