﻿//$(document).ready(function () {
//    $("#uploding").change(function () {
//        var imge1 = $("#imgs").val();
//        alert(imge1);
//        var html = '<img src="' + imge1 + '" style="height:30px;width:30px;"/>';
//        $(".upload").append(html);


//    })
//});
//$(document).ready(function () {
//    $("#uploding").change(function () {
//        var formData = new FormData();
//       // var totalFiles = document.getElementById("FileUpload").files.length;
//       // for (var i = 0; i < totalFiles; i++) {
//           // var file = document.getElementById("FileUpload").files[i];

//           // formData.append("FileUpload", file);
//        }
//        $.ajax({
//            type: "POST",
//            url: '/Products/Upload',
//            data: formData,
//            dataType: 'json',
//            contentType: false,
//            processData: false,
//            success: function (response) {
//                alert('succes!!');
//            },
//            error: function (error) {
//                alert("errror");
//            }
//        });
//    });
//});
$(document).ready(function () {
    $("#uploding").change(function () {
        var formData = new FormData();
        //var totalFiles = document.getElementById("FileUpload").files.length;
        //for (var i = 0; i < totalFiles; i++) {
        //    var file = document.getElementById("FileUpload").files[i];
        var file1 = $("#uploding").get(0).files;
        var file = document.getElementById("uploding").file;
        
        if (file1.length > 0) {
            formData.append("uplodings", file1[0]);
            alert("ddddMMM");
        }
        $.ajax({
            type: "POST",
            url: 'Home/upload',
            data: formData,
            dataType: 'json',
            contentType: false,
            processData: false,
            success: function (response) {
                console.log("file:" + response);

                // alert('succes!!');
            },
        
            // error: function (error) {
            //alert("errror");
        })
        });

    });




