import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

function AppScreen({children, style}) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})

export default AppScreen;