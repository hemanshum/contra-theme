import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const OnbordingScreenOne = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/onbording/onboarding-image-one.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>
          Contra wireframe kit
        </Text>
        <Text style={styles.caption}>
          Wireframe is still important for ideation. It will help you to quickly
          test idea.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  imageContainer: {
    marginTop: "20%",
  },
  textContainer: {
    width: 300,
    borderWidth: 1,
    borderColor: "red",
    marginTop: "25%",
  },
  heading: {
    fontFamily: "mrt-xbold",
    fontSize: 36,
    textAlign: "center",
    color: "#18191F",
  },
  caption: {
    fontFamily: "mrt-medium",
    fontSize: 21,
    color: "#474A57",
    textAlign: "center",
  },
});

export default OnbordingScreenOne;
