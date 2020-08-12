import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import OnbordingScreenOne from "./src/screens/onbording/OnbordingScreenOne";

//Fonts to use
const loadFonts = () => {
  return Font.loadAsync({
    "mrt-xbold": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
    "mrt-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "mrt-medium": require("./assets/fonts/Montserrat-Medium.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  //Show App loading till fonts are loaded
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.error(err)}
      />
    );
  }

  return <OnbordingScreenOne />;
}

const styles = StyleSheet.create({});
