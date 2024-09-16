import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Linking,
} from 'react-native';
import {Camera} from 'react-native-vision-camera';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import type {CameraPermissionStatus} from 'react-native-vision-camera';

export type CameraTabNavigatorParamList = {
  CameraScreen: undefined;
};

type NavigationProp = BottomTabNavigationProp<
  CameraTabNavigatorParamList,
  'CameraScreen'
>;

type CameraScreenProps = {
  navigation: NavigationProp;
};

const Tab = createBottomTabNavigator();

const CameraScreen: React.FC<CameraScreenProps> = ({navigation}) => {
  const cameraPermission = Camera.getCameraPermissionStatus();
  const [cameraPermissionStatus, setCameraPermissionStatus] =
    useState<CameraPermissionStatus>(cameraPermission);

  const requestCameraPermission = useCallback(async () => {
    const permission = await Camera.requestCameraPermission();
    if (permission === 'denied') {
      await Linking.openSettings();
    }
    setCameraPermissionStatus(permission);
  }, []);

  const requestPermissions = async () => {
    await requestCameraPermission();
  };

  useEffect(() => {
    if (cameraPermissionStatus === 'granted') {
      console.log('All permissions granted');
    } else {
      navigation.goBack();
    }
  }, [cameraPermissionStatus, navigation]);

  useEffect(() => {
    if (cameraPermissionStatus !== 'granted') {
      requestPermissions();
    }
  });

  return (
    <SafeAreaView className="flex-1">
      {/* {device && (
        <Camera
          style={{flex: 1}}
          device={device}
          isActive={true}
          flash={flashMode} // Flash mode toggles between 'on' and 'off'
        />
      )} */}

      {/* Top Bar */}
      <View className="absolute top-0 w-full flex-row justify-between p-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="close" size={30} color="#fff" />
        </TouchableOpacity>
        <Text className="text-white text-xl">Camera</Text>
        <TouchableOpacity onPress={() => console.log('Open Settings')}>
          <Icon name="settings" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Bottom Controls */}
      <View className="absolute bottom-0 w-full items-center pb-10">
        <View className="flex-row justify-around w-4/5 mb-8">
          <TouchableOpacity
            onPress={() => {
              // setCameraPosition(cameraPosition === 'back' ? 'front' : 'back');
            }}>
            <Icon name="camera-reverse" size={40} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log('Take Picture')}
            className="bg-white p-4 rounded-full">
            <Icon name="camera" size={40} color="#000" />
          </TouchableOpacity>

          {/* <TouchableOpacity onPress={toggleFlash}>
            <Icon
              name={flashMode === 'on' ? 'flash' : 'flash-off'}
              size={40}
              color="#fff"
            />
          </TouchableOpacity> */}
        </View>

        {/* Bottom Tabs */}
        <View className="flex-row justify-between w-full px-10">
          <Text className="text-white">Wavez</Text>
          <Text className="text-white">Splash</Text>
          <Text className="text-white">Spark</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const WavezScreen = () => (
  <View className="flex-1 justify-center items-center">
    <Text>Wavez Screen</Text>
  </View>
);
const SplashScreen = () => (
  <View className="flex-1 justify-center items-center">
    <Text>Splash Screen</Text>
  </View>
);
const SparkScreen = () => (
  <View className="flex-1 justify-center items-center">
    <Text>Spark Screen</Text>
  </View>
);

const CameraTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Wavez" component={WavezScreen} />
      <Tab.Screen name="Splash" component={SplashScreen} />
      <Tab.Screen name="Spark" component={SparkScreen} />
    </Tab.Navigator>
  );
};

export default CameraTabNavigator;
