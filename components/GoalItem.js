import { Pressable, StyleSheet, Text, View } from 'react-native';

const GoalItem = ({ item, onDeleteItem }) => {
  const styles = StyleSheet.create({
    goalItem: {
      margin: 8,
      borderRadius: 6,
      backgroundColor: '#5e08cc',
    },
    goalItemText: {
      padding: 8,
      color: 'white',
    },
    pressedItem: {
      backgroundColor: '#210644',
    },
  });

  return (
    <View style={styles.goalItem}>
      <Pressable
        // handle pressed state for android
        android_ripple={{ color: '#210644' }}
        onPress={onDeleteItem.bind(this, item.id)}
        // must add a style to handle pressed state for iOS
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItemText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;
