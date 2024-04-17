import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  MaterialCommunityIcons,
  Entypo,
  Feather,
} from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { MESSAGES } from "../../config/data";

const chatroom = () => {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const [message, setMessage] = useState("");
  const [messages, setMessages] =
    useState<Array<{ id: number; message: string; timestamp: any }>>(MESSAGES);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Ionicons name="arrow-back" size={24} color="black" />
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Image
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                resizeMode: "cover",
              }}
              source={{ uri: params?.image }}
            />
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              {params?.name}{" "}
            </Text>
          </View>
        </View>
      ),

      headerRight: () => (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={24}
            color="black"
          />
          <Ionicons name="videocam-outline" size={24} color="black" />
        </View>
      ),
    });
  }, []);

  const formatTime = (time: any) => {
    const options = { hour: "numeric", minute: "numeric" };

    return new Date(time).toLocaleString("fr-FR", options);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* MESSAGES TO BE SHOW */}
        {messages.map((item, index) => {
          return (
            <Pressable
              key={index}
              style={[
                item?.id == params?.senderId
                  ? {
                      alignSelf: "flex-end",
                      backgroundColor: "#F08080",
                      padding: 8,
                      maxWidth: "60%",
                      borderRadius: 7,
                      margin: 10,
                    }
                  : {
                      alignSelf: "flex-start",
                      backgroundColor: "#DB7093",
                      padding: 8,
                      margin: 10,
                      borderRadius: 7,
                      maxWidth: "60%",
                    },
              ]}
            >
              <Text
                style={{
                  fontSize: 13,
                  textAlign: "left",
                  color: "white",
                  fontWeight: "500",
                }}
              >
                {item.message}
              </Text>
              <Text
                style={{
                  fontSize: 9,
                  textAlign: "right",
                  color: "#F0F0F0",
                  marginTop: 5,
                }}
              >
                {formatTime(item.timestamp)}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderTopWidth: 1,
          borderTopColor: "#dddddd",
          marginBottom: 1,
        }}
      >
        <Entypo
          style={{ marginRight: 7 }}
          name="emoji-happy"
          size={24}
          color="gray"
        />
        <TextInput
          style={{
            flex: 1,
            height: 40,
            borderWidth: 1,
            borderColor: "#dddddd",
            borderRadius: 20,
            paddingHorizontal: 10,
          }}
          value={message}
          onChangeText={(text: string) => setMessage(text)}
          placeholder="Type your message..."
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            marginHorizontal: 8,
          }}
        >
          <Entypo name="camera" size={24} color="gray" />
          <Feather name="mic" size={24} color="gray" />
        </View>

        <Pressable
          style={{
            backgroundColor: "#007bff",
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: 20,
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>Send</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default chatroom;

const styles = StyleSheet.create({});
