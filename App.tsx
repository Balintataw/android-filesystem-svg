/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RNFS from 'react-native-fs';
import {SvgUri} from 'react-native-svg';

function App(): JSX.Element {
  const [uri, setUri] = useState<string | null>(null);

  const writeFile = () => {
    var path = RNFS.DocumentDirectoryPath + '/icon.svg';
    RNFS.writeFile(
      path,
      `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
        <g fill="none" fill-rule="evenodd">
          <path fill="currentColor" d="M28,0 C43.463973,0 56,12.536027 56,28 C56,43.463973 43.463973,56 28,56 C12.536027,56 0,43.463973 0,28 C0,12.536027 12.536027,0 28,0 Z M28,2 C13.6405965,2 2,13.6405965 2,28 C2,42.3594035 13.6405965,54 28,54 C42.3594035,54 54,42.3594035 54,28 C54,13.6405965 42.3594035,2 28,2 Z"/>
          <path fill="currentColor" d="M18.0066023,18 C18.5160523,18 18.935933,18.3827202 18.9933167,18.8826674 L19,19 C19,19.5522847 18.5550537,20 18.0066023,20 L1.99339768,20 C1.44475929,20 1,19.5561352 1,19 C1,18.4477153 1.44494629,18 1.99339768,18 L18.0066023,18 Z M22.0066023,11 C22.5160523,11 22.935933,11.3827202 22.9933167,11.8826674 L23,12 C23,12.5522847 22.5550537,13 22.0066023,13 L5.99339768,13 C5.44475929,13 5,12.5561352 5,12 C5,11.4477153 5.44494629,11 5.99339768,11 L22.0066023,11 Z M18.0066023,4 C18.5160523,4 18.935933,4.38272018 18.9933167,4.88266744 L19,5 C19,5.55228475 18.5550537,6 18.0066023,6 L1.99339768,6 C1.44475929,6 1,5.55613518 1,5 C1,4.44771525 1.44494629,4 1.99339768,4 L18.0066023,4 Z" transform="translate(16 16)"/>
        </g>
      </svg>`,
      'utf8',
    )
      .then(() => {
        setUri(`file://${path}`)
        Alert.alert('FILE WRITTEN TO!', path);
      })
      .catch(err => {
        setUri(null)
        Alert.alert(JSON.stringify(err.message));
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={writeFile} style={styles.buttonStyle}>
          <Text>WRITE SVG</Text>
        </TouchableOpacity>
        <Text style={{ color: 'black' }}>URI: {uri}</Text>
        <View style={{ borderWidth: 1, paddingTop: 20, minHeight: 40 }}>
        {uri !== null ? (
          <SvgUri uri={uri} color="red" style={{ fontSize: 50 }} onError={err => console.log(err)} />
        ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#98DBC6',
  },
  buttonStyle: {
    backgroundColor: '#F18D9E',
    padding: 10,
    marginTop: 32,
    minWidth: 250,
    borderRadius: 5,
  },
});

export default App;
