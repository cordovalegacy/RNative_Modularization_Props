
import { Button, TextInput, View, StyleSheet } from 'react-native'
import { useState } from 'react'

const GoalForm = ({ setGoals }) => {

    const [goal, setGoal] = useState("")

    const changeHandler = (e) => {
        console.log(e)
        setGoal(e)
    }

    const submitHandler = () => {
        setGoals(prevGoals => [...prevGoals, { text: goal, id: Math.random().toString() }])
    }

    return (
        <View style={stylesGoalForm.inputContainer1}>
            <TextInput
                placeholder='Your course goal!'
                style={stylesGoalForm.input}
                onChangeText={changeHandler} />
            <View style={stylesGoalForm.viewButton}>
                <Button title='Goal!!' onPress={submitHandler} />
            </View>
        </View>
    )
}

export default GoalForm

const stylesGoalForm = StyleSheet.create({
    inputContainer1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5,
        width: "100%",
        borderBottomWidth: 2,
        borderColor: "#cccccc",
        height: "25%"
    },
    input: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "75%",
        paddingLeft: 10,
        padding: 10,
    },
    viewButton: {
        width: "20%",
        backgroundColor: "lightblue"
    }
})
