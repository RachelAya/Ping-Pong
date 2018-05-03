var Numbers;
var str='';

$(document).ready(function()
{
  //Business Logic
  function condition(){
    for(var i=1;i<=Numbers;i++){
      if((i % 3==0) && (i % 5==0)){
        str+='pingpong';
      }
      else if(i % 5==0){
      str+='pong';
      }
      else if(i % 3==0){
       str+='ping';
      }
      else{
       str+=i.toString();
      }
      if(i!=Numbers){
         str+=',';
      }
    }
    $('.answer').text(str);
    $('#result').show();
    str='';
  }

  //user interface
  $("form#pingpong").submit(function(event)
{
  Numbers=parseInt($('#input').val());
  condition();
  $('#input').val('');
  event.preventDefault();
});


});
