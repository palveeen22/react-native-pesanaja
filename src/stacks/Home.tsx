import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/MainScreens/HomeScreen';
import ProfileScreen from '../screens/MainScreens/ProfileScreen';
import ProductScreen from '../screens/MainScreens/ProductScreen';
import ChatScreen from '../screens/Profile/ChatScreen';
import ChartScreen from '../screens/Profile/ChartScreen';
import ProductDetailScreen from '../screens/ProductScreens/ProductDetailScreen';
import ChatBot from '../screens/Profile/ChatBot';

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
            <Stack.Screen
                name="Chat"
                component={ChatScreen}
                // options={{ headerShown: false }}
                options={{ headerTitle: '', headerTransparent: true }}
            />
            <Stack.Screen
                name="Chart"
                component={ChartScreen}
                // options={{ headerShown: false }}
                options={{ headerTitle: '', headerTransparent: true }}
            />
            <Stack.Screen
                name="Product Detail"
                component={ProductDetailScreen}
                // options={{ headerShown: false }}
                options={{ headerTitle: '', headerTransparent: true }}
            />
            <Stack.Screen
                name="Asking"
                component={ChatBot}
            // options={{ headerShown: false }}
            // options={{ headerTitle: '', headerTransparent: true }}
            />
        </Stack.Navigator>
    );
}

export default StackHolder;