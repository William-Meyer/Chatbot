





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
  getTags(){
    theList = []
    for(let i = 0; i < tags.length; i++){
      theList.push(tags[i]);
    }
    return theList;
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

var questionList = [new question("what is the name of this site?", ["name","called","named","site"], false, [],false,[],"NEXT GEN TECH CONGLOMERATE is the name of this site.  CEO is William Meyer, assistant TO the CEO is Caden Watts","name"),new question("Who is the CEO?", ["ceo","boss","creator","meyer", "name"], false, [],false,[],"CEO is William Meyer, assistant TO the CEO is Caden Watts","ceo")]
//controll flow of chat
var currentQuestion;//current user question
//question list

//func on question click click function for class
function chatTyping(){
  let keyword = "";
  optionshtml = "";
  var possibleQuestions = [];
  //use keyword along with tags to search for questions and dispaly them as blocks
  input = document.getElementById('questionBox');
  text = input.value.toLowerCase();
  let words = text.split(" ");
  const ages = [32, 33, 16, 40];
  words = words.filter(function checkSpaces(words) {
    return  words != "";
  })

  if (words.length > 1 ){
    let theWord = words[words.length-1];
    theWord = theWord.split("");
    theWord = theWord.filter(function filterPunc(word){
      index = word.length -1
      theBool = (word[index] != '?' || word[index] != '.')
      console.log(word[index] + '---' + theBool);
      return theBool;
    })
    for(let i = 0; i < theWord.length; i++){
      keyword += theWord[i];
    }
  }
  console.log(keyword);
  if(words.length > 1){
      keywordLength = keyword.length;
      for (let i = 0; i < questionList.length; i++) {
        orginalLength = possibleQuestions.length;
        for(let j = 0; j < questionList[i].tags.length; j++){
          if(questionList[i].tags[j].substring(0, keywordLength) == keyword && possibleQuestions.length == orginalLength){
            possibleQuestions.push(questionList[i]);
            break;
          }
        }
      }
  }
  for (let i = 0; i < possibleQuestions.length; i++) {
    optionshtml += '<button type="button" name="button" class = "option">'+possibleQuestions[i].text+'</button>';
  }
  document.getElementById("options").innerHTML = optionshtml;
}

function sendClicked(){
  //current question anaswer = interiror of answer box if there is a current question
}
//multiple answer on click set answer of current question to the block set current question to none
