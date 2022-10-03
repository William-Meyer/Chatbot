class question {
  //         string list  bool        list          bool        list             string     string
  constructor(text, tags, hasPrev, prevQuestionID, hasFallow, fallowQuestionID, response, id) {
    this.text = text;
    this.tags = tags;
    this.hasPrev = hasPrev;
    this.prevQuestion = prevQuestion;
    this.hasFallow = hasFallow;
    this.fallowQuestion = fallowQuestion;
    this.response = response;
  }
  click(){
    if(hasPrev){
      //for through prevquestions
      //search userQuestions for prevQuestionID
    }
    else{
      //print resposne
    }
    if(hasFallow){
      //search userQuestions for fallowQuestionID
    }
  }
}
class userQuestion{
  constructor(text, id, orginalID,isChoice, hasFallow, fallowQuestionID, hasPrev, prevQuestionID){
    this.text = text;
    this.id = id;
    this.orginalID = orginalID;
    this.isChoice = isChoice;
    this.hasFallow = hasFallow;
    this.hasPrev = hasPrev;
    this.prevQuestionID = prevQuestionID;
  }
  getResponse(){
    //function to change question text
    if(isChoice){
      //display choices as buttons
    }
    else{
      //text box answer
    }
  }
}
//create userQuestions, create asking function


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
