class question {
  //     html string list  bool        list          bool        list             string     string
  constructor(text, tags, hasPrev, prevQuestionID, hasFallow, fallowQuestionID, response, id) {
    this.text = text;
    this.tags = tags;
    this.hasPrev = hasPrev;
    this.prevQuestion = prevQuestion;
    this.hasFallow = hasFallow;
    this.fallowQuestion = fallowQuestion;
    this.response = response;
  }
  //iterates through prev questions to ask them then responds then ask fallow up questions
  click(){
    changeQuestion(text);
    if(hasPrev){
      for (let i = 0; i < prevQuestionID.length; i++) {
            for(let j = 0; j<userQuestions.length; i++){
              if(prevQuestionID[i] == userQuestions[j].getID()){
                if(!(userQuestion[j].hasResponse()))
                userQuestion[j].getResponse();
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
                userQuestion[j].getResponse();
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
  }
  getID(){
    return id;
  }
  hasResponse(){
    return hasResponse;
  }
  getResponse(){
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
    //needs implementation
  }
}
//create userQuestions, create asking function
function changeQuestion(text){
  document.getElementById("question").innerHTML = text;
}

function toggleChatWindow(){
  $( "#chatWindow" ).slideToggle();
  stop();
}
function chatTyping(){
  input = document.getElementById('questionBox');
  text = input.value.toUpperCase();
  const words = text.split(" ");
  if (words.length > 1){
    keyword = words[words.length-1];
  }
}
