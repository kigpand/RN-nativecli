import {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function InputContainer() {
  const [first, setFirst] = useState<string>('');
  const [second, setSecond] = useState<string>('');
  const [third, setThird] = useState<string>('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setFirst}
        placeholder="first"></TextInput>
      <TextInput
        style={styles.input}
        onChangeText={setSecond}
        placeholder="second"></TextInput>
      <TextInput
        style={styles.input}
        onChangeText={setThird}
        placeholder="third"></TextInput>
      <Text style={styles.text}>{first}</Text>
      <Text style={styles.text}>{second}</Text>
      <Text style={styles.text}>{third}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#79d2ff',
  },
  input: {
    borderRadius: 8,
  },
  text: {
    backgroundColor: 'white',
    color: 'black',
  },
});
