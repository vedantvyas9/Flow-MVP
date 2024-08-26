import {RootStackParamList} from './RootNavigator';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export function createScreenProps<Screen extends keyof RootStackParamList>(
  _screenName: Screen,
) {
  type NavigationProp = NativeStackNavigationProp<RootStackParamList, Screen>;
  type RoutePropType = RouteProp<RootStackParamList, Screen>;

  type Props = {
    navigation: NavigationProp;
    route: RoutePropType;
  };

  return {} as Props; // This is just a placeholder. You can modify the return type as needed.
}
