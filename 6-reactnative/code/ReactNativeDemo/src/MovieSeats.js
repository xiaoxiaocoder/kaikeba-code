import React from 'react';
import { SafeAreaView, Text, View, Alert } from 'react-native';
import WebView from 'react-native-webview';

const InjectJs = (window, document) => {
  let submitBtn;
  function waitForBtnRender() {
    submitBtn = document.getElementById('submitBtn')
    if(!submitBtn) {
      setTimeout(waitForBtnRender, 2e3);
    } else {
      submitBtn.onclick = () => {
        const seats = []
        document.querySelectAll('.seat_selected').forEach(node => {
          seats.push(node.getAttribute('name'))
        })
        window.ReactNativeWebView.postMessage(seats.join(','))
      }
     }
  }
  waitForBtnRender()
}

// 暗号： 技术为生活服务
export default function Movieseats(props) {
  
  return (
    <WebView
    source= {{url}}
    injectedJavaScript={`(${InjectJs.toString()})(window, document)`}
    onMessage={e => {
      Alert.alert('The seats you have selected is: ' + e.nativeEvent.data)
    }}
    />
  )
}
