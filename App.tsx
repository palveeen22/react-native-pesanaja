import { NavigationContainer } from "@react-navigation/native";
import StackHolder from './src/stacks/Home';


const App = (): React.ReactElement => {

  return (
    <>
      <NavigationContainer>
        <StackHolder />
      </NavigationContainer>
    </>
  );
}

export default App;