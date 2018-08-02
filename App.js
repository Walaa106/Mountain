import { createStackNavigator } from 'react-navigation';
import Main from './Components/Main'
import Dashboard from './Components/Dashboard';

const App = createStackNavigator({
  Home: { screen: Main },
  Dashboard: { screen: Dashboard },
});

export default App;

