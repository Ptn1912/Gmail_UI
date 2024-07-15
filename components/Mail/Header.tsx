import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import OcticonsIcon from "@expo/vector-icons/Octicons";

const Header = () => {
  return (
    <View style={{ padding: 20, paddingBottom: 0 }}>
      <View style={styles.container}>
        <Ionicons name="menu" size={30} />
        <TextInput style={styles.input} placeholder="メールを検索" />
        <OcticonsIcon
          style={styles.icon}
          name="feed-person"
          size={30}
          color="#2f4f4f"
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
    backgroundColor: "white",
    marginHorizontal: 10,
    padding: 11,
    elevation: 5,
    width: "95%",
  },
  input: {
    flex: 1,
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 10,
  },
  icon: {
    marginLeft: 10,
  },
});
