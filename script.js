
function generate() {
  console.log("hello")
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let dob = document.getElementById("dob").value;
  let title = document.getElementById("title").value;
  let workas = document.getElementById("workas").value;
  let workwith = document.getElementById("workwith").value;
  let reside = document.getElementById("reside").value;
  let deg = document.getElementById("deg").value;
  let area = document.getElementById("area").value;
  let uni = document.getElementById("uni").value;
  let cert = document.getElementById("cert").value;
  let over = document.getElementById("over").value;
  let chal = document.getElementById("chal").value;
  let traits = document.getElementById("traits").value;
  let always = document.getElementById("always").value;
  let bkf = document.getElementById("bkf").value;
  let quote = document.getElementById("quote").value;
  if (fname.length <1) {
    return;
  }
  var bio = fname+" "+lname+" is a/an "+title+" who works with "+workwith+" as a/an "+workas+". \n Born in "+dob+" Currently Reside in "+reside+". \n"+fname+" holds a "+deg+" in "+area+" from "+uni+". \n"+fname+" is a trained/certified/awarded in "+cert+". "+fname+" Has Overcame "+over+". \n"+fname+" Stands up for "+chal+". \n"+fname+" personal traits and qualities "+traits+". "+fname+" always does "+always+". "+fname+" is best known for "+bkf+".\n A quote that "+fname+" lives by is "+quote
  document.getElementById("input_page").style.display = "none";
  document.getElementById("bio_page").style.display = "block";
  document.getElementById("bio_text").innerHTML = bio;
  document.getElementById("bio_text").style.marginTop = "20px";
  document.getElementById("reload").style.display = "block";
  document.getElementById("copytext").style.display = "block";
}

