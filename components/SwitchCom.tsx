import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';

type Props = {
  isEnabled: boolean;
  toggleSwitch: () => void;
};

const SwitchCom = ({isEnabled, toggleSwitch}: Props) => {
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SwitchCom;
