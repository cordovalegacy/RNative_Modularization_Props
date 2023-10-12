
import { Text, FlatList, View, StyleSheet } from 'react-native'

const GoalList = ({ goals }) => {
    return (
        <View style={stylesGoalList.inputContainer2}>
            <Text>List of goals...</Text>
            <FlatList
                data={goals}
                renderItem={eachGoal => (<Text style={stylesGoalList.goalText}>{eachGoal.item.text}</Text>)}
                keyExtractor={eachGoal => eachGoal.id}
            />
        </View>
    )
}

export default GoalList

const stylesGoalList = StyleSheet.create({
    inputContainer2: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 5,
        width: "100%",
        paddingTop: 10
    },
    listContainer: {
        borderRadius: 5,
        width: "90%"
    },
    goalText: {
        fontSize: 20,
        color: "white",
        marginVertical: 5,
        padding: 5,
        backgroundColor: "purple"
    },
})
