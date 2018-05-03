var i;
var result=[];
var input= parseInt(prompt("Enter a number: "));
for(i=1;i<=input;i++)
{
  if(i%3===0)
  {
    continue;
  }
  else if (i%5===0)
  {
    continue;
  }
  else if (i%15===0)
  {
    continue;
  }

   result+=i+",";
}
