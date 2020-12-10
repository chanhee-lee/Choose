import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Alert, TouchableHighlight, Modal, Keyboard, TextInput, } from 'react-native';

const VendingKeypad = ({ modalVisible, setModalVisible, handleVendingInput }) => {
    const onChangeText = (event) => {
        const {text} = event.nativeEvent;
        setValue(text);
    }

    const [value, setValue] = React.useState('');
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible.modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Enter Two Digits For Vending Machine Code</Text>
                        <TextInput
                            style={s.input}
                            onSubmitEditing={Keyboard.dismiss}
                            onChange={(text) => onChangeText(text)}
                            value={value}
                            maxLength={2}
                        />
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                                handleVendingInput(value);
                            }}
                        >
                            <Text style={styles.textStyle}>Enter</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
const s = StyleSheet.create({
    input: {
        margin: 60,
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 4,
        backgroundColor: "#fff"
    }
})
export default VendingKeypad;