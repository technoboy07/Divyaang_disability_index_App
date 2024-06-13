import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mainpage from './Mainscreen';
import CalculatorPage from './CalculatorPage';
import SecondScreen from './SecondScreen';
import { RootStackParamList } from './types'; // Import the type

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Mainpage">
        <Stack.Screen name="Mainpage" component={Mainpage} />
        <Stack.Screen name="Second" component={SecondScreen} />
        <Stack.Screen name="Calculator" component={CalculatorPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
