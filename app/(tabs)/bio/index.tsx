import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";

const index = () => {
  const [option, setOption] = useState("AD");
  return (
    <ScrollView>
      <View>
        <Image
          style={{ width: "100%", height: 200, resizeMode: "cover" }}
          source={{
            uri: "https://static.vecteezy.com/system/ressources/thumbnails/018/977/074/original/an",
          }}
        />
        <View>
          <View>
            <Pressable
              style={{
                padding: 10,
                backgroundColor: "#DDA0DD",
                width: 300,
                marginLeft: "auto",
                marginRight: "auto",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                position: "absolute",
                top: -60,
                left: "50%",
                transform: [{ translateX: -150 }],
              }}
            >
              <Image
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  resizeMode: "cover",
                }}
                source={{
                  uri: "https://images.pexels.com/photos/2085739/pexels-photo-2085739.jpeg?auto=c",
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  marginTop: 6,
                }}
              >
                Bangalore
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 4,
                }}
              >
                22 years 110 days
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 80,
          marginHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          gap: 25,
          justifyContent: "center",
        }}
      >
        <Pressable onPress={() => setOption("AD")}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: option === "AD" ? "black" : "gray",
            }}
          >
            AD
          </Text>
        </Pressable>
        <Pressable onPress={() => setOption("Photos")}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: option === "Photos" ? "black" : "gray",
            }}
          >
            Photos
          </Text>
        </Pressable>
        <Pressable onPress={() => setOption("Turn-ons")}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: option === "Turn-ons" ? "black" : "gray",
            }}
          >
            Turn-ons
          </Text>
        </Pressable>
        <Pressable onPress={() => setOption("Looking For")}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: option === "Looking For" ? "black" : "gray",
            }}
          >
            Looking For
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
