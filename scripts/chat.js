
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
  getResponse(){
    if(this.response.includes('~')){

      // find id
      let newResponse = this.response.split('~')
      let finalList = "";
      for(let i = 0; i<newResponse.length; i++){
        if(i != 0 && i%2 != 0){
          console.log(newResponse[i]);
          finalList = finalList+(findUserQuestionByID(newResponse[i]).response)
        }
        else{
          finalList = finalList + newResponse[i];
        }
      }
      return finalList;
    }
    else{
      return this.response
    }
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
  constructor(text, id,isChoice,choices, hasFallow, fallowQuestionID, hasPrev, prevQuestionID){
    this.text = text;
    this.id = id;
    this.isChoice = isChoice;
    this.hasFallow = hasFallow;
    this.hasPrev = hasPrev;
    this.prevQuestionID = prevQuestionID;
    this.response = "";
    this.hasResponse = false;
    this.choices = choices;
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
function findUserQuestionByID(id){
  console.log(userQuestions.length);
  for(let i = 0; i<userQuestions.length; i++){
    if(userQuestions[i].id == id){
      return userQuestions[i];
    }
  }
}

//function on start use json to create questions and add them to teh list
var userQuestions = [
new userQuestion("What is your name?","chatterName", false, "", false, "" ),
new userQuestion("What is your age?","chatterAge", true,["18","19","20"], false, "" ),
new userQuestion("What is your email?","chatterEmail", false, "", false, "" ),
new userQuestion("What type of car do you want","bodyType", true,['sadan','suv','truck','van','electric'],false,""),
new userQuestion("What color car do you want","carColor",false,[],false,[])
];
var questionList = [
new question("I am interested in buying a car",['car','buy','suv','vehicle','purchase','cost'],true,['chatterName','bodyType','carColor'],false,[],"Thank you so much ~chatterName~, we look into finding a ~carColor~ ~bodyType~. Feel free to ask more questions!","buyCar"),
new question("I want to apply for a job", ["job","apply","application","work","money","employee", "manager", "employer"], true, ["chatterName", "chatterAge"], true,["chatterEmail"],"Thank you so much ~chatterName~! If you provide your email we will get back to you as soon as possible","apply")
]
//controll flow of chat
var currentQuestion = 'null';//current user question
var currentUser;
//question list
var fallowIndex = 0
var prevIndex = 0
//func on question click click function for class
function chatTyping(){
  optionshtml = "";
  if (currentQuestion == 'null'){
  if(!(document.getElementById("options").contains(document.getElementById("optionContainter")))){
  document.getElementById("options").innerHTML += "<div id = 'optionContainter'></div>";
  }
  let keyword = "";
  optionshtml = "";
  var possibleQuestions = [];
  //use keyword along with tags to search for questions and dispaly them as blocks
  input = document.getElementById('questionBox');
  text = input.value.toLowerCase();
  let words = text.split(" ");
  words = words.filter(function checkSpaces(words) {
    return  words != "";
  })

  if (words.length > 1 ){
    let theWord = words[words.length-1];
    theWord = theWord.split("");
    theWord = theWord.filter(function filterPunc(word){
      index = word.length -1
      theBool = (word[index] != '?') && (word[index] != '.')
      return theBool;
    })
    for(let i = 0; i < theWord.length; i++){
      keyword += theWord[i];
    }
  }
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
    optionshtml += '<button type="button" data-type = "optionButton" data-text = "' + possibleQuestions[i].text + '" name="button" onclick="questionClick(this)" class = "option">'+possibleQuestions[i].text+'</button>';
  }
  document.getElementById("optionContainter").innerHTML = optionshtml;
  var messageBody = document.querySelector('#options');
  messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
}
}

function questionClick(button){
  text = button.getAttribute("data-text");
  buttonType = button.getAttribute("data-type");
  if(currentQuestion == "null" && buttonType == 'send'){
    return;
  }
  if(buttonType == 'optionButton'){
    document.getElementById("optionContainter").remove();
    for(let i = 0; i < questionList.length; i++){
      if(text == questionList[i].text){
        currentQuestion = questionList[i];
        break;
      }
    }
    document.getElementById("options").innerHTML += '<div class="bubble bubble-bottom-right bubbleRight"> <p>' + currentQuestion.text + '</p></div>'
    var messageBody = document.querySelector('#options');
    messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
  }
  else if((buttonType == 'send') && (currentUser != null) && (currentQuestion != "null")){
    input = document.getElementById('questionBox');
    textBox = input.value;
    currentUser.response = textBox;
    currentUser.hasResponse = true;
    document.getElementById("options").innerHTML += '<div class="bubble bubble-bottom-right bubbleRight"> <p>' + textBox + '</p></div>'
    var messageBody = document.querySelector('#options');
    messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
  }
  else if((buttonType == 'multipleAnswer') && (currentUser != null) && (currentQuestion != "null")){
    currentUser.response = button.innerHTML;
    currentUser.hasResponse = true;
    document.getElementById("optionContainter").remove();
    document.getElementById("options").innerHTML += '<div class="bubble bubble-bottom-right bubbleRight"> <p>' + button.innerHTML + '</p></div>';
    var messageBody = document.querySelector('#options');
    messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
  }
  document.getElementById("questionBox").value = '';
  document.getElementById("questionBox").focus();
  document.getElementById("questionBox").select();
  if(currentQuestion.hasPrev){
    for (let i = 0; i < currentQuestion.prevQuestionID.length; i++){
      theID = currentQuestion.prevQuestionID[i]
      for (let j = 0; j < userQuestions.length; j++){
        if((currentQuestion.prevQuestionID[i] == userQuestions[j].id) && userQuestions[j].hasResponse == false){
          currentUser = userQuestions[j];
          document.getElementById("options").innerHTML += '<div class="bubble bubble-bottom-left bubbleLeft"> <p>' + currentUser.text + '</p></div>';
          var messageBody = document.querySelector('#options');
          messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
          if(currentUser.isChoice){
            newhtml = "";
            for(let z = 0;z<currentUser.choices.length; z++){
              newhtml += '<button type="button" data-type = "multipleAnswer" data-text = "' + currentUser.choices[z] + '" name="button" onclick="questionClick(this)" class = "option">'+currentUser.choices[z]+'</button>';
            }
            document.getElementById("options").innerHTML += "<div id = 'optionContainter'>" + newhtml + "</div>";
            var messageBody = document.querySelector('#options');
            messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
          }
          return;
        }
      }
    }
  }
  document.getElementById("options").innerHTML += '<div class="bubble bubble-bottom-left bubbleLeft"> <p>' + currentQuestion.getResponse() + '</p></div>';
  var messageBody = document.querySelector('#options');
  messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
  if(currentQuestion.hasFallow){
    for (let i = 0; i < currentQuestion.fallowQuestionID.length; i++){
      theID = currentQuestion.fallowQuestionID[i]
      for (let j = 0; j < userQuestions.length; j++){
        if((currentQuestion.fallowQuestionID[i] == userQuestions[j].id) && userQuestions[j].hasResponse == false){
          currentUser = userQuestions[j];
          document.getElementById("options").innerHTML += '<div class="bubble bubble-bottom-left bubbleLeft"> <p>' + currentUser.text + '</p></div>';
          var messageBody = document.querySelector('#options');
          messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
          return;
        }
      }
    }
  }
  currentQuestion = 'null';
  //current question anaswer = interiror of answer box if there is a current question
}
document.addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode == 13) {
    questionClick(document.getElementById("send"))
  }
  // do something
});
//multiple answer on click set answer of current question to the block set current question to none
