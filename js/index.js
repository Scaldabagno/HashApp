function hash(){

    console.log($('#cryptoSelect').val());
    if($('#cryptoSelect').val() === "MD5"){
        $('#hash').click(function(event){
            var input = document.getElementById('input').value;
            var hash = CryptoJS.MD5(input);
            document.getElementById('output').value = hash;
            return true;
            });
        }if($('#cryptoSelect').val() === "SHA-1"){
            $('#hash').click(function(event){
            var input = document.getElementById('input').value;
            var hash = CryptoJS.SHA1(input);
            document.getElementById('output').value = hash;
            return true;
            });
        }if($('#cryptoSelect').val() === "SHA-256"){
            $('#hash').click(function(event){
            var input = document.getElementById('input').value;
            var hash = CryptoJS.SHA256(input);
            document.getElementById('output').value = hash;
            return true;
            });
        }if($('#cryptoSelect').val() === "SHA-384"){
            $('#hash').click(function(event){
            var input = document.getElementById('input').value;
            var hash = CryptoJS.SHA384(input);
            document.getElementById('output').value = hash;
            return true;
            });
        }if($('#cryptoSelect').val() === "SHA-512"){
            $('#hash').click(function(event){
            var input = document.getElementById('input').value;
            var hash = CryptoJS.SHA512(input);
            document.getElementById('output').value = hash;
            return true;
            });
        }

    $('#cryptoSelect').on('click',function() {
        console.log($('#cryptoSelect').val());
        if($('#cryptoSelect').val() === "MD5"){
            $('#hash').click(function(event){
            var input = document.getElementById('input').value;
            var hash = CryptoJS.MD5(input);
            document.getElementById('output').value = hash;
            return true;
            });
        }if($('#cryptoSelect').val() === "SHA-1"){
            $('#hash').click(function(event){
            var input = document.getElementById('input').value;
            var hash = CryptoJS.SHA1(input);
            document.getElementById('output').value = hash;
            return true;
            });
        }if($('#cryptoSelect').val() === "SHA-256"){
            $('#hash').click(function(event){
            var input = document.getElementById('input').value;
            var hash = CryptoJS.SHA256(input);
            document.getElementById('output').value = hash;
            return true;
            });
        }if($('#cryptoSelect').val() === "SHA-384"){
            $('#hash').click(function(event){
            var input = document.getElementById('input').value;
            var hash = CryptoJS.SHA384(input);
            document.getElementById('output').value = hash;
            return true;
            });
        }if($('#cryptoSelect').val() === "SHA-512"){
            $('#hash').click(function(event){
            var input = document.getElementById('input').value;
            var hash = CryptoJS.SHA512(input);
            document.getElementById('output').value = hash;
            return true;
            });
        }
    });

    $('#reset').on('click',function() {
        $('#hash').click(function(event){
            var input = document.getElementById('input').value;
            var hash = CryptoJS.MD5(input);
            document.getElementById('output').value = hash;
            return true;
        });
    });
}


$(document).ready(hash);