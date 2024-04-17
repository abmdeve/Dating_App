import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { MATCHES } from "../../config/data";
import UserChat from "../../components/UserChat";

const index = () => {
  const [userId, setUserId] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [matches, setMatches] =
    useState<Array<{ id: number; name: string; images: string }>>(MATCHES);
  const router = useRouter();

  return (
    <View style={{ backgroundColor: "white", flex: 1, padding: 10 }}>
      <Text>index</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>CHATS</Text>
        <Ionicons name="chatbox-ellipses-outline" size={25} color="black" />
      </View>
      <Pressable
        onPress={() => router.push({ pathname: "chat/select" })}
        style={{
          marginVertical: 12,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: "#E0E0E0",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather name="heart" size={24} color="black" />
        </View>
        <Text style={{ fontSize: 17, marginLeft: 10, flex: 1 }}>
          You have got 2 likes
        </Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </Pressable>

      <View>
        {matches.map((item, index) => {
          return <UserChat key={index} userId={index} item={item} />;
        })}
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
