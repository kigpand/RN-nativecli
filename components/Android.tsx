import {Text, View, StyleSheet, Button, Alert} from 'react-native';
import ImageContainer from './Image';
import {useState} from 'react';

export default function Android() {
  const [active, setActive] = useState<boolean>(false);

  function onPressBtn() {
    Alert.alert('press!');
    setActive(!active);
  }

  return (
    <View style={styles.andoridContainer}>
      <Text>Android</Text>
      <Button onPress={onPressBtn} title="touch!" />
      <View style={styles.view2}>
        <Text>Test</Text>
      </View>
      <View style={styles.view3}>
        <Text>View3</Text>
      </View>
      <ImageContainer active={active} />
    </View>
  );
}

const styles = StyleSheet.create({
  andoridContainer: {
    backgroundColor: 'pink',
    flex: 1,
    flexDirection: 'column',
  },
  view2: {
    flex: 2,
    backgroundColor: 'green',
  },
  view3: {
    flex: 3,
    backgroundColor: 'pink',
  },
});
