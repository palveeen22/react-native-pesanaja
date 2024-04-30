import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProductScreen from '../screens/ProductScreen';

const Stack = createStackNavigator();

const StackHolder = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ headerShown: false }}
            // options={{ headerTitle: '', headerTransparent: true }}
            />
            <Stack.Screen
                name="Product"
                component={ProductScreen}
                options={{ headerShown: false }}
            // options={{ headerTitle: '', headerTransparent: true }}
            />
        </Stack.Navigator>
    );
}

export default StackHolder;