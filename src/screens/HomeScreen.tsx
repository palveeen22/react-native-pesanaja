import React, { useMemo } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { HomeScreenStyles } from '../styles/HomeScreenStyles';

type TProps = {
    navigation: any
}

const HomeScreen = ({ navigation }: TProps): React.ReactElement => {
    const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

    return (
        <GestureHandlerRootView style={HomeScreenStyles.containerFull}>
            <SafeAreaView>
                <View style={HomeScreenStyles.padding}>
                    <View style={HomeScreenStyles.boxJustify}>
                        <View style={HomeScreenStyles.column}>
                            <Text style={HomeScreenStyles.textBlack}
                                onPress={() => {
                                    navigation.navigate("Product")
                                }} >улица аделя кутуя, 82</Text>
                            <Text style={HomeScreenStyles.textGray}
                                onPress={() => {
                                    navigation.navigate("Carousel");
                                }}
                            >Доставка 15 минут</Text>
                        </View>
                        <Text style={{ fontSize: 35 }}
                            onPress={() => {
                                navigation.navigate("Profile");
                            }}>🧑🏼‍🦱</Text>
                    </View>
                </View>
            </SafeAreaView>
            <BottomSheet snapPoints={snapPoints}>
                <ScrollView contentContainerStyle={HomeScreenStyles.contentContainer}>
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
                </ScrollView>
            </BottomSheet>
        </GestureHandlerRootView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        width: "auto",
        height: "auto",
    },
});