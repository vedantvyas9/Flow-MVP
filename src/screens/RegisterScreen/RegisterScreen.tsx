import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import BaseRegisterScreen from './BaseRegisterScreen';

import {createScreenProps} from '../../navigation/utils';

const RegisterScreenProps = createScreenProps('RegisterScreen');

const RegisterScreen: React.FC<typeof RegisterScreenProps> = ({navigation}) => {
  return (
    <BaseRegisterScreen>
      <Text className="text-white text-3xl font-[poppins-semibold] mt-20">
        Sign up with
      </Text>
      <Text className="text-white text-3xl font-[poppins-semibold]">
        email or phone no.
      </Text>
      <TouchableOpacity
        className="border border-blue-500 rounded-full p-4 mt-4 items-center"
        onPress={() => navigation.navigate('EmailRegisterScreen')}>
        <Text className="text-blue-500 font-sans">Email</Text>
      </TouchableOpacity>
      <TouchableOpacity className="border border-blue-500 rounded-full p-4 mt-4 items-center">
        <Text className="text-blue-500 font-sans">Phone number</Text>
      </TouchableOpacity>
      <View className="flex-1 justify-end items-center">
        <Text className="text-white font-sans">
          Already Have An Account?{' '}
          <Text
            className="text-blue-500"
            onPress={() => navigation.navigate('LoginScreen')}>
            Log In
          </Text>
        </Text>
      </View>
    </BaseRegisterScreen>
  );
};

export default RegisterScreen;
