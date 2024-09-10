import React from 'react';
import {View, Image, Text, SafeAreaView} from 'react-native';
import {VibrancyView} from '@react-native-community/blur';

const GlassMorphism = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Image
        source={require('../assets/images/onboarding/2.jpg')}
        //@ts-ignore
        style="absolute w-full h-full"
        resizeMode="contain"
      />
      <View className="absolute w-full">
        <VibrancyView blurType="dark" blurAmount={1}>
          <Text className="m-7 text-white">Hi, I am some vibrant text.</Text>
        </VibrancyView>
      </View>
    </SafeAreaView>
  );
};

export default GlassMorphism;
