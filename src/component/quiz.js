import React from 'react'
import { useState } from 'react';
import classes from './quiz.module.css'
const questions = [
    {
      text: "which veda for medicine",
      options: [
        { id: 0, text: "Rigveda", isCorrect: false },
        { id: 1, text: "Yajurveda", isCorrect: false },
        { id: 2, text: "Samaveda", isCorrect: false },
        { id: 3, text: "Atharvaveda", isCorrect: true },
      ],
    },
    {
      text: "Which animal lays eggs",
      options: [
        { id: 0, text: "Duck", isCorrect: true },
        { id: 1, text: "Dog", isCorrect: false },
        { id: 2, text: "Cat", isCorrect: false },
        { id: 3, text: "Sheep", isCorrect: false },
      ],
    },
    {
      text: "A male cow is called?",
      options: [
        { id: 0, text: "Ox", isCorrect: true },
        { id: 1, text: "Dog", isCorrect: false },
        { id: 2, text: "Sheep", isCorrect: false },
        { id: 3, text: "Monkey", isCorrect: false },
      ],
    },
    {
      text: "All animals need food, air, and ____ to survive",
      options: [
        { id: 0, text: "House", isCorrect: false },
        { id: 1, text: "water", isCorrect: true },
        { id: 2, text: "chocolate", isCorrect: false },
        { id: 3, text: "Fruits", isCorrect: false },
      ],
    },
    {
      text: "Which one is a fur-bearing animal?",
      options: [
        { id: 0, text: "Hen", isCorrect: false },
        { id: 1, text: "Cat", isCorrect: true },
        { id: 2, text: "Tortose", isCorrect: true },
        { id: 3, text: "Crocodile", isCorrect: false },
      ],
    },
  ];

const Quiz = () => {
const [finalResults,setFinalResults]=useState(false)
const [score,setScore]=useState(0)
const [currentquestion,setQuestion]=useState(0)

function optionClicked(isCorrect){
   if(isCorrect){
    setScore(score+1)
   }
   if(currentquestion+1<questions.length){
    setQuestion(currentquestion+1)
   }
   else{
    setFinalResults(true)
   }
   
}

const Restart=()=>{
    setScore(0)
    setQuestion(0)
    setFinalResults(false)
}
  return (
    <div className={classes.app}>
        <h1>Quiz</h1>
        <h2>Current Score:{score}</h2>
        {finalResults?
           <div className={classes.results}>
           <h1>Final Results</h1>
           <h2>
              {score} out {questions.length} correct-({(score/questions.length)*100}%)
           </h2>
           <button onClick={()=>Restart()}>Restart Again</button>
      </div>:
      <div className={classes.card}>
      <h2>Question {currentquestion+1} out of {questions.length}</h2>
      <h3 className={classes.text}>{questions[currentquestion].text}</h3>
      <ul className={classes.ul}>
          {questions[currentquestion].options.map((option)=>{
              return (
                <li onClick={()=>optionClicked(option.isCorrect)}  key={option.id} className={classes.li}>{option.text}</li>
              )
          })}
      </ul>
      </div>
        }
    </div>
  )
}

export default Quiz; 