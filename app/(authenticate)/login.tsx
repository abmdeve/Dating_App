import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import axios from "axios";
import { HOST } from "../../host";
import AsyncStorage from "@react-native-async-storage/async-storage";

const login = () => {
  const [email, setEmail] = useState("abmdev@gmail.com");
  const [password, setPassword] = useState("12345678");
  const router = useRouter();

  const handleLogin = async () => {
    const user = {
      email: email,
      password: password,
    };
    router.replace("/(authenticate)/select");
    // axios
    //   .post(`${HOST}/login`, user)
    //   .then((response) => {
    //     console.log("response", response);
    //     const token = response.data.token;
    //     AsyncStorage.setItem("auth", token);

    //     router.replace("/(authenticate)/select");
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //   });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.centerImage}>
          <Image
            style={styles.image}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/6655/6655045.png",
            }}
          />
        </View>
        <Text style={styles.matchText}>Match Mate</Text>
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.loginText}>Log in</Text>
        </View>
        <View style={styles.imageLogin}>
          <Image
            style={styles.loginImage}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/2509/2509078.png",
            }}
          />
        </View>

        <View style={{ marginTop: 15 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#FFC0CB",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 20,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="white"
            />
            <TextInput
              value={email}
              onChangeText={(text: string) => setEmail(text)}
              placeholder="Enter your email"
              style={{
                color: "white",
                marginVertical: 10,
                width: 300,
                fontSize: password ? 17 : 17,
              }}
            />
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#FFC0CB",
                paddingVertical: 5,
                borderRadius: 5,
                marginTop: 10,
              }}
            >
              <AntDesign
                style={{ marginLeft: 8 }}
                name="lock1"
                size={24}
                color="white"
              />
              <TextInput
                value={password}
                onChangeText={(text: string) => setPassword(text)}
                placeholder="Enter your email"
                placeholderTextColor={"white"}
                secureTextEntry={true}
                style={{
                  color: "white",
                  marginVertical: 10,
                  width: 300,
                  fontSize: password ? 17 : 17,
                }}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 12,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Keep me Logged in </Text>
            <Text style={{ color: "#007FFF", fontWeight: "500" }}>
              Forgot Password{" "}
            </Text>
          </View>

          <View style={{ marginTop: 20 }} />
          <Pressable
            onPress={() => handleLogin()}
            style={{
              width: 200,
              backgroundColor: "#FFC0CB",
              borderRadius: 6,
              marginLeft: "auto",
              marginRight: "auto",
              padding: 15,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Login
            </Text>
          </Pressable>

          <Pressable
            onPress={() => router.replace("/register")}
            style={{
              marginTop: 12,
            }}
          >
            <Text
              style={{
                color: "gray",
                textAlign: "center",
                fontSize: 16,
              }}
            >
              Don't have account? Sign Up
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  imageContainer: {
    height: 150,
    backgroundColor: "pink",
    width: "100%",
  },
  centerImage: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  image: {
    width: 150,
    height: 80,
    resizeMode: "contain",
  },
  matchText: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "GillSans-SemiBold",
  },
  loginText: {
    marginTop: 25,
    fontWeight: "bold",
    fontSize: 17,
    color: "#F9629F",
  },
  imageLogin: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  loginImage: {
    width: 100,
    height: 80,
    resizeMode: "cover",
  },
});
