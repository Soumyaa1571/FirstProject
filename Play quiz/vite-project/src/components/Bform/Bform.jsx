// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "./Bform.css";

// function Bform() {
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [selectedOption, setSelectedOption] = useState({});

//   const handleOptionChange = (questionId, selectedOption) => {
//     setSelectedOption({ ...selectedOption, [questionId]: selectedOption });
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/gettest");
//         console.log("Response:", response.data);
//         setQuestions(response.data.test);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError(true);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="Bformcontainer">
//       <div className="row justify-content-center mt-5">
//         {loading ? (
//           <h1>Loading...</h1>
//         ) : error ? (
//           <h1>Error</h1>
//         ) : questions.length > 0 ? (
//           <>
//             {questions.map((question, i) => (
//               <div
//                 className="col-md-9 mt-2"
//                 key={i}
//                 style={{
//                   marginBottom: "40px",
//                 }}
//               >
//                 <div className="box">
//                   <div className="ques">{question.Ques || question.ques}</div>
//                   <form>
//                     {["option1", "option2", "option3", "option4"].map(
//                       (option, index) => (
//                         <div key={index}>
//                           <label>
//                             <input
//                               type="radio"
//                               value={question[option]}
//                               checked={
//                                 selectedOption[question._id] ===
//                                 question[option]
//                               }
//                               onChange={() =>
//                                 handleOptionChange(
//                                   question._id,
//                                   question[option]
//                                 )
//                               }
//                             />
//                             {question[option]}
//                           </label>
//                         </div>
//                       )
//                     )}
//                   </form>
//                   <button className="submit">Submit</button>
//                 </div>
//               </div>
//             ))}
//           </>
//         ) : (
//           <h1>No questions available</h1>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Bform;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./Bform.css";

// function Bform() {
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [selectedOption, setSelectedOption] = useState({});
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

//   const handleOptionChange = (questionId, selectedOption) => {
//     setSelectedOption({ ...selectedOption, [questionId]: selectedOption });
//   };

//   const handleNextClick = () => {
//     // Increment the index to display the next question
//     setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/gettest");
//         console.log("Response:", response.data);
//         setQuestions(response.data.test);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError(true);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="Bformcontainer">
//       <div className="row justify-content-center mt-5">
//         {loading ? (
//           <h1>Loading...</h1>
//         ) : error ? (
//           <h1>Error</h1>
//         ) : questions.length > 0 ? (
//           <>
//             {questions
//               .slice(currentQuestionIndex, currentQuestionIndex + 1)
//               .map((question, i) => (
//                 <div
//                   className="col-md-9 mt-2"
//                   key={i}
//                   style={{
//                     marginBottom: "40px",
//                   }}
//                 >
//                   <div className="box">
//                     <div className="ques">{question.Ques || question.ques}</div>
//                     <form>
//                       {["option1", "option2", "option3", "option4"].map(
//                         (option, index) => (
//                           <div key={index}>
//                             <label>
//                               <input
//                                 type="radio"
//                                 value={question[option]}
//                                 checked={
//                                   selectedOption[question._id] ===
//                                   question[option]
//                                 }
//                                 onChange={() =>
//                                   handleOptionChange(
//                                     question._id,
//                                     question[option]
//                                   )
//                                 }
//                               />
//                               {question[option]}
//                             </label>
//                           </div>
//                         )
//                       )}
//                     </form>
//                     <button className="submit" onClick={handleNextClick}>
//                       Next
//                     </button>
//                   </div>
//                 </div>
//               ))}
//           </>
//         ) : (
//           <h1>No questions available</h1>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Bform;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./Bform.css";

// function Bform() {
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [selectedOption, setSelectedOption] = useState({});
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

//   const handleOptionChange = (questionId, selectedOption) => {
//     setSelectedOption({ ...selectedOption, [questionId]: selectedOption });
//   };

//   const handleNextClick = () => {
//     // Increment the index to display the next question
//     setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//   };

//   const handlePreviousClick = () => {
//     // Decrement the index to display the previous question
//     setCurrentQuestionIndex((prevIndex) => Math.max(0, prevIndex - 1));
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/gettest");
//         console.log("Response:", response.data);
//         setQuestions(response.data.test);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError(true);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="Bformcontainer">
//       <div className="row justify-content-center mt-5">
//         {loading ? (
//           <h1>Loading...</h1>
//         ) : error ? (
//           <h1>Error</h1>
//         ) : questions.length > 0 ? (
//           <>
//             {questions
//               .slice(currentQuestionIndex, currentQuestionIndex + 1)
//               .map((question, i) => (
//                 <div
//                   className="col-md-9 mt-2"
//                   key={i}
//                   style={{
//                     marginBottom: "40px",
//                   }}
//                 >
//                   <div className="box">
//                     <div className="ques">{question.Ques || question.ques}</div>
//                     <form>
//                       {["option1", "option2", "option3", "option4"].map(
//                         (option, index) => (
//                           <div key={index}>
//                             <label>
//                               <input
//                                 type="radio"
//                                 value={question[option]}
//                                 checked={
//                                   selectedOption[question._id] ===
//                                   question[option]
//                                 }
//                                 onChange={() =>
//                                   handleOptionChange(
//                                     question._id,
//                                     question[option]
//                                   )
//                                 }
//                               />
//                               {question[option]}
//                             </label>
//                           </div>
//                         )
//                       )}
//                     </form>
//                     <div className="button-container">
//                       <button
//                         className="previous"
//                         onClick={handlePreviousClick}
//                       >
//                         Previous
//                       </button>
//                       <button className="submit" onClick={handleNextClick}>
//                         Next
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </>
//         ) : (
//           <h1>No questions available</h1>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Bform;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Bform.css";

function Bform() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [result, setResult] = useState(null);

  const handleOptionChange = (questionId, selectedOption) => {
    setSelectedOptions({ ...selectedOptions, [questionId]: selectedOption });
  };

  const handleNextClick = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousClick = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleFinishClick = () => {
    // Calculate the result based on user responses
    const userResult = calculateResult();
    setResult(userResult);
  };

  const calculateResult = () => {
    // Add your logic to calculate the result based on user responses
    // For example, you can compare the selected options with the correct answers

    const correctAnswers = questions.map((question) => question.correctans);
    let score = 0;

    for (const [questionId, selectedOption] of Object.entries(
      selectedOptions
    )) {
      const question = questions.find((q) => q._id === questionId);
      if (question && selectedOption === question.correctans) {
        score++;
      }
    }

    return score;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/gettest");
        console.log("Response:", response.data);
        setQuestions(response.data.test);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Bformcontainer">
      <div className="row justify-content-center mt-5">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : questions.length > 0 ? (
          <>
            {questions
              .slice(currentQuestionIndex, currentQuestionIndex + 1)
              .map((question, i) => (
                <div
                  className="col-md-9 mt-2"
                  key={i}
                  style={{
                    marginBottom: "40px",
                  }}
                >
                  <div className="box">
                    <div className="ques">{question.Ques || question.ques}</div>
                    <form>
                      {["option1", "option2", "option3", "option4"].map(
                        (option, index) => (
                          <div key={index}>
                            <label>
                              <input
                                type="radio"
                                value={question[option]}
                                checked={
                                  selectedOptions[question._id] ===
                                  question[option]
                                }
                                onChange={() =>
                                  handleOptionChange(
                                    question._id,
                                    question[option]
                                  )
                                }
                              />
                              {question[option]}
                            </label>
                          </div>
                        )
                      )}
                    </form>
                    <div className="button-container">
                      {currentQuestionIndex > 0 && (
                        <button
                          className="previous"
                          onClick={handlePreviousClick}
                        >
                          Previous
                        </button>
                      )}
                      {currentQuestionIndex < questions.length - 1 ? (
                        <button className="submit" onClick={handleNextClick}>
                          Next
                        </button>
                      ) : (
                        <button className="finish" onClick={handleFinishClick}>
                          Finish
                        </button>
                      )}
                    </div>
                    {result !== null && (
                      <div className="result">
                        <h2>Your Result: {result}</h2>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </>
        ) : (
          <h1>No questions available</h1>
        )}
      </div>
    </div>
  );
}

export default Bform;
