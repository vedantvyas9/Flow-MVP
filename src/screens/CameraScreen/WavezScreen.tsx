import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Alert, Platform} from 'react-native';
import {
  Camera,
  useCameraDevices,
  CameraDevice,
} from 'react-native-vision-camera';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const requestCameraPermission = async () => {
  const result = await request(
    Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA,
  );
  if (result !== RESULTS.GRANTED) {
    Alert.alert(
      'Permission denied',
      'Camera access is needed for this feature.',
    );
  }
  return result === RESULTS.GRANTED;
};

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [flashMode, setFlashMode] = useState('off');
  const [cameraPosition, setCameraPosition] = useState<'front' | 'back'>(
    'back',
  );
  const devices = useCameraDevices();
  const device = devices[cameraPosition];

  useEffect(() => {
    const getCameraPermission = async () => {
      const granted = await requestCameraPermission();
      setHasPermission(granted);
    };
    getCameraPermission();
  }, []);

  const toggleFlash = () => {
    setFlashMode(prev => (prev === 'on' ? 'off' : 'on'));
  };

  if (!hasPermission) {
    return <Text className="text-center">Camera permission is required</Text>;
  }

  return (
    <View className="flex-1">
      {device && (
        <Camera
          style={{flex: 1}}
          device={device}
          isActive={true}
          //   flash={flashMode} // Flash mode toggles between 'on' and 'off'
        />
      )}

      {/* Top Bar */}
      <View className="absolute top-0 w-full flex-row justify-between p-4">
        <TouchableOpacity onPress={() => console.log('Close')}>
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
            onPress={() =>
              setCameraPosition(cameraPosition === 'back' ? 'front' : 'back')
            }>
            <Icon name="camera-reverse" size={40} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log('Take Picture')}
            className="bg-white p-4 rounded-full">
            <Icon name="camera" size={40} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleFlash}>
            <Icon
              name={flashMode === 'on' ? 'flash' : 'flash-off'}
              size={40}
              color="#fff"
            />
          </TouchableOpacity>
        </View>

        {/* Bottom Tabs */}
        <View className="flex-row justify-between w-full px-10">
          <Text className="text-white">Wavez</Text>
          <Text className="text-white">Splash</Text>
          <Text className="text-white">Spark</Text>
        </View>
      </View>
    </View>
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

const App = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default App;
