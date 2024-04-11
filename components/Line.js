import * as React from "react";
import { StyleSheet, View } from "react-native";

const Line = () => {
  return <View style={styles.lineView} />;
};

const styles = StyleSheet.create({
  lineView: {
    borderStyle: "solid",
    borderColor: "#d9d9d9",
    borderTopWidth: 1,
    width: 431,
    height: 1,
  },
});

export default Line;
