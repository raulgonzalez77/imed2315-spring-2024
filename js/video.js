
//$( document ).ready(function() {
document.addEventListener('DOMContentLoaded', function () {
    // do something here ...  

    var isRunning = true; //aded to play/pause inteval



    var messages = [
        "The Astonishing",
        "The Beautiful",
        "The Radiant",
        "The Expectacular",
        "The Breathtaking",
        "The Captivating",
        "THE BRIDE",
        "Raul's Bridal...And Oil Change!"
    ];

    var index = 0;




    var interval = setInterval(function blinnInterval() {
        $("#message").animate({
            opacity: 0
        }, function () {

            //if (messages.length > index) {
            if ((messages.length > index) && (isRunning)) {  //aded to play/pause inteval
                $(this).text(messages[index]).animate({ opacity: 1 }, { duration: 3000 })
                //$(this).text(messages[index]).animate({opacity:1})
                index++;
                //	isRunning = true; //aded to play/pause inteval
            }
            else {
                index = 0;
                //	isRunning = false; //aded to play/pause inteval

            }

        });
    }, 4000);



    /*play/pause video*/
    jQuery(document).ready(function () {
        jQuery("#play-pause").click(function () {
            if (jQuery("#video").get(0).paused) {
                jQuery("#video").trigger('play');
                jQuery("#play-pause").html('<i class="fa-solid fa-circle-pause"></i>');
                isRunning = true;  //aded to play/pause inteval
                //interval(true);  //aded to play/pause inteval
                //jQuery(".play").fadeOut(500);
            } else {
                jQuery("#video").trigger('pause');
                jQuery("#play-pause").html('<i class="fa-solid fa-circle-play"></i>');
                isRunning = false;  //aded to play/pause inteval
                //clearInterval(interval);  //aded to play/pause inteval
                //jQuery(".play").fadeIn(500);
            }
        });
    });



    /* play/pause video with spacebar */
    var currentInterval;

    var video = document.getElementById('video');
    var videoMobile = document.getElementById('video-mobile');

    document.onkeypress = function (e) {
        if ((e || window.event).keyCode === 32) {

            if ($('#video').is(":visible")) {

                if (video.paused) {

                    video.play();
                    jQuery("#play-pause").html('<i class="fa-solid fa-circle-pause"></i>');
                    isRunning = true;  //aded to play/pause inteval
                    //startTheInterval();  //aded to play/pause inteval
                }
                else {

                    video.pause();
                    jQuery("#play-pause").html('<i class="fa-solid fa-circle-play"></i>');
                    isRunning = false;  //aded to play/pause inteval
                    //clearInterval(interval);  //aded to play/pause inteval
                }

            }



            if ($('#video-mobile').is(":visible")) {

                if (videoMobile.paused) {

                    videoMobile.play();
                    jQuery("#play-pause").html('<i class="fa-solid fa-circle-pause"></i>');
                    isRunning = true;  //aded to play/pause inteval
                    //startTheInterval();  //aded to play/pause inteval
                }
                else {

                    videoMobile.pause();
                    jQuery("#play-pause").html('<i class="fa-solid fa-circle-play"></i>');
                    isRunning = false;  //aded to play/pause inteval
                    //clearInterval(interval);  //aded to play/pause inteval
                }

            }

            return e.keyCode !== 32;

        }
    };


    /* video play/paus when user leaves page*/
    document.onvisibilitychange = function () {
        if (document.visibilityState === 'hidden') {
            video.pause();
            videoMobile.pause();
            jQuery("#play-pause").html('<i class="fa-solid fa-circle-play"></i>');
            isRunning = false;  //aded to play/pause inteval
            //clearInterval(interval);  //aded to play/pause inteval
        }
        /*
        else {
            video.play();
            jQuery("#play-pause").html('<i class="fa-solid fa-circle-pause"></i>');
            isRunning = true;  //aded to play/pause inteval
            //startTheInterval();  //aded to play/pause inteval
        }
        */
    };












    //credit to https://stackoverflow.com/questions/27934728/video-doesnt-update-after-modifying-the-src-property-of-its-source-element
    $(window).on('resize load pagebeforecreate', function () {
        //$(document).on("load resize pagebeforecreate", function () {
        if ($(window).width() < 768) {
            /* $(".vid-webm").attr("src", "https://res.cloudinary.com/dexnm5cpk/video/upload/f_auto:video,q_auto,c_crop,ar_9:16/sample-wedding-video_o7wkir.webm")
             $(".vid-ogg").attr("src", "https://res.cloudinary.com/dexnm5cpk/video/upload/f_auto:video,q_auto,c_crop,ar_9:16/sample-wedding-video_o7wkir.ogg")
             $(".vid-mp4").attr("src", "https://res.cloudinary.com/dexnm5cpk/video/upload/f_auto:video,q_auto,c_crop,ar_9:16/sample-wedding-video_o7wkir.mp4")
            */
            //$(".vid-mp4").attr("src", "https://res.cloudinary.com/dexnm5cpk/video/upload/f_auto:video,q_auto,c_crop,ar_9:16/sample-wedding-video_o7wkir")
            //document.querySelector('.vid-mp4').src = "https://res.cloudinary.com/dexnm5cpk/video/upload/f_auto:video,q_auto,c_crop,ar_9:16/sample-wedding-video_o7wkir";
            console.log("mobile");
            $('.BlinnVid-desktop').hide();
            $('.BlinnVid-desktop').trigger('pause');
            $('.BlinnVid-mobile').show();
            $('.BlinnVid-mobile').trigger('play');

        }
        else {
            /*$(".vid-webm").attr("src", "https://res.cloudinary.com/dexnm5cpk/video/upload/f_auto:video,q_auto,c_crop,ar_16:9/sample-wedding-video_o7wkir.webm")
            $(".vid-ogg").attr("src", "https://res.cloudinary.com/dexnm5cpk/video/upload/f_auto:video,q_auto,c_crop,ar_16:9/sample-wedding-video_o7wkir.ogg")
            $(".vid-mp4").attr("src", "https://res.cloudinary.com/dexnm5cpk/video/upload/f_auto:video,q_auto,c_crop,ar_16:9/sample-wedding-video_o7wkir.mp4")
            */
            //$(".vid-mp4").attr("src", "https://res.cloudinary.com/dexnm5cpk/video/upload/f_auto:video,q_auto,c_crop,ar_16:9/sample-wedding-video_o7wkir")
            //document.querySelector('.vid-mp4').src = "https://res.cloudinary.com/dexnm5cpk/video/upload/f_auto:video,q_auto,c_crop,ar_16:9/sample-wedding-video_o7wkir";
            console.log('desktop');
            $('.BlinnVid-mobile').hide();
            $('.BlinnVid-mobile').trigger('pause');
            $('.BlinnVid-desktop').show();
            $('.BlinnVid-desktop').trigger('play');

        }
    });





    /*prevent scrolling on spacebar keydonw 
    window.onkeydown = function(e) {
        return e.keyCode !== 32;
    };*/



}, false);

//}); //document ready
