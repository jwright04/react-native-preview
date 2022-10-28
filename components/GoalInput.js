import { useState } from 'react';
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

const GoalInput = ({ onAddGoalHandler, visible, onCancel }) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    onAddGoalHandler(enteredGoalText);
    setEnteredGoalText('');
  };
  const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#311b6b',
    },
    image: {
      width: 100,
      height: 100,
      margin: 20,
      filter: 'white(100%)',
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#e0e0e0',
      backgroundColor: '#e0e0e0',
      width: '100%',
      padding: 16,
      color: '#120438',
      borderRadius: 6,
    },

    buttonContainer: {
      marginTop: 16,
      flexDirection: 'row',
    },

    button: {
      width: '30%',
      marginHorizontal: 8,
    },
  });

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/checkbox.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="#f31282" onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" color="#b180f0" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
