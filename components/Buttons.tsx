import {Button, StyleSheet, Text, View} from 'react-native';

type Props = {
  onChangePage: (page: number) => void;
};

export default function Buttons({onChangePage}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.button} onPress={() => onChangePage(1)}>
        1번
      </Text>
      <Text style={styles.button} onPress={() => onChangePage(2)}>
        2번
      </Text>
      <Text style={styles.button} onPress={() => onChangePage(3)}>
        3번
      </Text>
      <Text style={styles.button} onPress={() => onChangePage(4)}>
        4번
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    backgroundColor: 'rgb(155, 155, 155)',
    shadowColor: 'black',
    shadowOpacity: 0.4,
  },
});
