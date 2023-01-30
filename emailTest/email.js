function email(){
  var data = {
        'message' : 'this is a test message'
    };
    $.ajax({
        url: 'email.php',
        data: data,
        type: 'POST',
        success: function (data) {
      // For Notification

            if(data.error){
                alert("errer");
            }else{
                alert('success');
            }
        }
    });
}
