import { StyleSheet } from "react-native";

export const HomeScreenStyles = StyleSheet.create({
    containerFull: {
        flex: 1,
        backgroundColor: "#141414"
    },
    imageContainer: {
        width: "80%",
        height: "80%"
    },
    container2: {
        flex: 1,
        padding: 24,
        backgroundColor: '#141414',
    },
    contentContainer: {
        // flex: 1,
        alignItems: 'center',
        minHeight: '100%',
    },
    padding: {
        padding: 14,
    },
    boxJustify: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
    },
    imageBox: {
        position: "absolute",
    },
    column: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 4
    },
    viewBox: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textGray: {
        color: "#808080",
        fontSize: 16,
        fontWeight: "700",
    },
    textBlack: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "600",
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    bottomSheet: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sheetHeadline: {
        textAlign: "left",
        fontSize: 18,
        fontWeight: '600',
        padding: 10
    },
    gridCard: {
        // flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    cardSkeleton: {
        backgroundColor: "#808080",
        margin: 5,
        padding: 5,
        height: 120,
        width: 120,
        borderRadius: 12
    },
});