import React, { useMemo } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import { HomeScreenStyles } from '../../styles/HomeScreenStyles';
import { colors } from '../../styles/Colors';
import { TProps, TProduct } from '../../types';
import { useQuery } from '@tanstack/react-query';


const HomeScreen = ({ navigation }: TProps): React.ReactElement => {
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);


  const { data: products, isLoading } = useQuery<TProduct[]>({
    queryKey: ['products'],
    queryFn: () => fetch('https://fakestoreapi.com/products').then((resp) => resp.json()),
  })




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
          <Text style={{ fontSize: 35 }}
            onPress={() => {
              navigation.navigate("Profile")
            }}>🧑🏼‍🦱</Text>
        </View>
      </View>
      <BottomSheet snapPoints={snapPoints}>
        <ScrollView contentContainerStyle={HomeScreenStyles.contentContainer}>
          {/* {[...Array(5)].map((_, index) => (
            <View key={index}>
              <Text style={HomeScreenStyles.sheetHeadline}>Выгодная полка</Text>
              {products?.map((data, index) => {
                return (
                  <View style={HomeScreenStyles.gridCard} key={index}>
                    <View key={index} style={HomeScreenStyles.cardSkeleton}>
                      <Text>{data?.title}</Text>
                    </View>
                  </View>
                )
              })}
            </View>
          ))} */}
          {[...Array(5)].map((_, outerIndex) => (
            <View key={outerIndex}>
              <Text style={HomeScreenStyles.sheetHeadline}>Выгодная полка</Text>
              <View style={HomeScreenStyles.gridCard}>
                {[...Array(4)].map((_, innerIndex) => (
                  <View key={innerIndex} style={HomeScreenStyles.cardSkeleton}>
                    <Text>{products?.[outerIndex * 4 + innerIndex]?.title}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}

        </ScrollView>
      </BottomSheet>
    </GestureHandlerRootView>

  )
}

/*
 {[...Array(5)].map((_, index) => (
            <View key={index}>
              <Text style={HomeScreenStyles.sheetHeadline}>Выгодная полка</Text>
              <View style={HomeScreenStyles.gridCard}>
                {[...Array(4)].map((_, index) => (
                  <View key={index} style={HomeScreenStyles.cardSkeleton}></View>
                ))}
              </View>
            </View>
          ))} 
*/

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    opacity: 50
  },
  textContainer: {
    position: "absolute",
    top: 90,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  column: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 4
  },
  textGray: {
    color: colors.samokatGrey,
    fontSize: 20,
    fontWeight: "700",
    textShadowColor: 'rgba(0, 0, 0, 0.05)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  textBlack: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "700",
    textShadowColor: 'rgba(0, 0, 0, 0.05)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  }

});
