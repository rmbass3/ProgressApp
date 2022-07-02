import { StyleSheet, Text, View, Animated } from 'react-native';
import { useRef } from "react"
import { LinearGradient } from "expo-linear-gradient";
import fullProgress from '../assets/progressbars/full_progress.png'
import halfProgress from '../assets/progressbars/half_progress.png'
import smallProgress from '../assets/progressbars/small_progress.png'

export default function Start({onLayoutRootView}){

  // const slideAnim = useRef(new Animated.Value(150)).current

  // const slide = () => {
  //   Animated.timing(slideAnim, {
  //     toValue: 1,
  //     duration: 500
  //   }).start()
  // }

  return (
    <View onLayout={onLayoutRootView} style={[ styles.body ]}>
      <View>
        <Text style={[ styles.text, styles.header ]}>RYBA</Text>
        <Text style={[ styles.text, styles.subheader ]}>Get stuff done</Text>
      </View>
      <View style={[ styles.progressContainer ]}>
        <View style={[ styles.bar, styles.backgroundOne ]} ></View>
        <View style={[ styles.bar, styles.backgroundTwo ]} ></View>
        <View style={[ styles.bar, styles.backgroundThree ]} ></View>
        <LinearGradient 
        colors={['#3052CB', '#5B79E5']} 
        style={[ styles.bar, styles.progressOne ]}
        start={{ x: 0.5, y: 0.5}}
        end={{ x: 0, y: 0}}
        />
        <LinearGradient 
        colors={['#3052CB', '#5B79E5']} 
        style={[ styles.bar, styles.progressTwo ]}
        start={{ x: 0.5, y: 0.5}}
        end={{ x: 0, y: 0}}
        />
        <LinearGradient 
        colors={['#3052CB', '#5B79E5']} 
        style={[ styles.bar, styles.progressThree ]}
        start={{ x: 0.5, y: 0.5}}
        end={{ x: 0, y: 0}}
        />
        <View style={[ styles.bar, styles.progressTwo ]} ></View>
        <View style={[ styles.bar, styles.progressThree ]} ></View>
      </View>
      <View style={[ styles.button ]}>
        <Text style={[ styles.text, styles.buttonText ]}>Start</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#6F8CF3',
    
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
  },
  button: {
    width: '50%',
    height: 75,
    backgroundColor: "#3052CB",
    borderRadius: 50,
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 450
  },
  buttonText: {
    textAlign: "center",
    fontSize: 40,
  },
  progressContainer: {

  },
  bar: {
    borderRadius: 75,
    transform: [{
      rotate: '-15deg'
    }],
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4
    },
    shadowOpacity: 0.1
  },
  backgroundOne: {
    width: 300,
    height: 60,
    backgroundColor: "#FFFFFF",
    left: -180,
    top: 100,
  },
  backgroundTwo: {
    width: 300,
    height: 60,
    backgroundColor: "#FFFFFF",
    left: -150,
    top: 190,
  },
  backgroundThree: {
    width: 300,
    height: 60,
    backgroundColor: "#FFFFFF",
    left: -120,
    top: 280,
  },
  progressOne: {
    width: 300,
    height: 60,
    left: -180,
    top: 100,

  },
  progressTwo: {
    width: 230,
    height: 60,
    left: -149,
    top: 199,
  },
  progressThree: {
    width: 150,
    height: 60,
    left: -120,
    top: 300,
  },

});