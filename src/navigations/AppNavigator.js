import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../screens/Home'
import Cources from "../screens/Courses"
const AppNavigator = createStackNavigator({
    Home:{screen:Home},
   Cources:{screen:Cources},
    /* Xd:{screen:Xd},
    VideoPage:{screen:VideoPage}*/

},
{
    defaultNavigationOptions:{headerShown:false}
}
)
export default createAppContainer(AppNavigator);