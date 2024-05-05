import { NavigationContainer } from "@react-navigation/native";
import StackHolder from './src/stacks/Home';
import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from '@tanstack/react-query'
import { AppStateStatus, Platform } from "react-native";


function onAppStateChange(status: AppStateStatus) {
  // React Query already supports in web browser refetch on window focus by default
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active')
  }
}

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
})





const App = (): React.ReactElement => {

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <StackHolder />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;