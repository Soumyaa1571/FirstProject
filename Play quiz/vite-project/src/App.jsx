import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
// import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
// import Services from "./components/pages/Services/Services";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import SignUp from "./components/pages/SignUp/SignUp";
import Quizes from "./components/pages/Quizes/Quizes";
import Announcements from "./components/pages/Announcements/Announcements";
import Question from "./components/pages/Question form/Question form";
// import Footer from "./components/Footer/Footer";
import Test from "./components/Tests/Test/Test1/Test";
import Test2 from "./components/Tests/Test/Test2/Test2";
import Test3 from "./components/Tests/Test/Test3/Test3";
import Finish from "./components/pages/end/Finish";
// import Questions from "../../../Play quiz/vite-project/src/questions.json";
import Bform from "./components/Bform/Bform";
import Result from "./components/pages/Result/Result";
import Sheet from "./components/pages/Sheet/Sheet";
import Aform from "./components/Aform/Aform";
import { useState } from "react";

function App() {
  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email');
  const [tokenState, setTokenState] = useState({
    token: token,
    email: email
  })
  return (
    <div>
      <Navbar tokenState={tokenState}/>

      <Routes>
        <Route path="/about" element={<About />} />
        {/* <Route path="/announcements" element={<Services />} /> */}
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={token?<Quizes/>:<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/quizes" element={<Quizes />} />
        <Route path="/Announcements" element={<Announcements />} />
        <Route path="/Questions" element={<Question />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/Test2" element={<Test2 />} />
        <Route path="/Test3" element={<Test3 />} />
        <Route path="/Finish" element={<Finish />} />
        <Route path="/exam" element={<Bform />} />
        <Route path="/result" element={<Result />} />
        <Route path="/Sheet" element={<Sheet />} />
        <Route path="/getSheet" element={<Aform />} />

        {/* <Route path="/answer" element={<Answer />} /> */}

        {/* <Route path="/quizes" element={<Quizes />} /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
