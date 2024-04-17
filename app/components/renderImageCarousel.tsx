import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageProps,
  ImageSourcePropType,
} from "react-native";
import React from "react";

export interface RenderImageCarouselProps {
  data: Array<{ image: string }>;
  image?: ImageSourcePropType | any;
  activeSlide: number;
}

const RenderImageCarousel = ({
  data,
  image,
  activeSlide,
}: RenderImageCarouselProps) => {
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {image && (
        <Image
          style={{
            width: "85%",
            resizeMode: "cover",
            height: 200,
            borderRadius: 10,
            transform: [{ rotate: "-5deg" }],
          }}
          source={image}
        />
      )}
      <Text
        style={{ position: "absolute", top: 10, right: 10, color: "black" }}
      >
        {activeSlide + 1}/{data.length}{" "}
      </Text>
    </View>
  );
};

export default RenderImageCarousel;

const styles = StyleSheet.create({});
