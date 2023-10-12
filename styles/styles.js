import { StyleSheet } from "react-native"

// !App.js
export const stylesMain = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 30
    }
})

// !GoalForm.js
export const stylesGoalForm = StyleSheet.create({
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        width: "100%",
        height: "100%",
        backgroundColor: "whitesmoke"
    },
    formImage: {
        borderRadius: 10,
        width: "80%",
        borderWidth: 1,
        borderColor: "#cccccc"
    },
    input: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "80%",
        marginBottom: 50,
        paddingLeft: 10,
        padding: 20,
        borderRadius: 10
    },
    viewButton: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        width: "80%",
        gap: "100%",
        backgroundColor: "lightblue"
    }
})

// !GoalList.js
export const stylesGoalList = StyleSheet.create({
    inputContainer2: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 5,
        width: "100%",
        paddingTop: 20
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
    pressedItem: {
        opacity: 0.5
    }
})