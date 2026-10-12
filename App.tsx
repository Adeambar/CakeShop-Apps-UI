import React from 'react';
import { NativeBaseProvider } from "native-base";
import { LogBox, StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Toast, { BaseToast, ErrorToast, InfoToast, SuccessToast } from 'react-native-toast-message'
import { Colors } from './src/utilities/utils';
import AppNavigator from './src/routes/router';
import moment from 'moment';
import 'moment/locale/id'
import { Provider } from 'react-redux';
import { store } from './src/stores';

const ToastTheme = {
  success: (props: any) => (
    <SuccessToast
      {...props}
      style={{ borderLeftColor: Colors.SUCCESS, borderRightColor: Colors.SUCCESS, borderRightWidth: 5 }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 12,
        fontWeight: '700',
        color: Colors.SUCCESS
      }}
      text2Style={{
        fontSize: 14,
        fontWeight: '400',
        color: '#000'
      }}
    />
  ),

  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: Colors.ERROR, borderRightColor: Colors.ERROR, borderRightWidth: 5 }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 12,
        fontWeight: '700',
        color: Colors.ERROR
      }}
      text2Style={{
        fontSize: 14,
        fontWeight: '400',
        color: '#000'
      }}
    />
  ),

  info: (props: any) => (
    <InfoToast
      {...props}
      style={{ borderLeftColor: Colors.INFO, borderRightColor: Colors.INFO, borderRightWidth: 5 }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 12,
        fontWeight: '700',
        color: Colors.INFO
      }}
      text2Style={{
        fontSize: 14,
        fontWeight: '400',
        color: '#000'
      }}
    />
  ),

  warning: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: Colors.WARNING, borderRightColor: Colors.WARNING, borderRightWidth: 5 }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 12,
        fontWeight: '700',
        color: Colors.WARNING
      }}
      text2Style={{
        fontSize: 14,
        fontWeight: '400',
        color: '#000'
      }}
    />
  ),
};

moment.locale('id')
function App(): React.JSX.Element {
  const [init, setInit] = React.useState(false)

  React.useEffect(() => {
    if (__DEV__) {
      LogBox.ignoreLogs(['Warning: ...']);
      LogBox.ignoreAllLogs();
    }
  }, [init])

  return (
    <Provider store={store}>
      <PaperProvider>
        <NativeBaseProvider>
          <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
          <AppNavigator />
          <Toast config={ToastTheme} />
        </NativeBaseProvider>
      </PaperProvider>
    </Provider>
  );
}

export default App;
