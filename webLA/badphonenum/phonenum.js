console.log(numberToWords.toWords(13)); // => “thirteen”

let numinput = "";

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

    console.log(numinput);
}

function secondsubmit(){

    let spellinput = document.getElementById("spellInputtext").value.toLowerCase();
    console.log(numberToWords.toWords(parseInt(document.getElementById("numInput").value)));

    if (numberToWords.toWords(parseInt(document.getElementById("numInput").value)) != spellinput) {
        document.getElementById("failmessage").style.display = "block";
        document.getElementById("congratsmessage").style.display = "none";
    }
    else {
        document.getElementById("congratsmessage").style.display = "block";
        document.getElementById("failmessage").style.display = "none";
    }

    
    // console.log(spellinput);

    // let fetchurl = "https://api.funtranslations.com/translate/numbers.json?text=" + document.getElementById("numInput").value;
    
    // console.log(fetchurl);

    // fetch(fetchurl)
    // .then((response) => response.json())
    // .then((data) => {
    //     console.log(data.contents.translated);
    //     console.log(spellinput);
    //     if (data.contents.translated.toLowerCase() != spellinput) {
    //         alert("try again sweaty");
    //     }     
    //     else {
    //         document.getElementById("congratsmessage").style.display = "block";
    //     }
    //   })
}

