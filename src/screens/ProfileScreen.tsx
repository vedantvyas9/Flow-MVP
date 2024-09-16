import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // adjust icon pack if needed

const ProfileScreen: React.FC = () => {
  return (
    <ScrollView className="flex-1 bg-[#161616]">
      <SafeAreaView>
        {/* Header Section */}
        <View className="flex-row justify-between items-center px-4 py-4">
          <Text className="ml-2 text-white text-lg font-sans">flow_user</Text>

          <TouchableOpacity onPress={() => console.log('settings clicked')}>
            <Icon name="settings-sharp" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Profile Section */}
        <View className="items-center">
          {/* Background Theme Image */}
          <Image
            source={require('../assets/images/luffy-theme-image.jpg')}
            className="w-full h-48"
            resizeMode="cover"
          />

          <View className="relative items-center -mt-32">
            {/* Profile Picture */}
            <View className="relative items-center">
              {/* Followers Button (left of the profile picture) */}
              <TouchableOpacity className="absolute left-2 -translate-x-full top-1/2 -translate-y-1/2 bg-gray-800 px-4 py-2 rounded-lg z-0">
                <Text className="text-white text-center font-sans">
                  Followers
                </Text>
              </TouchableOpacity>

              {/* Following Button (right of the profile picture) */}
              <TouchableOpacity className="absolute right-2 translate-x-full top-1/2 -translate-y-1/2 bg-gray-800 px-4 py-2 rounded-lg z-0">
                <Text className="text-white text-center font-sans">
                  Following
                </Text>
              </TouchableOpacity>

              {/* Profile Picture */}
              <Image
                source={require('../assets/images/luffy-profile.jpg')}
                className="w-24 h-24 rounded-full border-2 border-black"
              />
            </View>
          </View>
        </View>

        <View className="items-center mt-9">
          {/* Name and Bio */}
          <Text className="mt-4 text-white text-xl font-sans">
            Fedrick Nishant
          </Text>
          <Text className="text-gray-400 text-center px-4 font-sans">
            This is a short bio of the user, displayed here.
          </Text>

          {/* Horizontal Line */}
          <View className="w-full border-b border-gray-600 my-4" />

          {/* Follow and Message Buttons */}
          <View className="flex-row justify-center mb-4">
            <TouchableOpacity className="bg-blue-600 px-6 py-2 rounded-lg mx-2">
              <Text className="text-white text-center">Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-800 px-6 py-2 rounded-lg mx-2">
              <Text className="text-white text-center">Message</Text>
            </TouchableOpacity>
          </View>

          {/* Tab Navigation */}
          <View className="w-full border-t border-gray-600">
            <View className="flex-row justify-around py-2">
              <TouchableOpacity
                onPress={() => {
                  /* Navigate to images tab */
                }}>
                <Icon name="grid-outline" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="videocam-outline" size={24} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="bookmark-outline" size={24} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="people-outline" size={24} color="gray" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon
                  name="ellipsis-horizontal-outline"
                  size={24}
                  color="gray"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Grid of Images (Placeholder) */}
          <View className="mt-4 px-4">
            <View className="flex-row flex-wrap justify-between">
              {[...Array(20)].map((_, index) => (
                <View key={index} className="w-1/3 p-1">
                  <View className="bg-gray-800 h-24 items-center">
                    <Image
                      source={require('../assets/images/luffy-profile.jpg')}
                      className="w-24 h-24 border-2 border-black"
                      resizeMode="cover"
                    />
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ProfileScreen;
