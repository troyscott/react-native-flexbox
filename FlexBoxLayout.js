import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


const FlexBoxLayout = () => (
    <View style={styles.main}>
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
    </View>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'

    },
    item: {
        backgroundColor: 'lightgoldenrodyellow',
        borderWidth: 1,
        borderColor: 'goldenrod',
        height: 150,
        width: 150
    }

});

module.exports = FlexBoxLayout;
