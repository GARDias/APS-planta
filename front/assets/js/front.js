function encodeImagetoBase64(element) {

    var file = element.files[0];

    var img64 = null;

    var reader = new FileReader();

    reader.onloadend = function() {

        img64 = reader.result;
        document.getElementById('result-image').src = img64;
        document.getElementById('container-inicial').style.display = 'none';
        document.getElementById('container-final').style.display = 'block';
    }

    reader.readAsDataURL(file);

  }


