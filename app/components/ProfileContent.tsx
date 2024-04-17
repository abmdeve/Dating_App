import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Entypo, FontAwesome, AntDesign } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

export interface ItemProps {
  id: number;
  name: string;
  description: string;
  images: Array<{ image: string }>;
}

export interface ProfileContentProps {
  item: ItemProps;
  userId: any;
  setProfiles: any;
  isEvent?: any;
}

const ProfileContent = ({
  item,
  userId,
  setProfiles,
  isEvent,
}: ProfileContentProps) => {
  const colors = ["#F0F0FF", "#FFFFFF"];
  const [liked, setLiked] = useState(false);
  const [selected, setSelected] = useState(true);

  if (isEvent) {
    return (
      <View style={{ padding: 12, backgroundColor: "#F0F0FF" }}>
        {/* NAME DESCRIPTION AND IMAGE */}
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 50 }}>
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

        <View style={{ marginVertical: 12 }} />
      </View>
    );
  } else {
    return (
      <View style={{ padding: 12, backgroundColor: "#FFFFFF" }}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 50 }}>
            {item?.images.slice(0, 1).map((item, index) => {
              return (
                <Image
                  style={{
                    width: 200,
                    height: 280,
                    resizeMode: "cover",
                    borderRadius: 5,
                  }}
                  source={{ uri: item.image }}
                />
              );
            })}
            <View>
              <Text style={{ fontSize: 17, fontWeight: "600" }}>
                {item.name}{" "}
              </Text>
              <Text
                style={{
                  width: 200,
                  fontSize: 18,
                  marginTop: 10,
                  lineHeight: 20,
                  color: "#333333",
                  marginBottom: 8,
                  fontFamily: "Optima",
                }}
              >
                {item.description}{" "}
              </Text>
            </View>
          </View>
        </ScrollView>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Entypo name="dots-three-vertical" size={26} color="gray" />
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <Pressable
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: "#F0F8FF",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome name="diamond" size={27} color="#0066b2" />
            </Pressable>

            {selected ? (
              <Pressable
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "#6699CC",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Animatable.View
                  animation={"swing"} //You can choose different animation
                  easing="ease-in-out-circ"
                  iterationCount={1} // Number of times the animation will run
                >
                  <AntDesign name="hearto" size={27} color="white" />
                </Animatable.View>
              </Pressable>
            ) : (
              <Pressable
                //   onPress={() => handleLikeOther(item.id)}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "#6699CC",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Animatable.View
                  animation={"swing"} //You can choose different animation
                  easing="ease-in-out-circ"
                  iterationCount={1} // Number of times the animation will run
                >
                  <AntDesign name="hearto" size={27} color="white" />
                </Animatable.View>
              </Pressable>
            )}
          </View>
        </View>
        {/* NAME DESCRIPTION AND IMAGE */}
        {/* <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 50 }}>
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
        </ScrollView> */}
        {/* ICON MORE FAVORIS AND DIAMOND */}
        {/* <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Entypo name="dots-three-vertical" size={26} color="black" />
          </View>
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
        </View> */}

        <View style={{ marginVertical: 12 }} />
      </View>
    );
  }
  //   return (
  //     <View>
  //       <Text>ProfileContent</Text>
  //     </View>
  //   );
};

export default ProfileContent;

const styles = StyleSheet.create({});
