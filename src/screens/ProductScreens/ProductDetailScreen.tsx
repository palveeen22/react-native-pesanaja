import React, { useEffect, useMemo, useState } from 'react';
import {
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import { HomeScreenStyles } from '../../styles/HomeScreenStyles';
import { colors } from '../../lib/utils/Colors';
import { TDetail, TProduct } from '../../types';
import { useRoute } from '@react-navigation/native';
import { ProfileScreenStyle } from '../../styles/ProfileScreenStyles';

interface ItemProps {
    key: string;
    name: string;
    imageUrl: string;
}


type TProps = {
    id: number
    navigation: any;
};




const ProductDetailScreen = ({ navigation, id }: TProps): React.ReactElement => {
    const route = useRoute()
    const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);
    const [dataDetail, setDataDetail] = useState<TDetail>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const paramId = route?.params?.id

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3002/products-public/${paramId}`);
                const json = await response.json();
                setDataDetail(json.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <GestureHandlerRootView style={HomeScreenStyles.containerFull}>
            <View style={styles.container}>
                <Image
                    source={{ uri: dataDetail?.imageUrl }}
                    style={styles.image}
                />
            </View>
            <BottomSheet snapPoints={snapPoints}>
                <ScrollView contentContainerStyle={styles.BottomContainer}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignContent: 'center', padding: 5, gap: 8 }}>
                        <Text style={{ fontSize: 25, fontWeight: 700, color: colors.dark }}>{dataDetail?.name}</Text>
                        <Text style={{ fontSize: 25, fontWeight: 700, color: colors.samokat }}> {dataDetail?.berat} g</Text>
                        <Text style={{ fontSize: 14, fontWeight: 500, color: colors.samokatGrey, textAlign: 'justify' }}>{dataDetail?.description}</Text>
                    </View>
                </ScrollView>
            </BottomSheet >

        </GestureHandlerRootView >
    );
};


export default ProductDetailScreen;

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
    BottomContainer: {
        alignItems: 'flex-start',
        minHeight: '100%',
        padding: 15
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
