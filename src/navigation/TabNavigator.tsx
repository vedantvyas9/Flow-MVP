import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BlurView} from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({name, focused}: {name: string; focused: boolean}) => {
  if (name === 'home') {
    return (
      <MaterialCommunityIcons
        name={'home-outline'}
        size={24}
        color={focused ? '#3b82f6' : '#8c8c8c'}
      />
    );
  }
  if (name === 'brain') {
    return (
      <MaterialIcons
        name={'podcasts'}
        size={24}
        color={focused ? '#3b82f6' : '#8c8c8c'}
      />
    );
  }
  if (name === 'memory') {
    return (
      <MaterialIcons
        name={'psychology'}
        size={24}
        color={focused ? '#3b82f6' : '#8c8c8c'}
      />
    );
  }
  if (name === 'profile') {
    return (
      <FontAwesome6
        name={'user'}
        size={21}
        color={focused ? '#3b82f6' : '#8c8c8c'}
      />
    );
  }
};

// TODO: Replace all the screens to actual screens.
const HomeScreen = () => (
  <View className="flex-1 justify-center items-center bg-[#161616]">
    <Text className="text-white">Home</Text>
  </View>
);

const BrainScreen = () => (
  <View className="flex-1 justify-center items-center bg-[#161616]">
    <Text className="text-white">Brain</Text>
  </View>
);

const MemoryScreen = () => (
  <View className="flex-1 justify-center items-center bg-[#161616]">
    <Text className="text-white">Memory</Text>
  </View>
);

const EmptyPlaceHolder = () => (
  <View>{/* Required to evenly place the icons in the tabs */}</View>
);

const CustomTabBar = ({state, descriptors, navigation}: any) => {
  const handleCreateClick = () => {
    navigation.navigate('CameraTabNavigator');
  };

  return (
    <View>
      <View className="absolute bottom-0 left-1 right-1 p-2 ml-2 mr-2 bg-slate-50/5 rounded-full overflow-hidden border border-gray-600">
        {/* BlurView for blurred tab bar background */}
        <BlurView
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          blurType="dark"
          blurAmount={1}
          reducedTransparencyFallbackColor="gray"
        />
        <View className="h-16 rounded-t-2xl relative justify-around flex-row items-center">
          {state.routes.map((route: any, index: number) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            return (
              <TouchableOpacity
                key={index}
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                onPress={onPress}
                className="flex items-center">
                <TabBarIcon name={label.toLowerCase()} focused={isFocused} />
                {isFocused && (
                  <View className="w-full h-0.5 bg-blue-500 mt-1.5" />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <TouchableOpacity onPress={handleCreateClick}>
        <View className="absolute bottom-12 left-[51%] transform -translate-x-1/2 overflow-hidden rounded-full w-20 h-20 justify-center items-center">
          {/* Gradient Border */}
          <LinearGradient
            colors={['#cff6fb', '#060d5a']}
            start={{x: 0, y: 1}}
            end={{x: 0, y: 0}}>
            {/* Gray Circle */}
            <View className="bg-[#252525] w-16 h-16 rounded-full justify-center items-center border-2 border-transparent m-4" />
          </LinearGradient>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const TabNavigator = () => (
  <Tab.Navigator screenOptions={{headerShown: false}} tabBar={CustomTabBar}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Brain" component={BrainScreen} />
    <Tab.Screen name="EmptyPlaceHolder" component={EmptyPlaceHolder} />
    <Tab.Screen name="Memory" component={MemoryScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
