import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  FlatList,
} from 'react-native';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { ChatScreenStyles } from '../../styles/ChatScreenStyles';

type TMessage = {
  sender: string;
  content: string;
};

const chatDummy: TMessage[] = [
  { sender: 'user', content: 'Hello! How are you?' },
  {
    sender: 'bot',
    content: "Hi there! I'm doing well, thank you. How can I assist you today?",
  },
  { sender: 'user', content: 'I have a question about JavaScript.' },
  {
    sender: 'bot',
    content: "Sure thing! Feel free to ask, and I'll do my best to help you.",
  },
  {
    sender: 'user',
    content: 'How can I fetch data from an API using TypeScript?',
  },
  {
    sender: 'bot',
    content:
      "To fetch data from an API in TypeScript, you can use the 'fetch' function, like this...",
  },
];

const ChatScreen = () => {
  const [messages, setMessages] = useState<TMessage[]>(chatDummy);
  const [message, setMessage] = useState<string>('');

  const handleSendMessage = () => {
    const newMessage: TMessage = { sender: 'user', content: message };
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <KeyboardProvider>
      <SafeAreaView style={ChatScreenStyles.container}>
        <View style={ChatScreenStyles.messageContainer}>
          {/* <View style={ChatScreenStyles.boxSendChat} >
            <Text style={ChatScreenStyles.textSend}>Hallo! Saya ingin bertanya</Text>
            <View style={ChatScreenStyles.rightArrow}></View>
            <View style={ChatScreenStyles.rightArrowOverlap}></View>
          </View>
          <View style={ChatScreenStyles.boxReceivedChat}>
            <Text style={ChatScreenStyles.textReceived}>Pesanaja, 15 menit ke rumah....</Text>
            <View style={ChatScreenStyles.leftArrow}>
            </View>
            <View style={ChatScreenStyles.leftArrowOverlap}></View>
          </View> */}
          <FlatList
            data={messages}
            renderItem={({ item, index }) => {
              if (item.sender === 'user') {
                return (
                  <View style={ChatScreenStyles.boxSendChat} key={index}>
                    <Text style={ChatScreenStyles.textSend}>
                      {item.content}
                    </Text>
                    <View style={ChatScreenStyles.rightArrow}></View>
                    <View style={ChatScreenStyles.rightArrowOverlap}></View>
                  </View>
                );
              } else {
                return (
                  <View style={ChatScreenStyles.boxReceivedChat} key={index}>
                    <Text style={ChatScreenStyles.textReceived}>
                      {item.content}
                    </Text>
                    <View style={ChatScreenStyles.leftArrow}></View>
                    <View style={ChatScreenStyles.leftArrowOverlap}></View>
                  </View>
                );
              }
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={ChatScreenStyles.inputContainer}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <TextInput
              style={ChatScreenStyles.input}
              placeholder="Type your message here..."
              value={message}
              onChangeText={setMessage}
            />
          </TouchableWithoutFeedback>
          <TouchableOpacity
            style={ChatScreenStyles.sendButton}
            onPress={handleSendMessage}>
            <Text style={ChatScreenStyles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </KeyboardProvider>
  );
};

export default ChatScreen;
