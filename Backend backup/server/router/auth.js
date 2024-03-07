const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

require("../db/conn");
const User = require("../model/userSchema");
const jwt = require("jsonwebtoken");

const Test = require("../model/test");

const Announcement = require("../model/Announcement");

// createtoken function
const createToken = async (_id) => {
  console.log(process.env.SECRET_KEY);
  return await jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "3d" });
};

router.get("/", (req, res) => {
  res.send("Hello world from the server router js");
});

router.post("/register", async (req, res) => {
  const { name, email, phone, password, dob, role, domain } = req.body;

  // console.log(`register request ${email}`);
  if (!name || !email || !password || !phone || !dob || !domain || !role) {
    return res.status(422).json({ error: "Please fill the field properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already Exist " });
      // } else if (password != cpassword) {
      //   return res.status(422).json({ error: " password are not matching " });
    } else {
      const user = new User({
        name,
        email,
        phone,

        password,
        dob,
        role,
        domain,
      });

      await user.save();
      //  create a token
      const token = await createToken(user._id);

      // res.status(201).json({ message: "user registered successfuly "  });
      res.status(200).json({ email, token });

      console.log("hello");
    }
  } catch (err) {
    console.log(err);
  }
});

//  login route

router.post("/signin", async (req, res) => {
  // console.log(req.body);
  // res.json({ message: "awesome" });
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please fill the details" });
    }
    const userLogin = await User.findOne({ email: email });
    // console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      if (!isMatch) {
        res.status(400).json({ error: "Invalid credentials pass  " });
      } else {
        const token = createToken(userLogin._id);
        // res.json({ message: "user Signin successfully" });
        res.status(200).json({ email, token });
      }
    } else {
      res.status(400).json({ error: "Invalid credentials email" });
    }
  } catch (err) {
    console.log(err);
  }
});

// test questions

router.post("/questions", async (req, res) => {
  const { ques, option1, option2, option3, option4, correctans } = req.body;

  if (!ques || !option1 || !option2 || !option3 || !option4 || !correctans) {
    return res.status(422).json({ error: "Please fill the field properlyy" });
  }

  try {
    const testExist = await Test.findOne({ ques: ques });
    if (testExist) {
      return res.status(422).json({ error: "Question already present " });
      // } else if (password != cpassword) {
      //   return res.status(422).json({ error: " password are not matching " });
    } else {
      const test = new Test({
        ques,
        option1,
        option2,
        option3,
        option4,
        correctans,
      });
      await test.save();

      res.status(201).json({ message: "question added successfuly " });
      console.log("hello");
    }
  } catch (err) {
    console.log(err);
  }
});
router.get("/gettest", async (req, res) => {
  try {
    const test = await Test.find({});
    console.log("Fetched test data:", test);
    res.json({ test });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Announcement Section

router.post("/Sheet", async (req, res) => {
  const { heading } = req.body;
  if (!heading) {
    return res.status(422).json({ error: "Please fill it" });
  }

  try {
    const announcementExist = await Announcement.findOne({ heading: heading });
    if (announcementExist) {
      return res.status(422).json({ error: "Announcement already made " });
      // } else if (password != cpassword) {
      //   return res.status(422).json({ error: " password are not matching " });
    } else {
      const announcement = new Announcement({
        heading,
      });
      await announcement.save();

      res.status(201).json({ message: "Announcement made successfuly " });
      console.log("hello");
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/getSheet", async (req, res) => {
  try {
    const announcement = await Announcement.find({});
    console.log("Fetched announcement data:", announcement);
    res.json({ announcement });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
