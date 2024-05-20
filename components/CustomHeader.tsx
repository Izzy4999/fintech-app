import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  TextInput,
  ViewBase,
} from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import Colors from "@/constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function CustomHeader() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top, backgroundColor: Colors.background }}>
      <View style={styles.containter}>
        <Link href={"/(authenticated)/(modals)/account"} asChild>
          <TouchableOpacity style={styles.roundBtn}>
            <Text style={{ color: "white", fontWeight: "500", fontSize: 16 }}>
              SG
            </Text>
          </TouchableOpacity>
        </Link>

        <View style={styles.searchSection}>
          <Ionicons
            style={styles.searchIcons}
            name="search"
            size={20}
            color={Colors.dark}
          />
          <TextInput
            style={styles.input}
            placeholder="Search..."
            placeholderTextColor={Colors.dark}
          />
        </View>

        <View style={styles.circle}>
          <Ionicons name="stats-chart" size={20} color={Colors.dark} />
        </View>
        <View style={styles.circle}>
          <Ionicons name="card" size={20} color={Colors.dark} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    gap: 10,
    paddingHorizontal: 20,
  },
  roundBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.gray,
    justifyContent: "center",
    alignItems: "center",
  },
  searchSection: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    backgroundColor: Colors.lightGray,
    alignItems: "center",
    borderRadius: 30,
    justifyContent: "center",
  },
  searchIcons: { padding: 10 },
  input: { flex: 1, padding: 10, paddingLeft: 0, color: Colors.dark },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
});
