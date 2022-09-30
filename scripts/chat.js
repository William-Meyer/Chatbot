
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
