
// !Packages
import { Text, FlatList, View, Pressable } from 'react-native'

// !Styles
import { stylesGoalList } from '../styles/styles'

const GoalList = ({ goals, deleteHandler }) => {
    return (
        <View style={stylesGoalList.inputContainer2}>
            <Text>List of goals...</Text>
            <FlatList
                data={goals}
                //Pressable auto returns pressedData, which we can destructure into {pressed}
                renderItem={
                    eachGoal =>
                        <Pressable
                            android_ripple={{ color: "#dddddd" }}
                            onPress={() => deleteHandler(eachGoal.item.id)}
                            style={({ pressed }) => pressed && stylesGoalList.pressedItem}>
                            <Text
                                style={stylesGoalList.goalText}
                            >{eachGoal.item.text}</Text>
                        </Pressable>
                }
                keyExtractor={eachGoal => eachGoal.id}
            />
        </View>
    )
}

export default GoalList
