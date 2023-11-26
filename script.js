const url = "https://api.adviceslip.com/advice";

function getAdvice()
{
  var refToAdiveNo = document.getElementById("advice-no");
  var refToAdviceText = document.getElementById("advice-text");

  var helper = new XMLHttpRequest();

  helper.onreadystatechange = () => {
    if (helper.readyState == 4 && helper.status == 200) {
      var obj = JSON.parse(helper.responseText);
      refToAdiveNo.innerText=`Advice #${obj.slip.id}`;
      refToAdviceText.innerText=`${obj.slip.advice}`;
    }
  };

  helper.open("GET", url);
  helper.send();
}
