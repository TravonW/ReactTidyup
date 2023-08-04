import {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import NfcManager, {Ndef, NfcEvents, NfcTech} from 'react-native-nfc-manager';
import styles from '../assets/styles/styles';
import NfcDropDown from './nfcDropDown';


export const writeNFCS = async () => {
    let result = false;

    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);

      const byteData = Ndef.encodeMessage([
        Ndef.uriRecord('https://www.instagram.com/partyingwiththetates/?hl=en'),
      ]);
      if (byteData) {
        await NfcManager.ndefHandler.writeNdefMessage(byteData);
        console.log('wrote');
        result = true;
      }
    } catch (e) {
      console.warn(e);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
    return result;
  };

