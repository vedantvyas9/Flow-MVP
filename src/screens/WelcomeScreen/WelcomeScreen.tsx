import React, {useEffect, useRef} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import {createScreenProps} from '../../navigation/utils';


const {width, height} = Dimensions.get('window');
const WelcomeScreenProps = createScreenProps('WelcomeScreen');



function WelcomeScreen({
  navigation,
}: typeof WelcomeScreenProps): React.JSX.Element {
  const rotateValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const rotateAnimation = Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 10000, // Rotation duration (10 seconds)
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    );
    rotateAnimation.start();
  }, [rotateValue]);
  const rotateInterpolate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const rotateStyle = {
    transform: [{rotate: rotateInterpolate}],
  };

  return (
    <View className="flex-1 justify-center items-center bg-black">
      <Animated.Image
        source={require('../../assets/images/welcomeBG.png')}
        style={[
          rotateStyle,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            position: 'absolute',
            width: width * 3,
            height: height * 2,
          },
        ]}
      />
      {/* Gray Overlay */}
      <View
        className="absolute top-0 left-0 right-0 bottom-0 bg-gray-800 opacity-60"
      />
      {/* Logo */}
      <Image
        source={require('../../assets/images/flowIcon.png')}
        className="w-24 h-24 mb-4 mt-36"
      />
      <Text className="text-3xl font-[poppins-semibold] text-white">Welcome to</Text>
      <Text className="text-3xl font-[poppins-semibold] text-white">Flow</Text>
      {/* Spacer */}
      <View className="flex-grow" />
      <TouchableOpacity
        className="mb-8 bg-blue-600 bg-opacity-20 rounded-full w-64 py-3"
        onPress={() => navigation.navigate('RegisterScreen')}>
        <Text className="text-white text-center font-sans text-lg">Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

export default WelcomeScreen;
