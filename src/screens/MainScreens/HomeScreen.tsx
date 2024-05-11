import React, { useEffect, useMemo, useState } from 'react';
import {
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import { HomeScreenStyles } from '../../styles/HomeScreenStyles';
import { colors } from '../../lib/utils/Colors';
import { TProps, TProduct } from '../../types';
import { useQuery } from '@tanstack/react-query';
import {
  ScalingDot,
  SlidingBorder,
  ExpandingDot,
  SlidingDot,
} from 'react-native-animated-pagination-dots';
import { ChatScreenStyles } from '../../styles/ChatScreenStyles';

interface ItemProps {
  key: string;
  name: string;
  imageUrl: string;
}

const HomeScreen = ({ navigation }: TProps): React.ReactElement => {
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);
  const [data, setData] = useState<TProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3002/products-public');
        const json = await response.json();
        setData(json.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const onPressItem = (user: number) => {
    navigation.navigate("Product Detail", { id: user });
    console.log(user);
  };

  const keyExtractor = React.useCallback((item: ItemProps) => item.key, []);

  return (
    <GestureHandlerRootView style={HomeScreenStyles.containerFull}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/sm1.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <View style={styles.column}>
            <Text style={styles.textBlack}>улица аделя кутуя, 82</Text>
            <Text style={styles.textGray}>Доставка 15 минут</Text>
          </View>
          <Text
            style={{ fontSize: 35 }}
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            🧑🏼‍🦱
          </Text>
        </View>
      </View>
      <BottomSheet snapPoints={snapPoints}>
        <ScrollView contentContainerStyle={HomeScreenStyles.contentContainer}>
          {/* <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={ChatScreenStyles.inputContainer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <TextInput
                style={ChatScreenStyles.input}
                placeholder="Type your message here..."
              // value={message}
              // onChangeText={setMessage}
              />
            </TouchableWithoutFeedback>
            <TouchableOpacity
              style={ChatScreenStyles.sendButton}>
              <Text style={ChatScreenStyles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView> */}
          <Text style={HomeScreenStyles.sheetHeadline}>Выгодная полка</Text>
          <View style={HomeScreenStyles.gridCard}>
            <>
              {data?.map((e, index) => (
                <View key={index}>
                  {isLoading ? (
                    <Text>Loading...</Text>
                  ) : (
                    <TouchableOpacity
                      onPress={() => onPressItem(e?.id)}
                    >
                      <Image
                        style={styles.imageSmall}
                        source={{ uri: e?.imageUrl }}
                      />
                    </TouchableOpacity>

                  )}
                </View>
              ))}
            </>
          </View>
        </ScrollView>
      </BottomSheet >

    </GestureHandlerRootView >
  );
};


export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    opacity: 50,
  },
  textContainer: {
    position: 'absolute',
    top: 90,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 4,
  },
  textGray: {
    color: colors.samokatGrey,
    fontSize: 20,
    fontWeight: '700',
    textShadowColor: 'rgba(0, 0, 0, 0.05)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  textBlack: {
    color: '#fff',
    fontSize: 23,
    fontWeight: '700',
    textShadowColor: 'rgba(0, 0, 0, 0.05)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  text: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  flatList: {
    flex: 1,
  },
  dotContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  dotStyles: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  constainerStyles: {
    top: 30,
  },
  itemContainer: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    marginTop: 40,
    marginHorizontal: 40,
    borderRadius: 20,
  },
  imageSmall: {
    margin: 5,
    padding: 5,
    height: 120,
    width: 120,
    borderRadius: 12
  },
});
