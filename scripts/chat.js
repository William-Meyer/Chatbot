





class question {
  //     html string list  bool        list          bool        list             string     string
  constructor(text, tags, hasPrev, prevQuestionID, hasFallow, fallowQuestionID, response, id) {
    this.text = text;
    this.tags = tags;
    this.hasPrev = hasPrev;
    this.prevQuestionID = prevQuestionID;
    this.hasFallow = hasFallow;
    this.fallowQuestionID = fallowQuestionID;
    this.response = response;
  }
  //iterates through prev questions to ask them then responds then ask fallow up questions
  //needs to set user question to current question
  click(){
    changeQuestion(text);
    if(hasPrev){
      for (let i = 0; i < prevQuestionID.length; i++) {
            for(let j = 0; j<userQuestions.length; i++){
              if(prevQuestionID[i] == userQuestions[j].getID()){
                if(!(userQuestion[j].hasResponse()))
                currentQuestion = userQuestion[j]
                userQuestion[j].setUpQuestion();
              }
          }
      }
    }
    else{
      print(response)
    }
    if(hasFallow){
      for (let i = 0; i < fallowQuestionID.length; i++) {
            for(let j = 0; j<userQuestions.length; i++){
              if(fallowQuestionID[j] == userQuestions[i].getID()){
                currentQuestion = userQuestion[j]
                userQuestion[j].setUpQuestion();
              }
          }
      }
    }
  }
}
class userQuestion{
  hasResponse = false;
  constructor(text, id, orginalID,isChoice,choices, hasFallow, fallowQuestionID, hasPrev, prevQuestionID){
    this.text = text;
    this.id = id;
    this.orginalID = orginalID;
    this.isChoice = isChoice;
    this.hasFallow = hasFallow;
    this.hasPrev = hasPrev;
    this.prevQuestionID = prevQuestionID;
    this.response = "";
    this.hasResponse = false;
  }
  getID(){
    return id;
  }
  hasResponse(){
    return hasResponse;
  }
  setUpQuestion(){
    changeQuestion(text);
    if(isChoice){
      displayChoices();
    }
  }
  getResponse(){//shouild be old leaving just in case
    changeQuestion(text);
    if(isChoice){
      response = displayChoices();
    }
    else{
      while(resposne == ""){
      document.getElementById('send').addEventListener('click', () => {
        response = document.getElementById('questionBox').value;
      });
    }
    }
    hasResponse = true;
  }
  displayChoices(){
    for (let i = 0; i < choices.length; i++) {
    document.getElementById('options').innerHTML = '<button type="button" name="button" class = "option">' + choices[i] + '</button>';
  }
}
}
//basic fucntions
function changeQuestion(text){
  document.getElementById("question").innerHTML = text;
}

function toggleChatWindow(){
  $( "#chatWindow" ).slideToggle();
  stop();
}
//function on start use json to create questions and add them to teh list

var questionList = [new question("what is the name of this site?", ["name","called","named","site"], false, [],false,[],"NEXT GEN TECH CONGLOMERATE is the name of this site.  CEO is William Meyer, assistant TO the CEO is Caden Watts","name"),new question("what is the name of this site?", ["name","called","named","site"], false, [],false,[],"NEXT GEN TECH CONGLOMERATE is the name of this site.  CEO is William Meyer, assistant TO the CEO is Caden Watts","name"),new question("Who is the CEO?", ["ceo","boss","creator","meyer"], false, [],false,[],"CEO is William Meyer, assistant TO the CEO is Caden Watts","ceo")]
//controll flow of chat
var currentQuestion;//current user question
//question list

//func on question click click function for class
function chatTyping(){
  var possibleQuestions = []
  //use keyword along with tags to search for questions and dispaly them as blocks
  input = document.getElementById('questionBox');
  text = input.value.toLowerCase();
  const words = text.split(" ");
  if (words.length > 1){
    keyword = words[words.length-1];
  }
  if(words.length > 1){
      for (let i = 0; i < questionList.length; i++) {
        if(questionList[i].tags.includes(keyword)){
          possibleQuestions.push(questionList[i]);
        }
      }
  }
  console.log("possible questions:")
  for (let i = 0; i < possibleQuestions.length; i++) {
    console.log(possibleQuestions[i].response);
  }
}

function sendClicked(){
  //current question anaswer = interiror of answer box if there is a current question
}
//multiple answer on click set answer of current question to the block set current question to none
