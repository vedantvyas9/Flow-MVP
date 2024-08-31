import React, {ReactNode} from 'react';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  children: ReactNode;
}

const BaseRegisterScreen: React.FC<HeaderProps> = ({children}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-[#161616]">
      <View className="flex-1 p-3">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View className="bg-[#2b2b2b] w-14 rounded-full p-2 mt-5">
            <Icon name="chevron-left" size={35} color="#fff" />
          </View>
        </TouchableOpacity>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default BaseRegisterScreen;
