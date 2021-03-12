import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import AppColors from '../config/AppColors';

function AppText ({children, color="primaryColor"}) {
    return (
        <Text style={[styles.text, {color:AppColors[color]}]}> {children} </Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 25,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir-Roman',
        color: AppColors.cactus,
    },
})

export default AppText;
