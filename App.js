
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './Navigation'

import { Provider } from 'react-redux';
import { store } from './src/store';


const App = () => {


  return (
    <Provider store={store}>
    <Navigation/>
    </Provider>
    
  );
};

export default App;