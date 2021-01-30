import React, { useState } from 'react';
import { AsyncStorage } from 'react-native-async-storage/async-storage';

export const storeData = async (id, obj) => {
    try {
        await AsyncStorage.setItem(id, obj);
    } catch (error) {
        console.log(error.message);
    }
}