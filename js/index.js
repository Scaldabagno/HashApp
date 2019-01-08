// Invertire tutto, gli if del dropdown devono stare all'interno dell'evento

document.getElementById('cryptoSelect').value = "MD5";
var hash1 = document.getElementById('hash');
hash1.addEventListener('click', hashFunction, false);
var copyHash1 = document.getElementById('copyHash');
copyHash1.addEventListener('click', copyHashFunction, false)

function hashFunction(){
    // Verifies Dropdown value
    var choice = document.getElementById('cryptoSelect').value;
    switch(choice){
        case "MD5":
                var input = document.getElementById('input').value;
                var hash = CryptoJS.MD5(input);
                document.getElementById('output').value = hash;
                break;
        case "SHA-1":
                var input = document.getElementById('input').value;
                var hash = CryptoJS.SHA1(input);
                document.getElementById('output').value = hash;
                break;
        case "SHA-224":
                var input = document.getElementById('input').value;
                var hash = CryptoJS.SHA224(input);
                document.getElementById('output').value = hash;
                break;
        case "SHA-256":
                var input = document.getElementById('input').value;
                var hash = CryptoJS.SHA256(input);
                document.getElementById('output').value = hash;
                break;
        case "SHA-384":
                var input = document.getElementById('input').value;
                var hash = CryptoJS.SHA384(input);
                document.getElementById('output').value = hash;
                break;
        case "SHA-512":
                var input = document.getElementById('input').value;
                var hash = CryptoJS.SHA512(input);
                document.getElementById('output').value = hash;
                break;
        case "SHA-3":
                var input = document.getElementById('input').value;
                var hash = CryptoJS.SHA3(input);
                document.getElementById('output').value = hash;
                break;
        default:
                console.log("No Encryption selected");
        }
}

function copyHashFunction(){
    var copyText = document.getElementById("output");
    copyText.select();
    document.execCommand("copy");
    console.log("Copied the text: " + copyText.value);
}
