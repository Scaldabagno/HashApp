function hash(){
    // Verifies Dropdown value
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
    // Verifies Dropdown value on click    
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
    // Reset Dropdown value to MD5
    $('#reset').on('click',function() {
        $('#hash').click(function(event){
            var input = document.getElementById('input').value;
            var hash = CryptoJS.MD5(input);
            document.getElementById('output').value = hash;
            return true;
        });
    });

    $('#copyHash').on('click',function() {
        var copyText = document.getElementById("output");
        copyText.select();
        document.execCommand("copy");
        console.log("Copied the text: " + copyText.value);
    });
}

$(document).ready(hash);