import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ProfileContent from "../../components/ProfileContent";
import { PROFILES } from "../../config/data";

const index = () => {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState("");
  const [profiles, setProfiles] = useState<
    Array<{
      id: number;
      name: string;
      description: string;
      images: Array<{ image: string }>;
    }>
  >(PROFILES);

  return (
    <View>
      {/* <Text>Profile screen</Text> */}
      <FlatList
        data={profiles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <ProfileContent
            key={index}
            item={item}
            userId={userId}
            setProfiles={setProfiles}
            isEvent={index % 2 === 0}
            // isEvent={true}
          />
        )}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
