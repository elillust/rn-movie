import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";

const Nav = createBottomTabNavigator(); 
const Tabs = () => (
  <Nav.Navigator>
    <Nav.Screen name="Movies" component={Movies} />
    <Nav.Screen name="Tv" component={Tv} />
    <Nav.Screen name="Search" component={Search} />
  </Nav.Navigator>
);

export default Tabs;