(function($) {
  $(function() {

    $('#container').hover(function(){
      if($(window).width() > 1100){
      $('#learnContents').slideUp();
      $('#RYFContents').slideUp();
      $('#resourcesContents').slideUp();
    }
    });
    $('#RYF').hover(function(){
      if($(window).width() > 1100){
        $('#learnContents').slideUp();
        $('#RYFContents').slideDown();
        $('#resourcesContents').slideUp();
      }
    }
  );
    $('#resources').hover(function(){
      if($(window).width() > 1100){
        $('#learnContents').slideUp();
        $('#RYFContents').slideUp();
        $('#resourcesContents').slideDown();}
    }
  );
    $('#about').hover(function(){
      if($(window).width() > 1100){
        $('#learnContents').slideUp();
        $('#RYFContents').slideUp();
        $('#resourcesContents').slideUp();}
    }
  );
    $('#quiz').hover(function(){
      if($(window).width() > 1100){
        $('#learnContents').slideUp();
        $('#RYFContents').slideUp();
        $('#resourcesContents').slideUp();}
    }
  );
    $('#learn').hover(function(){
      if($(window).width() > 1100){
        $('#learnContents').slideDown();
        $('#RYFContents').slideUp();
        $('#resourcesContents').slideUp();}
    }
  );
  $('#learn').click(function(){
    if($(window).width() <= 1100 && $('#learnContents').is(":hidden")){
      $("#learnContents").slideDown();
      $('#learnContents').show();
      $('#RYFContents').slideUp();
      $('#resourcesContents').slideUp();
    }
    else{
      $('#learnContents').slideUp();
    }
  });
  $('#quiz').click(function(){
    if($(window).width() <= 1100 ){
      $('#learnContents').slideUp();
      $('#RYFContents').slideUp();
      $('#resourcesContents').slideUp();
    }
  });
  $('#about').click(function(){
    if($(window).width() <= 1100){
      $('#learnContents').slideUp();
      $('#RYFContents').slideUp();
      $('#resourcesContents').slideUp();
    }
  });
  $('#resources').click(function(){
    if($(window).width() <= 1100 && $('#resourcesContents').is(":hidden")){
      $("#resourcesContents").slideDown();
      $('#learnContents').slideUp();
      $('#RYFContents').slideUp();
      $('#resourcesContents').show();
    }
    else{
      $('#resourcesContents').slideUp();
    }
  });
  $('#RYF').click(function(){
    if($(window).width() <= 1100 && $('#RYFContents').is(":hidden")){
      $("#RYFContents").slideDown();
      $('#learnContents').slideUp();
      $('#RYFContents').show();
      $('#resourcesContents').slideUp();
    }
    else{
      $('#RYFContents').slideUp();
    }
  });
  $('#container').click(function(){
    if($(window).width() <= 1100){
    $('#learnContents').slideUp();
    $('#RYFContents').slideUp();
    $('#resourcesContents').slideUp();}
  });


    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
      $('#learnContents').hide();
      $('#RYFContents').hide();
      $('#resourcesContents').hide();
    });
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  });
})(jQuery);
