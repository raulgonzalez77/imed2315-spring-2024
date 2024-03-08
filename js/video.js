
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
    document.onkeypress = function (e) {
        if ((e || window.event).keyCode === 32) {

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

            return e.keyCode !== 32;

        }
    };


    /* video play/paus when user leaves page*/
    document.onvisibilitychange = function () {
        if (document.visibilityState === 'hidden') {
            video.pause();
            jQuery("#play-pause").html('<i class="fa-solid fa-circle-play"></i>');
            isRunning = false;  //aded to play/pause inteval
            //clearInterval(interval);  //aded to play/pause inteval
        }
        else {
            video.play();
            jQuery("#play-pause").html('<i class="fa-solid fa-circle-pause"></i>');
            isRunning = true;  //aded to play/pause inteval
            //startTheInterval();  //aded to play/pause inteval
        }
    };






    /*prevent scrolling on spacebar keydonw 
    window.onkeydown = function(e) {
        return e.keyCode !== 32;
    };*/



}, false);

//}); //document ready
