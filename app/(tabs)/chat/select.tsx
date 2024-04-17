import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import { PROFILES } from "../../config/data";

const select = () => {
  const [profiles, setprofiles] = useState<
    Array<{
      id: number;
      name: string;
      description: string;
      images: Array<{ image: string }>;
      turnOns: Array<{ title: string }>;
      lookingFor: Array<{ title: string }>;
    }>
  >(PROFILES);
  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1, padding: 10 }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 14 }}>
        <View
          style={{ backgroundColor: "#F0F0F0", padding: 10, borderRadius: 18 }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Optima",
            }}
          >
            NearBy 🔥
          </Text>
        </View>
        <View
          style={{ backgroundColor: "#F0F0F0", padding: 10, borderRadius: 18 }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Optima",
            }}
          >
            Looking for 💓
          </Text>
        </View>
        <View
          style={{ backgroundColor: "#F0F0F0", padding: 10, borderRadius: 18 }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Optima",
            }}
          >
            Turn-Ons ❤️
          </Text>
        </View>
      </View>
      {profiles?.length > 0 ? (
        <View style={{ marginTop: 12 }}>
          {profiles.map((item, index) => {
            return (
              <View style={{ marginVertical: 10 }}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 50,
                    }}
                  >
                    <View>
                      <Text style={{ fontSize: 17, fontWeight: "600" }}>
                        {item?.name}{" "}
                      </Text>
                      <Text
                        style={{
                          width: 200,
                          marginTop: 10,
                          fontSize: 15,
                          lineHeight: 24,
                          fontFamily: "Optima",
                          marginBottom: 8,
                        }}
                      >
                        {item?.description.length > 160
                          ? item?.description
                          : item?.description.substring(0, 160)}{" "}
                      </Text>
                    </View>
                    {item?.images?.slice(0, 1).map((item, index) => {
                      return (
                        <Image
                          key={index}
                          style={{
                            width: 200,
                            height: 200,
                            resizeMode: "cover",
                            borderRadius: 5,
                          }}
                          source={{ uri: item.image }}
                        />
                      );
                    })}
                  </View>
                </ScrollView>
                {/* ICON MORE FAVORIS AND DIAMOND */}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 10,
                  }}
                >
                  <Entypo name="dots-three-vertical" size={26} color="black" />
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 20,
                    }}
                  >
                    <Pressable
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: "#E0E0E0",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <FontAwesome name="diamond" size={27} color="#DE3163" />
                    </Pressable>

                    <Pressable
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: "#E0E0E0",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <AntDesign name="hearto" size={27} color="#FF033E" />
                    </Pressable>
                  </View>
                </View>

                {/* TURN - ONS HEART */}
                <View>
                  <Text> Turn-Ons ❤️</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                      marginTop: 10,
                    }}
                  >
                    {item.turnOns?.map((item, index) => {
                      return (
                        <View
                          key={index}
                          style={{
                            backgroundColor: "#DE3163",
                            padding: 10,
                            borderRadius: 22,
                          }}
                        >
                          <Text
                            style={{
                              textAlign: "center",
                              color: "white",
                              fontWeight: "500",
                              fontFamily: "",
                            }}
                          >
                            {item.title}{" "}
                          </Text>
                        </View>
                      );
                    })}
                  </View>
                </View>
                {/* LOOKING FOR SEE */}
                <View style={{ marginTop: 10 }}>
                  <Text> Loking For 👀</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                      marginTop: 10,
                    }}
                  >
                    {item.lookingFor?.map((item, index) => {
                      return (
                        <View
                          key={index}
                          style={{
                            backgroundColor: "#FBCEB1",
                            padding: 10,
                            borderRadius: 22,
                          }}
                        >
                          <Text
                            style={{
                              textAlign: "center",
                              color: "white",
                              fontWeight: "500",
                              fontFamily: "",
                            }}
                          >
                            {item.title}{" "}
                          </Text>
                        </View>
                      );
                    })}
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: "https://cdn-iicons-png.flaticon.com/128/1642/1642611.png",
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Georgia-Bold",
                textAlign: "center",
              }}
            >
              UH - OH{" "}
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "Georgia-Bold",
                  color: "#FF69B4",
                }}
              >
                No likes yet
              </Text>
            </Text>

            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                marginTop: 10,
              }}
            >
              Improve your AD to get better likes
            </Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default select;

const styles = StyleSheet.create({});
