import * as SplashScreen from "expo-splash-screen";
import * as Font from 'expo-font';
import React, { useCallback, useEffect, useState } from "react";
import Start from './components/Start.js'


let customFonts = {
  'Nunito': require('./assets/fonts/Nunito/static/Nunito-Regular.ttf')
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      await Font.loadAsync(customFonts);
      setAppIsReady(true);
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // Hide the splash screen
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Start onLayoutRootView={onLayoutRootView}/>
  );
}
