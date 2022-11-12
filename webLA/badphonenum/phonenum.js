let numinput = "";

document.getElementById("numInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("firstSubmit").click();
    }
  });

  document.getElementById("spellInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("secondSubmit").click();
    }
  });

function firstsubmit(){
    numinput = document.getElementById("numInput").value;

    if (numinput.length != 10) {
        alert("not a valid phone number");
        return;
    }

    for (let char of numinput) {
        if (isNaN(char)) {
            alert("not a valid phone number");
            return;
        }
    }

    document.getElementById("spellInput").style.display = "block";
}

let correctAnswer = "";

function secondsubmit(){

    let spellinput = document.getElementById("spellInputtext").value.toLowerCase();
    correctAnswer = numberToWords.toWords(parseInt(document.getElementById("numInput").value));

    if (correctAnswer != spellinput) {
        document.getElementById("failmessage").style.display = "block";
        document.getElementById("failmessagept2").style.display = "block";
        document.getElementById("correctanswer").innerHTML = correctAnswer;
        document.getElementById("correctanswer").style.display = "block";
        document.getElementById("congratsmessage").style.display = "none";
    }
    else {
        document.getElementById("congratsmessage").style.display = "block";
        document.getElementById("failmessagept2").style.display = "none";
        document.getElementById("failmessage").style.display = "none";
        document.getElementById("correctanswer").style.display = "none";
    }

}

