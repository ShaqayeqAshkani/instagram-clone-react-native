import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require("@/assets/instagram-text-logo.png")}
          style={styles.logo}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            source={require("@/assets/icons/black-and-white.png")}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require("@/assets/icons/hart1.jpg")}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require("@/assets/icons/messenger.png")}
            style={styles.icon}
          />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>13</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  iconsContainer: {
    flexDirection: "row",
  },
  icon: {
    width: 28,
    height: 28,
    marginLeft: 10,
    marginTop: 5,
    resizeMode: "contain",
  },
  badge: {
    position: "absolute",
    backgroundColor: "tomato",
    width: 23,
    height: 16,
    right: -6, 
    top: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  marginTop:1,
  },
  badgeText: {
    color: "white",
    fontWeight: "400",
  },
});
