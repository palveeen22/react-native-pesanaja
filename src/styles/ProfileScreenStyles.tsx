import { StyleSheet } from "react-native";
import { colors } from "../lib/utils/Colors";


export const ProfileScreenStyle = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: colors.darkWhite,
    },
    BoxNumber: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    TextBig: {
        color: colors.samokatGrey,
        fontSize: 20,
        fontWeight: "700",
    },
    TextSmall: {
        color: colors.samokatGrey,
        fontSize: 14,
        fontWeight: "500",
    },
    BoxColumn: {
        padding: 4,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        gap: 10,
    },
    ProfileContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.grey,
    },
    TextProfile: {
        alignSelf: "center",
        alignContent: "center",
        textAlign: "center",
        color: colors.black,
        fontSize: 20,
        fontWeight: "700",
    },
    ButtonProfile: {
        width: "70%",
        paddingVertical: 12,
        borderRadius: 20,
        backgroundColor: colors.grey,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        margin: 25,
    },
    BoxBawah: {
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        gap: 15,
    },
    TextGrey: {
        textAlign: "center",
        color: colors.samokatGrey,
        fontSize: 15,
        fontWeight: "500",
    },
})



// ImageProfile: {
//     padding: 4,
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center"
// },
// WhiteCircle: {
//     padding: 8,
//     borderRadius: 15,
//     borderWidth: 2,
//     borderColor: colors.black,
//     justifyContent: "center",
//     alignItems: "center",
// },
// TextWhite: {
//     color: colors.black,
//     fontSize: 18,
//     fontWeight: 400,
// },
