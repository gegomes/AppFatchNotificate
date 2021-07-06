import { LogBox } from 'react-native';
//import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";

import { StyleSheet} from "react-native";

///LogBox.ignoreAllLogs();

import Applications from "./src/Applications";

export default function App() {
 
  return <Applications />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
