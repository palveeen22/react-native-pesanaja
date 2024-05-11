import { StyleSheet } from "react-native";
import { colors } from "../lib/utils/Colors";

export const ChatScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    messageContainer: {
        flex: 1,
        paddingHorizontal: 2,
        paddingBottom: 2,
    },
    messageBubble: {
        maxWidth: '50%',
        borderRadius: 20,
        marginBottom: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    boxSendChat: {
        backgroundColor: colors.samokat,
        padding: 10,
        marginLeft: '45%',
        marginTop: 5,
        marginRight: "5%",
        maxWidth: '50%',
        alignSelf: 'flex-end',
        borderRadius: 20,
    },
    textSend: {
        fontSize: 16,
        color: "#fff",
    },
    boxReceivedChat: {
        backgroundColor: "#dedede",
        padding: 10,
        marginTop: 5,
        marginLeft: "5%",
        maxWidth: '50%',
        alignSelf: 'flex-start',
        borderRadius: 20,
    },
    textReceived: {
        fontSize: 16,
        color: "#000",
        justifyContent: "center"
    },
    sentMessage: {
        alignSelf: 'flex-end',
        backgroundColor: colors.samokat,
    },
    receivedMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#dedede',
    },
    messageText: {
        fontSize: 16,
        color: '#fff',
    },
    rightArrow: {
        position: "absolute",
        backgroundColor: colors.samokat,
        width: 20,
        height: 25,
        bottom: 0,
        borderBottomLeftRadius: 25,
        right: -10
    },
    rightArrowOverlap: {
        position: "absolute",
        backgroundColor: "#eeeeee",
        width: 20,
        height: 35,
        bottom: -6,
        borderBottomLeftRadius: 18,
        right: -20
    },
    leftArrow: {
        position: "absolute",
        backgroundColor: "#dedede",
        width: 20,
        height: 25,
        bottom: 0,
        borderBottomRightRadius: 25,
        left: -10
    },
    leftArrowOverlap: {
        position: "absolute",
        backgroundColor: "#eeeeee",
        width: 20,
        height: 35,
        bottom: -6,
        borderBottomRightRadius: 18,
        left: -20
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    input: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 12,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: colors.samokat,
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 12,
    },
    sendButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});