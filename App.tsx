import * as React from 'react';

import { Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Orientation from 'react-native-orientation-fixed';
import Video360 from 'react-native-video360next';

export default function App() {

  Orientation.lockToLandscape();

  return (

    <Modal style={styles.container}>
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <View style={{ position: 'absolute', top: 20, left: 15, zIndex: 10 }}>
          <TouchableWithoutFeedback onPress={() => { setModalVisible(false) }}>
            <Text style={{ color: 'white' }}>close</Text>
          </TouchableWithoutFeedback>
        </View>
        <Video360 
          style={{ flex: 1 }} 
          urlVideo={'https://github.com/videojs/videojs-vr/raw/main/samples/eagle-360.mp4'} 
          modeVideo={1}
          volume={1}
          enableInfoButton={true}
          enableFullscreenButton={true}
          enableCardboardButton={true}
          enableTouchTracking={true}
          hidesTransitionView={false}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
