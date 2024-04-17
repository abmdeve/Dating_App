import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";
import { LOOKING_FOR, profileImages, turnons } from "../../config/data";
import RenderImageCarousel from "../../components/renderImageCarousel";

export interface ItemProps {
  image: string;
}
const index = () => {
  const [option, setOption] = useState("AD");
  const [description, setDescription] = useState("");
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [selectedTurnOns, setSelectedTurnOns] = useState<any>([]);
  const [lookingOptions, setLookingOptions] = useState<any>([]);
  const [imageUrl, setImageUrl] = useState<any>("");
  const [images, setImages] = useState<any>([]);

  const RenderImageCarousel = ({ item }) => (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {item.image && (
        <Image
          style={{
            width: "85%",
            resizeMode: "cover",
            height: 200,
            borderRadius: 10,
            transform: [{ rotate: "-5deg" }],
          }}
          source={{ uri: item.image }}
        />
      )}
      <Text
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          color: "red",
          fontWeight: "bold",
        }}
      >
        {activeSlide + 1}/{profileImages.length}{" "}
      </Text>
    </View>
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        {/* BACKGROUND IMAGE */}
        <Image
          style={{ width: "100%", height: 200, resizeMode: "cover" }}
          source={{
            uri: "https://static.vecteezy.com/system/resources/thumbnails/018/977/074/original/animated-backgrounds-with-liquid-motion-graphic-background-cool-moving-animation-for-your-background-free-video.jpg",
          }}
        />
        {/* USER IDENTITY */}
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
                @bm_developpers
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
      {/* HORRIZONTAL LIST */}
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
      {/* IF ADD CLICKED INPUT AND BUTTON AND MASK ICON */}
      <View style={{ marginHorizontal: 14, marginVertical: 15 }}>
        {option === "AD" && (
          <View
            style={{
              borderColor: "#202020",
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
              height: 200,
            }}
          >
            <TextInput
              value={description}
              multiline
              onChangeText={(text: string) => setDescription(text)}
              style={{
                fontFamily: "Helvetica",
                fontSize: description ? 17 : 17,
              }}
              placeholder="Write your AD for people to like you"
              // placeholderTextColor={"black"}
            />
            <Pressable
              style={{
                marginTop: "auto",
                flexDirection: "row",
                alignItems: "center",
                gap: 15,
                backgroundColor: "black",
                borderRadius: 5,
                justifyContent: "center",
                padding: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                Publish in feed
              </Text>
              <Entypo name="mask" size={24} color="white" />
            </Pressable>
          </View>
        )}
      </View>

      {/* IF PHOTOS CLICKED */}
      <View style={{ marginHorizontal: 14 }}>
        {option === "Photos" && (
          <View>
            <Carousel
              data={profileImages}
              renderItem={RenderImageCarousel}
              sliderWidth={250}
              itemWidth={200}
              onSnapToItem={(index) => setActiveSlide(index)}
            />

            <View style={{ marginTop: 15 }}>
              <Text>Add a picture of yourself</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  paddingVertical: 5,
                  borderRadius: 5,
                  margin: 10,
                  backgroundColor: "#DCDCDC",
                }}
              >
                <Entypo
                  name="image"
                  size={24}
                  color="gray"
                  style={{ marginLeft: 10 }}
                />
                <TextInput
                  style={{ color: "gray", marginVertical: 10, width: 300 }}
                  placeholder="Enter your Email"
                />
              </View>
              {/* <Button  title="Add Image" /> */}
              <Button title="Add Image" onPress={() => console.log("#")} />
            </View>
          </View>
        )}
      </View>

      {/* IF TURN_ONS CLICKED */}
      <View style={{ marginHorizontal: 14 }}>
        {option === "Turn-ons" && (
          <View>
            {turnons?.map((item, index) => {
              return (
                <Pressable
                  key={index}
                  style={{
                    backgroundColor: "#FFFDD0",
                    padding: 10,
                    marginVertical: 5,
                  }}
                >
                  <View style={{}}>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 15,
                        fontWeight: "bold",
                      }}
                    >
                      {item?.name}
                    </Text>
                  </View>
                  <Text
                    style={{
                      marginTop: 4,
                      fontSize: 15,
                      color: "gray",
                    }}
                  >
                    {item?.description}{" "}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        )}
      </View>

      {/* IF LOOKING FOR */}
      <View>
        {option === "Looking For" && (
          <>
            <View>
              <FlatList
                columnWrapperStyle={{ justifyContent: "space-between" }}
                numColumns={2}
                data={LOOKING_FOR}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                  return (
                    <Pressable
                      style={{
                        backgroundColor: "white",
                        padding: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        width: 150,
                        margin: 10,
                        borderRadius: 5,
                        borderColor: "#fd5c63",
                        borderWidth: 0.7,
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          fontSize: 13,
                          fontWeight: "500",
                        }}
                      >
                        {item?.name}{" "}
                      </Text>
                      <Text
                        style={{
                          color: "gray",
                          textAlign: "center",
                          width: 140,
                          marginTop: 10,
                          fontSize: 13,
                        }}
                      >
                        {item?.description}{" "}
                      </Text>
                    </Pressable>
                  );
                }}
              />
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
