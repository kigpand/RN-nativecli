import {StyleSheet, Text, View} from 'react-native';
import {dummy} from '../utils/dummy';
import SwitchCom from './SwitchCom';
import {useState} from 'react';

export default function List() {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  function toggleSwitch() {
    setIsEnabled(!isEnabled);
  }

  return (
    <View style={styles.container}>
      {dummy.map((item, i) => {
        return (
          <Text style={isEnabled ? styles.onToggle : styles.notTOggle} key={i}>
            name: {item.name}, age: {item.age}
          </Text>
        );
      })}
      <SwitchCom isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  onToggle: {
    height: 20,
    color: 'black',
    backgroundColor: '#fdffb5',
  },
  notTOggle: {
    height: 20,
    color: 'white',
    backgroundColor: '#74b3ff',
  },
});
