import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import { ProfileScreenStyle } from '../../styles/ProfileScreenStyles';
import { profileData } from '../../data';
import { TProps } from '../../types';




const ProfileScreen = ({ navigation }: TProps): React.ReactElement => {

  const openURL = (url: string) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  }



  return (
    <SafeAreaView style={ProfileScreenStyle.Container}>
      <ScrollView>
        <View style={ProfileScreenStyle.BoxNumber}>
          <Text style={ProfileScreenStyle.TextBig}>Как вас зовут?</Text>
          <Text style={ProfileScreenStyle.TextSmall}>+7 937 006 61 68</Text>
        </View>
        <View style={ProfileScreenStyle.BoxColumn}>
          {profileData?.map((data, index) => {
            return (
              <View style={ProfileScreenStyle.ProfileContainer} key={index}>
                <Text style={{ fontSize: 35 }}>{data?.icon}</Text>
                <Text style={ProfileScreenStyle.TextProfile}>{data?.text}</Text>
              </View>
            );
          })}
        </View>
        <TouchableOpacity style={ProfileScreenStyle.ButtonProfile}
          onPress={() => {
            navigation.navigate('Chat');
          }}>
          <Text>Связаться с нами</Text>
        </TouchableOpacity>
        <View style={ProfileScreenStyle.BoxBawah}>
          <Text
            style={ProfileScreenStyle.TextGrey}
            onPress={() => {
              navigation.navigate("Asking")
            }}
          >
            Ответы на вопросы
          </Text>
          <Text style={ProfileScreenStyle.TextGrey}
            onPress={() => {
              navigation.navigate("Chart")
            }}
          >Правила и соглашения</Text>
          <Text style={ProfileScreenStyle.TextGrey} onPress={() => {
            openURL("https://liderconsalt-team.ru/?utm_source=samokat.ru&utm_medium=organic&utm_campaign=organic")
          }}>
            Стать курьером-партнёром
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
