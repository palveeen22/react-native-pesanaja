import React from 'react'
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { ProfileScreenStyle } from '../styles/ProfileScreenStyles'
import { profileData, textProfile } from '../data'


const ProfileScreen = (): React.ReactElement => {
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
                        )
                    })}

                </View>
                <TouchableOpacity style={ProfileScreenStyle.ButtonProfile}>
                    <Text>Связаться с нами</Text>
                </TouchableOpacity>
                <View style={ProfileScreenStyle.BoxBawah}>
                    {textProfile?.map((data, index) => {
                        return (
                            <Text style={ProfileScreenStyle.TextGrey} key={index}>{data}</Text>
                        )
                    })}
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen