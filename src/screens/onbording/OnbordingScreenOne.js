import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const OnbordingScreenOne = () => {
  return (
    <View>
      <Image
        source={require("../../../assets/onbording/onboarding-image-one.png")}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default OnbordingScreenOne;
