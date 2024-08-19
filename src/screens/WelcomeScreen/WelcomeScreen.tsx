import React from 'react';
import {Text, View, Button} from 'react-native';

function WelcomScreen({navigation}): React.JSX.Element {
  return (
    <View className="bg-blue-500">
      <Text className="p-2 self-center text-white">
        Configured with NativeWind
      </Text>
      <Button
        title="Go to RegisterScreen"
        onPress={() => navigation.navigate('RegisterScreen')}
      />
    </View>
  );
}

export default WelcomScreen;
