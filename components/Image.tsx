import {Image, View} from 'react-native';

type Props = {
  active: boolean;
};

export default function ImageContainer({active}: Props) {
  const icon = active ? require('../img/dark.png') : require('../img/iron.png');

  return <Image source={icon} style={{width: 50, height: 50}} />;
}
