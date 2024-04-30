import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { colors } from '../../styles/Colors'
import { KeyboardProvider } from "react-native-keyboard-controller";


const ChatScreen = () => {

  const [message, setMessage] = useState<string>('');

  const handleSendMessage = () => {
    // Handle sending the message
    console.log("Message sent:", message);
    // Reset the message input field after sending
    setMessage('');
  };


  return (
    <KeyboardProvider>
      <SafeAreaView style={styles.container}>
        <View style={{
          backgroundColor: colors.samokat,
          padding: 10,
          marginLeft: '45%',
          marginTop: 5,
          marginRight: "5%",
          maxWidth: '50%',
          alignSelf: 'flex-end',
          borderRadius: 20,
          // borderRadius: 5,
          //marginBottom: 15,
          // maxWidth: 500,
        }} >
          <Text style={{ fontSize: 16, color: "#fff", }}>Здравствуйте!</Text>
          <View style={styles.rightArrow}></View>
          <View style={styles.rightArrowOverlap}></View>
        </View>
        <View style={{
          backgroundColor: "#dedede",
          padding: 10,
          marginTop: 5,
          marginLeft: "5%",
          maxWidth: '50%',
          alignSelf: 'flex-start',
          borderRadius: 20,
          // borderRadius: 5,
          //maxWidth: 500,
          //padding: 14,
          //alignItems:"center",
        }}>
          <Text style={{ fontSize: 16, color: "#000", justifyContent: "center" }}>Pesanaja, 15 menit ke rumah....</Text>
          <View style={styles.leftArrow}>
          </View>
          <View style={styles.leftArrowOverlap}></View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your message here..."
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView >
    </KeyboardProvider>

  )
}

export default ChatScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  /*Arrow head for recevied messages*/
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
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: colors.samokat,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})