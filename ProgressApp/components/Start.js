import { StyleSheet, Text, View } from 'react-native';

export default function Start({onLayoutRootView}){
  return (
    <View onLayout={onLayoutRootView} style={[ styles.headerContainer ]}>
      <Text style={[ styles.text, styles.header ]}>RYBA</Text>
      <Text style={[ styles.text, styles.subheader ]}>Get stuff done</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  headerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#6F8CF3'
  },
  text: {
    fontFamily: 'Nunito',
    color: '#fff',
  },
  header: {
    marginTop: 50,
    fontSize: 100,
  },
  subheader: {
    fontSize: 40,
  }
});