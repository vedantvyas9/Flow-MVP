import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createScreenProps} from '../../navigation/utils';
import {launchImageLibrary} from 'react-native-image-picker';

const PersonalDetailsScreenProps = createScreenProps('PersonalDetailsScreen');

const PersonalDetailsScreen: React.FC<typeof PersonalDetailsScreenProps> = ({
  navigation,
}) => {
  const [profileImage, setProfileImage] = useState<string | undefined>(
    undefined,
  );
  const [themeImage, setThemeImage] = useState<string | undefined>(undefined);
  const [name, setName] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<string>('');

  const openImagePicker = (
    setImage: React.Dispatch<React.SetStateAction<string | undefined>>,
  ) => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.assets && response.assets.length > 0) {
        setImage(response.assets[0].uri);
      }
    });
  };

  const isFormValid = () => {
    return name !== '' && bio !== '' && dateOfBirth !== '';
  };

  return (
    <SafeAreaView className="flex-1 bg-[#161616]">
      <View className="flex-1 p-3">
        <View className="relative h-1/4">
          {themeImage && (
            <Image
              source={{uri: themeImage}}
              className="absolute w-full h-full"
            />
          )}
          <TouchableOpacity
            className="absolute top-5 right-5"
            onPress={() => openImagePicker(setThemeImage)}>
            <Icon name="pencil" size={24} color="white" />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => navigation.goBack()}>
            <View className="absolute w-14 rounded-full top-5 left-5">
              <Icon name="chevron-left" size={24} color="#fff" />
            </View>
          </TouchableOpacity> */}
        </View>

        <View className="items-center mt-[-50px]">
          <View className="relative">
            <Image
              source={
                profileImage
                  ? {uri: profileImage}
                  : require('../../assets/images/default-user.png')
              }
              className="w-24 h-24 rounded-full"
            />
            <TouchableOpacity
              className="absolute bottom-0 right-0"
              onPress={() => openImagePicker(setProfileImage)}>
              <Icon name="pencil" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row items-center bg-[#2b2b2b] mt-6 p-5 rounded-xl">
          <Icon name="user" size={24} color="#fff" />
          <TextInput
            className="ml-2 flex-1 text-white font-sans"
            placeholder="Full Name"
            placeholderTextColor="#aaa"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View className="flex-row items-center bg-[#2b2b2b] mt-6 p-5 rounded-xl">
          <Icon name="info" size={24} color="white" />
          <TextInput
            placeholder="Bio"
            className="ml-2 flex-1 text-white font-sans"
            placeholderTextColor="#aaa"
            value={bio}
            onChangeText={setBio}
          />
        </View>

        <View className="flex-row items-center bg-[#2b2b2b] mt-6 p-5 rounded-xl">
          <Icon name="calendar" size={24} color="white" className="mr-2" />
          <TextInput
            placeholder="Date of Birth"
            placeholderTextColor="#aaa"
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
            className="ml-2 flex-1 text-white font-sans"
          />
        </View>
        <View className="flex-1 justify-end items-center">
          <TouchableOpacity
            className={`mt-auto w-full py-3 rounded-full mb-3  ${
              isFormValid() ? 'bg-blue-600' : 'bg-[#1e2c43]'
            }`}
            disabled={!isFormValid()}
            onPress={() => navigation.navigate('OnboardingScreen')}>
            <Text
              className={`text-center font-sans ${
                isFormValid() ? 'text-white' : 'text-gray-500'
              } font-sans text-lg`}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PersonalDetailsScreen;
