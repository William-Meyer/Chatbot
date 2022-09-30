class question {
  constructor(text, tags, hasPrev, prevQuestion, hasFallow, fallowQuestion, response) {
    this.text = text;
    this.tags = tags;
    this.hasPrev = hasPrev;
    this.prevQuestion = prevQuestion;
    this.hasFallow = hasFallow;
    this.fallowQuestion = fallowQuestion;
    this.response = response;
  }
  click(){
    
  }
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
