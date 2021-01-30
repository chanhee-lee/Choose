import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (id, obj) => {
    if (id && obj) {
        try {
            await AsyncStorage.setItem(id, JSON.stringify(obj));
        } catch (error) {
            console.log("Failed to store: ", error.message);
        }
    }
}

export const getData = async (id) => {
    if (id) {
        try {
            const data = await AsyncStorage.getItem(id);
            return data;
        } catch (error) {
            console.log("Failed to get: ", error.message);
        }
    }
}