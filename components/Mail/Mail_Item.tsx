import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import UserList from "../../app/data/UserList";
import { Ionicons } from "@expo/vector-icons";
import OcticonsIcon from "react-native-vector-icons/Octicons";

const Mail_Item = () => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text style={styles.text}>受信トレイ</Text>
      <FlatList
        data={UserList}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.container}>
            <View style={styles.iconContainer}>
              <OcticonsIcon name="feed-person" size={48} color={item.color} />
            </View>
            <View style={styles.detailsContainer}>
              <View style={styles.row}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.title}>{item.time}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <Ionicons name="star" size={15} color="#2f4f4f" />
              </View>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
      />
    </View>
  );
};

export default Mail_Item;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  text: {
    fontSize: 15,
    padding: 10,
    fontWeight: "bold",
  },
  title: {
    fontSize: 14,
  },
  iconContainer: {
    width: "20%",
    alignItems: "center",
  },
  detailsContainer: {
    width: "80%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});