// Invertire tutto, gli if del dropdown devono stare all'interno dell'evento

document.getElementById('cryptoSelect').value = "MD5";
var hash1 = document.getElementById('hash');
hash1.addEventListener('click', hashFunction, false);
var copyHash1 = document.getElementById('copyHash');
copyHash1.addEventListener('click', copyHashFunction, false)

function hashFunction(){
    // Verifies Dropdown value
    if(document.getElementById('cryptoSelect').value === "MD5"){
            var input = document.getElementById('input').value;
            var hash = CryptoJS.MD5(input);
            document.getElementById('output').value = hash;
            return true;
    }if(document.getElementById('cryptoSelect').value === "SHA-1"){
            var input = document.getElementById('input').value;
            var hash = CryptoJS.SHA1(input);
            document.getElementById('output').value = hash;
            return true;
    }if(document.getElementById('cryptoSelect').value === "SHA-224"){
            var input = document.getElementById('input').value;
            var hash = CryptoJS.SHA224(input);
            document.getElementById('output').value = hash;
            return true;
    }if(document.getElementById('cryptoSelect').value === "SHA-256"){
            var input = document.getElementById('input').value;
            var hash = CryptoJS.SHA256(input);
            document.getElementById('output').value = hash;
            return true;
    }if(document.getElementById('cryptoSelect').value === "SHA-384"){
            var input = document.getElementById('input').value;
            var hash = CryptoJS.SHA384(input);
            document.getElementById('output').value = hash;
            return true;
    }if(document.getElementById('cryptoSelect').value === "SHA-512"){
            var input = document.getElementById('input').value;
            var hash = CryptoJS.SHA512(input);
            document.getElementById('output').value = hash;
            return true;
    }if(document.getElementById('cryptoSelect').value === "SHA-3"){
            var input = document.getElementById('input').value;
            var hash = CryptoJS.SHA3(input);
            document.getElementById('output').value = hash;
            return true;
    }
}

function copyHashFunction(){
    var copyText = document.getElementById("output");
    copyText.select();
    document.execCommand("copy");
    console.log("Copied the text: " + copyText.value);
}
