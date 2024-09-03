import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import BaseRegisterScreen from './BaseRegisterScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createScreenProps} from '../../navigation/utils';

const LoginScreenProps = createScreenProps('LoginScreen');

const LoginScreen: React.FC<typeof LoginScreenProps> = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <BaseRegisterScreen>
      <Text className="text-white text-3xl font-[poppins-semibold]  mt-16">
        Login Your Account
      </Text>
      <View className="flex-row items-center bg-[#2b2b2b] mt-6 p-5 rounded-xl">
        <MaterialCommunityIcons
          name="email-outline"
          size={20}
          color="white"
          className="mr-2"
        />
        <TextInput
          className="flex-1 text-white font-sans"
          placeholder="Enter your email"
          placeholderTextColor="gray"
          keyboardType="email-address"
        />
      </View>
      <View className="flex-row items-center bg-[#2b2b2b] mt-4 p-5 rounded-xl">
        <Icon name="lock-outline" size={20} color="white" className="mr-2" />
        <TextInput
          className="flex-1 text-white font-sans"
          placeholder="Password"
          placeholderTextColor="gray"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Icon
            name={passwordVisible ? 'visibility' : 'visibility-off'}
            size={20}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text className="text-blue-500 text-center font-sans mt-4">
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-blue-500 rounded-full py-2 mt-7 ">
        <Text className="text-center text-white font-sans text-lg">Login</Text>
      </TouchableOpacity>
      <View className="flex-1 justify-end items-center">
        <Text className="text-white mb-4">
          Create New Account?{' '}
          <Text
            className="text-blue-500 mb-4 font-sans"
            onPress={() => navigation.navigate('EmailRegisterScreen')}>
            Sign up
          </Text>
        </Text>
        <View className="border-b border-gray-500 w-full mb-4" />
        <TouchableOpacity className="items-center">
          <Text className="text-white font-sans">Continue with Google</Text>
          <Image
            source={require('../../assets/images/googleLogo.png')}
            className="w-11 h-11 m-2"
          />
        </TouchableOpacity>
      </View>
    </BaseRegisterScreen>
  );
};

export default LoginScreen;
