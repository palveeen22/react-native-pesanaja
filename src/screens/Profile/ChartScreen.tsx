import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Animated,
    FlatList,
    useWindowDimensions,
    SafeAreaView,
} from 'react-native';
import {
    ScalingDot,
    SlidingBorder,
    ExpandingDot,
    SlidingDot,
} from 'react-native-animated-pagination-dots';

interface ItemProps {
    key: string;
    title: string;
    description: string;
}

const INTRO_DATA = [
    {
        key: '1',
        title: 'App showcase ✨',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        key: '2',
        title: 'Introduction screen 🎉',
        description:
            "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
    },
    {
        key: '3',
        title: 'And can be anything 🎈',
        description:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ',
    },
    {
        key: '4',
        title: 'And can be anything 🎈',
        description:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ',
    },
    {
        key: '5',
        title: 'And can be anything 🎈',
        description:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ',
    },
    {
        key: '6',
        title: 'And can be anything 🎈',
        description:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ',
    },
];

const ChartScreen = () => {
    const { width } = useWindowDimensions();
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const renderItem = React.useCallback(
        ({ item }: { item: ItemProps }) => {
            return (
                <View style={[styles.itemContainer, { width: width - 80 }]}>
                    <Text>{item.title}</Text>
                    <Animated.Text>{item.description}</Animated.Text>
                </View>
            );
        },
        [width],
    );
    const keyExtractor = React.useCallback((item: ItemProps) => item.key, []);
    return (
        <SafeAreaView style={[styles.container]}>
            <View style={[styles.container]}>
                <FlatList
                    data={INTRO_DATA}
                    keyExtractor={keyExtractor}
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        {
                            useNativeDriver: false,
                        },
                    )}
                    style={styles.flatList}
                    pagingEnabled
                    horizontal
                    decelerationRate={'normal'}
                    scrollEventThrottle={16}
                    renderItem={renderItem}
                />
                <View style={styles.text}>
                    <View style={styles.dotContainer}>
                        <ExpandingDot
                            data={INTRO_DATA}
                            expandingDotWidth={30}
                            scrollX={scrollX}
                            inActiveDotColor={'#347af0'}
                            activeDotColor={'#347af0'}
                            inActiveDotOpacity={0.5}
                            dotStyle={styles.dotStyles}
                            containerStyle={styles.constainerStyles}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7e7e7',
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
});

export default ChartScreen;