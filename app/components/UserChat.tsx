import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export interface ChatProps {
  images: string;
  name: string;
}

export interface UserChatProps {
  userId: number;
  item: ChatProps;
}

const UserChat = ({ userId, item }: UserChatProps) => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "/chat/chatroom",
          params: {
            senderId: userId,
            image: item.images,
            name: item.name,
          },
        })
      }
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginVertical: 12,
      }}
    >
      <View>
        <Image
          style={{ width: 60, height: 60, borderRadius: 35 }}
          source={{ uri: item.images }}
        />
      </View>

      <View>
        <Text
          style={{
            fontWeight: "500",
            color: "#DE3163",
            fontSize: 15,
            fontFamily: "Kailasa",
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            fontWeight: "500",
            // color: "#DE3163",
            fontSize: 15,
            marginTop: 6,
            // fontFamily: "Kailasa",
          }}
        >
          Start the chat with {item.name}
        </Text>
      </View>
    </Pressable>
  );
};

export default UserChat;

const styles = StyleSheet.create({});
