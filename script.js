  function playVid() {
      var vid = document.getElementById("myVideo");
      vid.play();}

  function handleSubmit(event) {
    var first=document.getElementById("fName").value;
    var second=document.getElementById("lName").value;
    //document.getElementById("lName").value="";
    localStorage.first=first;
    localStorage.second=second;

    var mailId=document.getElementById("mailId").value;
    localStorage.mailId=mailId;

    var urCity=document.getElementById("urCity").value;
    localStorage.urCity=urCity;

    var ages=document.getElementById("ages").value;
    localStorage.ages=ages;

    var txtarea=document.getElementById("txtarea").value;
    localStorage.txtarea=txtarea;

    if (localStorage.first!= null && !localStorage.first == '' && !localStorage.mailId== '' && !localStorage.txtarea == '') {
    document.getElementById("displayName").innerHTML= "Name: "+first.concat(" "+second);
    document.getElementById("mail").innerHTML= "Email: "+mailId;
    document.getElementById("age").innerHTML= "Age: "+ages;
    document.getElementById("city").innerHTML= "City: "+urCity;
    document.getElementById("choice").innerHTML= "Next week's choice: "+txtarea;}
  }
   window.onload=function()  {
      if (localStorage.first!= null && !localStorage.first == '' && !localStorage.mailId== '' && !localStorage.txtarea == '') {
      document.getElementById("displayName").innerHTML= "Name: "+localStorage.first.concat(" "+localStorage.second);
      document.getElementById("mail").innerHTML="Email: "+localStorage.mailId;
      document.getElementById("city").innerHTML="City: "+localStorage.urCity;
      document.getElementById("age").innerHTML="Age: "+localStorage.ages;
      document.getElementById("choice").innerHTML= "Next week's choice: "+localStorage.txtarea;}

      date =  new Date();
      year = date.getFullYear();
      month = date.getMonth() + 1;
      date = date.getDate();
      document.getElementById("date").innerHTML = date + "/" + month + "/" + year;
    }
