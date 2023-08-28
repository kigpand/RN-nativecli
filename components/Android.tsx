import {Text, View, StyleSheet, Button, Alert} from 'react-native';
import ImageContainer from './Image';
import {useState} from 'react';
import Animation from './Animation';
import SecondAnim from './SecondAmin';
import List from './List';
import InputContainer from './InputContainer';
import Buttons from './Buttons';

export default function Android() {
  const [active, setActive] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  function onPressBtn() {
    Alert.alert('press!');
    setActive(!active);
  }

  return (
    <View style={styles.andoridContainer}>
      {page === 1 && <List />}
      {page === 2 && <SecondAnim />}
      {page === 3 && <Animation />}
      {page === 4 && <InputContainer />}
      {/* <Animation /> */}
      {/* <Text>Android</Text>
      <Button onPress={onPressBtn} title="touch!" />
      <View style={styles.view2}>
        <Text>Test</Text>
      </View>
      <View style={styles.view3}>
        <Text>View3</Text>
      </View>
      <ImageContainer active={active} /> */}
      <Buttons onChangePage={(page: number) => setPage(page)} />
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
    flex: 1,
    backgroundColor: 'pink',
  },
});
