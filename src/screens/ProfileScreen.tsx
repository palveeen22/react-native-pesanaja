import React from 'react'
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { ProfileScreenStyle } from '../styles/ProfileScreenStyles'

const ProfileScreen = () => {
    return (
        <SafeAreaView style={ProfileScreenStyle.Container}>
            <ScrollView>
                <View style={ProfileScreenStyle.BoxNumber}>
                    <Text style={ProfileScreenStyle.TextBig}>Как вас зовут?</Text>
                    <Text style={ProfileScreenStyle.TextSmall}>+7 937 006 61 68</Text>
                </View>
                <View style={ProfileScreenStyle.BoxColumn}>
                    <View style={ProfileScreenStyle.ProfileContainer}>
                        <Text style={{ fontSize: 35 }}>🛒</Text>
                        <Text style={ProfileScreenStyle.TextProfile}>Заказы</Text>
                    </View>
                    <View style={ProfileScreenStyle.ProfileContainer}>
                        <Text style={{ fontSize: 35 }}>📍</Text>
                        <Text style={ProfileScreenStyle.TextProfile}>Адреса</Text>
                    </View>
                    <View style={ProfileScreenStyle.ProfileContainer}>
                        <Text style={{ fontSize: 35 }}>💸</Text>
                        <Text style={ProfileScreenStyle.TextProfile}>Бонусы</Text>
                    </View>
                    <View style={ProfileScreenStyle.ProfileContainer}>
                        <Text style={{ fontSize: 35 }}>💳</Text>
                        <Text style={ProfileScreenStyle.TextProfile}>Способы оплаты</Text>
                    </View>
                    <View style={ProfileScreenStyle.ProfileContainer}>
                        <Text style={{ fontSize: 35 }}>⚙️</Text>
                        <Text style={ProfileScreenStyle.TextProfile}>Настройки</Text>
                    </View>
                </View>
                <TouchableOpacity style={ProfileScreenStyle.ButtonProfile}>
                    <Text>Связаться с нами</Text>
                </TouchableOpacity>
                <View style={ProfileScreenStyle.BoxBawah}>
                    <Text style={ProfileScreenStyle.TextGrey}>Ответы на вопросы</Text>
                    <Text style={ProfileScreenStyle.TextGrey}>Правила и соглашения</Text>
                    <Text style={ProfileScreenStyle.TextGrey}>Стать курьером-партнёром</Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen