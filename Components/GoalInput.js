import React from 'react';
import { Button, StyleSheet, TextInput, View, Modal } from 'react-native';

const GoalInput = ({ addGoalHandler, goalInputHandler, enteredGoal, cancelhandler, visible }) => {

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal} />
                <View style={styles.btnStyles}>
                    <View style={styles.botton}>
                        <Button title="CANCEL" color="red" onPress={cancelhandler} />
                    </View>
                    <View style={styles.botton}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                </View>

            </View>
        </Modal>);
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    btnStyles: {
        flexDirection: "row",
        justifyContent: "space-around",
        // width: "60%"
    },
    botton: {
        width: "40%"
    }

});
