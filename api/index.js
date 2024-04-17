const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");
const User = require("./models/user");

mongoose
  .connect("mongodb+srv://Abmdev:Abmdev@cluster0.7qpzwfe.mongodb.net/")
  .then(() => console.log("Connected to MongoDB"))
  .catch(() => console.log("Error connecting to MongoDB"));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// ENDPOINT TO REGISTER A USER TO THE BACKEND
app.post("/register", async (req, res) => {
  console.log("FIRST 1111111 --- 11111111 --- 11111111");
  try {
    const { name, email, password } = req.body;
    console.log("name", name);
    console.log("email", email);
    console.log("password", password);

    // CHECK IF THE EMAIL IS ALREADY REGISTERED
    console.log("existingUser FIRRST 111", await User.findOne({ email }));
    const existingUser = await User.findOne({ $where: email });
    console.log("existingUser", existingUser);
    if (existingUser) {
      res.status(400).json({ message: "USER ALREADY EXISTS" });
    }
    console.log("USER DON'T EXISTS");
    // CREATE A NEW USER
    const newUser = new User({
      name,
      email,
      password,
    });
    console.log("USER DON'T EXISTS", newUser);
    // GENERATE A VERIFICATION TOKEN
    newUser.verificationToken = crypto.randomBytes(20).toString("hex");

    // SAVE THE USER TO THE BACKEND
    await newUser.save();
    console.log("newUser", newUser);
    // SEND THE VERIFICATION EMAIL TO THE REGISTERED USER
    sendVerificationEmail(newUser.email, newUser.verificationToken);
  } catch (error) {
    console.log("ERROR REGISTERING THE USER IN THE CATCH");
    res.status(500).json({ message: "REGISTRATION FAILED" });
  }
});

const sendVerificationEmail = async (email, verificationToken) => {
  console.log("sendVerificationEmail ENTER -- -- -->: ");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dzagoefalanmoscow@gmail.com",
      pass: "Alan_Dzagoef_Moscow_6477",
    },
  });

  const mailOptions = {
    from: "matchmake.com",
    to: email,
    subject: "Email verification",
    text: `Please click on the following link to verify your email : http://localhost:300/verify/${verificationToken}`,
  };

  //   SEND THE MAIL
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("ERROR SENDING THE VERIFICATION EMAIL...");
  }
};

// VERIFY THE USEER
app.get("/verify/:token", async (req, res) => {
  try {
    const token = req.params.token;

    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res.status(404).json({ message: "INVALID VERIFICATION TOKEN" });
    }

    // MARK THE USER AS VERIFIED
    user.verified = true;
    user.verificationToken = undefined;

    await user.save();
    res.status(200).json({ message: "EMAIL VERIFIED SUCCESFULLY" });
  } catch (error) {
    console.log("ERROR", error);
    res.status(500).json({ message: "EMAIL VERFICATION FAILED" });
  }
});

const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString("hex");

  return secretKey;
};
const secretKey = generateSecretKey();
// ENDDPOINT TO LOGIN
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // CHECK IF THE USER EXISTS ALREADY
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // CHECK IN PASsWOORD IS CORRECT
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ userId: user._id }, secretKey);
    res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: "LOGIN FAILED..." });
  }
});

// ENDPOINT TO CHANGE OR SELECT THE GENDER FOR A PARTICULAR USER PROFILEE
app.post("/user/:userdId/gender", async (req, res) => {
  try {
    const { userId } = req.params;
    const { gender } = req.body;

    const user = await User.findByIdAndUpdate(
      userId,
      { gender: gender },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "USER NOT FOUND!" });
    }

    return res
      .status(200)
      .json({ message: "USER GENDER UPDATED SUCCESFULLY!" });
  } catch (error) {
    res.status(500).json({ message: "ERROR UPDATING USER GENDER", error });
  }
});

// ENDPOINT TO UPDATE THE USER DESCRIPTION
app.put("/users/:userId/description", async (req, res) => {
  try {
    const { userId } = req.params;
    const { description } = req.body;

    const user = User.findByIdAndUpdate(
      userId,
      { description: description },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "USER NOT FOUND" });
    }

    return res
      .status(200)
      .json({ message: "USER DSCRIPTION UPDATED SUCCESFULLY" });
  } catch (error) {
    res.status(500).json({ message: "ERROR UPDATING USR DESCRIPTION" });
  }
});

// FETCH USERS DATA
app.get("/user/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "USER NOT FOUND" });
    }

    return res.status(200).json({ message: "USER SUCCESFULLY", user });
  } catch (error) {
    res.status(500).json({ message: "ERROR FETCHING THE USER DETAILS" });
  }
});

// ENDPOINT TO ADD A TURNON FOR A USER IN THE BACKEND
app.put("/users/:userId/turn-ons/add", async (req, res) => {
  try {
    const { userId } = req.params;
    const { turnOn } = req.body;

    const user = await User.findByIdAndUpdate(
      userId,
      {
        $addToSet: { turnOns: turnOn },
      },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "USER NOT FOUND" });
    }

    return res
      .status(200)
      .json({ message: "TURN ON UPDATED SUCCESFULLY", user });
  } catch (error) {
    res.status(500).json({ message: "ERROR ADDING THE TURN ON" });
  }
});

// ENDPOINT TO REMOVE A PARTICULAR TURN ON FOR THE USER
app.put("/users/:userId/turn-ons/remove", async (req, res) => {
  try {
    const { userId } = req.params;

    const { turnOn } = req.body;

    const user = User.findByIdAndUpdate(
      userId,
      { $pull: { turnOns: turnOn } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "USER NOT FOUND" });
    }

    return res
      .status(200)
      .json({ message: "TURN ON REMOVED SUCCESFULLY", user });
  } catch (error) {
    res.status(500).json({ message: "ERROR REMOVING TURN ON" });
  }
});

// ENDPOINT TO FETCH ALL THE PROFILES FOR A PARTICULAR USER
app.get("/profiles", async (req, res) => {
  try {
    const { userId, gender, turnOns, lookingFor } = req.query;

    let filter = { gender: gender === "male" ? "female" : "male" };

    if (turnOns) {
      filter.turnOns = { $in: turnOns };
    }

    if (lookingFor) {
      filter.lookingFor = { $in: lookingFor };
    }

    const currentUser = await User.findById(userId)
      .populate("matches", "_id")
      .populate("crushes", "_id");

    // EXTRACT THE ID's OF THE MATCHES
    const friendIds = currentUser.matches.map((friend) => friend._id);
    const crushIds = currentUser.crushes.map((crush) => crush._id);

    const profiles = await User.find(filter)
      .where("_id")
      .nin(userId, ...friendIds, ...crushIds);

    return res.status(200).json({ message: "PROFILES SUCCESFULLY", profiles });
  } catch (error) {
    res.status(500).json({ message: "ERROR FETCHING USER PROFILES", error });
  }
});

// SEND LIKE
app.post("/send-like", async (req, res) => {
  try {
    const { currentUserId, selectedUserId } = req.body;

    // UPDATE THE RECEPIENTS RECEIVED LIKS ARRAY
    await User.findByIdAndUpdate(selectedUserId, {
      $push: { recievedLikes: currentUserId },
    });

    await User.findByIdAndUpdate(currentUserId, {
      $push: { crushes: selectedUserId },
    });
  } catch (error) {
    res.status(500).json({ message: "ERROR SENDING A LIKE", error });
  }
});
