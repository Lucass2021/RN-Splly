import { FontAwesome } from "@expo/vector-icons"
import { SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import '../src/global.css'

import { cssInterop } from 'nativewind'
import { useEffect } from "react"

cssInterop(FontAwesome, {
    className: {
        target: 'style',
        nativeStyleToProp: { color: true },
    },
})

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const isLoggedIn = true

    useEffect(() => {
        SplashScreen.hideAsync()
    }, []);


    return (
        <>
            <StatusBar style='auto' />
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name='(app)' redirect={!isLoggedIn} options={{ headerShown: false }} />
                <Stack.Screen name='auth' redirect={isLoggedIn} options={{ headerShown: false }} />
            </Stack>
        </>
    )
}
