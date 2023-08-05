// @ts-nocheck
import { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import NfcManager, { Ndef, NfcEvents, NfcTech } from 'react-native-nfc-manager';
import styles from '../assets/styles/styles';
import NfcDropDown from './nfcDropDown';
export default function NfcReader(): JSX.Element {
  const [nfc, setNfc] = useState<Boolean>(false);





  // checks if the device supports NFC
  useEffect(() => {
    const checkSupported = async () => {
      const deviceSupported = await NfcManager.isSupported();

      setNfc(deviceSupported);
      if (deviceSupported) {
        await NfcManager.start();
      }
    };

    checkSupported();
  }, []);

  // read the nfc tag

  async function readNdef() {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      console.warn('Tag found', tag);
    } catch (ex) {
      console.warn('Oops!', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  }

  /// Write to the NFC-using async when sending or recieving data
  const writeNFC = async () => {
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

  if (nfc === null) return <></>;

  if (!nfc) {
    return (
      <View>
        <Text>NFC not supported</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      {/* Page Container */}
      <View style={styles.scanBackground}>
        <Text>Scan the NFC Sticker Please</Text>
        {/* put image above scan code  */}
        {/* Scan And Write container */}
        <View style={styles.scanAndWriteContainer}>
          {/* Scan Tag Container */}
          <View>
            {/* <Text style={styles.ScanTagText}> Scan Tag</Text> */}
            <View>
              {/*  just make the border bigger and u done */}
            <TouchableOpacity onPress={readNdef} style={styles.scanNfcButton}>
              <Text style={styles.scanNfcButtonText}>Scan Now!</Text>
            </TouchableOpacity>
            </View>
          </View>
          {/* Add Tag Container */}

          <View>
            <View>
              <Text style={styles.addTagText}> Add Tag</Text>
            </View>
            <NfcDropDown/>
            <View>
            </View>
            {/* Name Input */}
            <View>
              <TextInput style={styles.writeNfcButtonInput}> 
              <Text style={styles.writeNfcButtonName}> Name </Text>
              </TextInput>
            </View>
            {/* Done Button Container */}
            <View>
              <TouchableOpacity
                onPress={writeNFC}
                style={styles.writeToNfcDoneButton}>
                <Text style={styles.writeToNfcButtonText}>Done Button</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
