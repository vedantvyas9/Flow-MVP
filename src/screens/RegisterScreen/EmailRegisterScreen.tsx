import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BaseRegisterScreen from './BaseRegisterScreen';
import {createScreenProps} from '../../navigation/utils';

const EmailRegisterScreenProps = createScreenProps('EmailRegisterScreen');

const EmailRegisterScreen: React.FC<typeof EmailRegisterScreenProps> = ({
  navigation,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isFormValid = fullName && email && password && confirmPassword;

  return (
    <BaseRegisterScreen>
      <Text className="text-white text-3xl font-[poppins-semibold]  mt-16">
        Create your account
      </Text>

      <View className="flex-row items-center bg-[#2b2b2b] mt-6 p-5 rounded-xl">
        <Icon name="person-outline" size={24} color="#fff" />
        <TextInput
          className="ml-2 flex-1 text-white font-sans"
          placeholder="Full Name"
          placeholderTextColor="#aaa"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      <View className="flex-row items-center bg-[#2b2b2b] mt-4 p-5 rounded-xl">
        <MaterialCommunityIcons name="email-outline" size={24} color="#fff" />
        <TextInput
          className="ml-2 flex-1 text-white font-sans"
          placeholder="Enter your email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View className="flex-row items-center bg-[#2b2b2b] mt-4 p-5 rounded-xl">
        <Icon name="lock-outline" size={24} color="#fff" />
        <TextInput
          className="ml-2 flex-1 text-white font-sans"
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon
            name={showPassword ? 'visibility' : 'visibility-off'}
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center bg-[#2b2b2b] mt-4 p-5 rounded-xl">
        <Icon name="lock-outline" size={24} color="#fff" />
        <TextInput
          className="ml-2 flex-1 text-white font-sans"
          placeholder="Confirm Password"
          placeholderTextColor="#aaa"
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Icon
            name={showConfirmPassword ? 'visibility' : 'visibility-off'}
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        className={`mt-auto py-3 rounded-full mb-3 ${
          isFormValid ? 'bg-blue-600' : 'bg-[#1e2c43]'
        }`}
        disabled={!isFormValid}
        onPress={() => navigation.navigate('PersonalDetailsScreen')}>
        <Text
          className={`text-center font-sans ${
            isFormValid ? 'text-white' : 'text-gray-500'
          } font-sans text-lg`}>
          Next
        </Text>
      </TouchableOpacity>
    </BaseRegisterScreen>
  );
};

export default EmailRegisterScreen;
