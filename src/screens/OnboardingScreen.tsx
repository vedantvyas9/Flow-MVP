import React, {useState, useRef} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {createScreenProps} from '../navigation/utils';

const OnboardingScreenProps = createScreenProps('OnboardingScreen');

const {width} = Dimensions.get('window');

const slides = [
  {
    id: '1',
    uri: require('../assets/images/onboarding/1.jpg'),
    text: 'Welcome to the App',
    title: 'Wavez',
  },
  {
    id: '2',
    uri: require('../assets/images/onboarding/2.jpg'),
    text: 'Discover New Features',
    title: 'Storyboard',
  },
  {
    id: '3',
    uri: require('../assets/images/onboarding/3.jpg'),
    text: 'Stay Connected',
    title: 'Memory verse',
  },
  {
    id: '4',
    uri: require('../assets/images/onboarding/4.jpg'),
    text: 'Get Notified',
    title: 'Itachi',
  },
  {
    id: '5',
    uri: require('../assets/images/onboarding/5.jpg'),
    text: "Let's Get Started",
    title: 'Uchiha',
  },
];

const OnboardingScreen: React.FC<typeof OnboardingScreenProps> = ({
  navigation,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleSkip = () => {
    setCurrentSlide(slides.length - 1);
    flatListRef.current?.scrollToIndex({
      index: slides.length - 1,
      animated: true,
    });
  };

  const renderItem = ({item}: {item: (typeof slides)[0]}) => (
    <View className="flex-1 justify-center items-center">
      <Image
        source={item.uri}
        //@ts-ignore
        // eslint-disable-next-line react-native/no-inline-styles
        style={{width: width, height: '75%'}}
        resizeMode="contain"
      />
      <Text className="text-white text-2xl font-[poppins-semibold] mt-4">
        {item.text}
      </Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-[#161616]">
      <View className="flex-1 mt-4">
        <View className="flex justify-between pl-3 pr-3 flex-row mt-4">
          <Text className="text-white text-3xl font-[poppins-semibold] ">
            {currentSlide >= 0 ? slides[currentSlide]?.title : ''}
          </Text>

          {currentSlide < slides.length - 1 ? (
            <TouchableOpacity onPress={handleSkip}>
              <Text className="text-gray-500 text-lg font-[poppins-semibold] mt-1 mb-1 ml-2 mr-2">
                Skip
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              className="bg-blue-500 rounded-full w-fit"
              onPress={() => {
                navigation.replace('TabNavigator');
              }}>
              <Text className="text-center text-white font-[poppins-semibold] text-lg mt-1 mb-1 ml-2 mr-2">
                Next
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <FlatList
          data={slides}
          ref={flatListRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={e => {
            const slideIndex = Math.floor(
              e.nativeEvent.contentOffset.x / width,
            );
            if (slideIndex >= 0) {
              setCurrentSlide(slideIndex);
            }
          }}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          className="flex-1"
        />
      </View>
      <View className="absolute bottom-8 w-full flex-row justify-center">
        {slides.map((_, index) => (
          <View
            key={index}
            className={`h-4 w-4 mx-1 justify-center items-center rounded-full ${
              currentSlide === index ? 'border-blue-500 border-2' : ''
            }`}>
            <View
              className={`h-2 w-2 rounded-full ${
                currentSlide === index ? 'bg-blue-500' : 'bg-gray-500'
              }`}
            />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
