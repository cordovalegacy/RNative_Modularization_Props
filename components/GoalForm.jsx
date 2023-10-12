
// !Packages
import { useState } from 'react'
import { Button, TextInput, View, Modal, Image, Text } from 'react-native'

// !Styles
import { stylesGoalForm } from '../styles/styles'

const GoalForm = ({ setGoals, isModalOpen, modalToggler }) => {

    const [goal, setGoal] = useState("")

    const changeHandler = (e) => {
        console.log(e)
        setGoal(e)
    }

    const submitHandler = () => {
        setGoals(prevGoals => [...prevGoals, { text: goal, id: Math.random().toString() }])
        modalToggler()
    }

    return (
        <Modal visible={isModalOpen} animationType='slide'>
            <View style={stylesGoalForm.inputContainer}>
                <Text style={{fontSize: 25, marginBottom: 10}}>My First To Do List in React Native</Text>
                <Image
                    source={require('../assets/formImage.png')}
                    style={stylesGoalForm.formImage}
                />
                <TextInput
                    placeholder='Type your course goal here!'
                    style={stylesGoalForm.input}
                    onChangeText={changeHandler} />
                <View style={stylesGoalForm.viewButton}>
                    <Button title='Goal!!' onPress={submitHandler} color={"blue"} />
                    <Button title="Cancel" onPress={modalToggler} color={"red"} />
                </View>
            </View>
        </Modal>
    )
}

export default GoalForm
