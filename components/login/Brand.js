import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Brand = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.logoImg}
        source={require("@/assets/pngtree-instagram-logo.jpg")}
      />
    </View>
  );
};

export default Brand;

const styles = StyleSheet.create({
  logoContainer: {
    marginTop: 60,
    alignItems: "center",
  },
  logoImg: {
    width: 100,
    height: 100,
  },
});
