import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {createScreenProps} from '../../navigation/utils';

const WelcomeScreenProps = createScreenProps('WelcomeScreen');

function WelcomeScreen({
  navigation,
}: typeof WelcomeScreenProps): React.JSX.Element {
  const rotateStyle = {
    transform: [{rotate: '-90deg'}],
  };

  return (
    <View className="flex-1 justify-center items-center bg-black">
      <Image
        source={require('../../assets/images/blue_gradient.jpeg')}
        style={[
          rotateStyle,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            position: 'absolute',
          },
        ]}
      />
      <Image
        source={require('../../assets/images/flowIcon.png')}
        className="w-32 h-28 mb-4 mt-36"
      />
      <Text className="text-3xl font-[poppins-semibold] text-white">
        Welcome to
      </Text>
      <Text className="text-3xl font-[poppins-semibold] text-white">Flow</Text>
      {/* Spacer */}
      <View className="flex-grow" />
      <TouchableOpacity
        className="mb-8 bg-blue-600 bg-opacity-20 rounded-full w-64 py-3"
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text className="text-white text-center font-sans text-lg">
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default WelcomeScreen;
