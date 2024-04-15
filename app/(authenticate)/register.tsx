import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import axios from "axios";
import { HOST } from "../../host";

const register = () => {
  const [name, setName] = useState("Abm");
  const [email, setEmail] = useState("abmdev@gmail.com");
  const [password, setPassword] = useState("12345678");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const router = useRouter();

  const handlerRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:3000/register", user)
      .then((response) => {
        console.log("response", response);
        Alert.alert(
          "Registration Succesfull",
          "You have been registered succeesfully",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            {
              text: "OK",
              onPress: () => console.log("OK Pressed"),
              // style: "cancel",
            },
          ]
        );
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.log("error while registering the user", error);
        Alert.alert(
          "Registration failed",
          "An error occuredd during registration",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            {
              text: "OK",
              onPress: () => console.log("OK Pressed"),
              // style: "cancel",
            },
          ]
        );
      });
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

        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#FFC0CB",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 5,
            }}
          >
            <Ionicons
              style={{ marginLeft: 8 }}
              name="person-sharp"
              size={24}
              color="white"
            />
            <TextInput
              value={name}
              onChangeText={(text: string) => setName(text)}
              placeholder="Enter your name"
              style={{
                color: "white",
                marginVertical: 10,
                width: 300,
                fontSize: name ? 17 : 17,
              }}
            />
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#FFC0CB",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 5,
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
                marginTop: 5,
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

          <View style={{ marginTop: 20 }} />
          <Pressable
            onPress={handlerRegister}
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
              Register
            </Text>
          </Pressable>

          <Pressable
            onPress={() => router.replace("/login")}
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
              Already have an account? Sign In
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default register;

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
