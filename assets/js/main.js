AOS.init();

focusInput();

window.onscroll = function(){scrollMenu()};

function scrollMenu(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById('header').classList.add("scrollMenu");
    }else{
        document.getElementById('header').classList.remove("scrollMenu");
    }
}

var userLog = document.querySelector('.user-log');

document.querySelector('.other-btn.other-user').addEventListener('click', function(){
    userLog.classList.toggle('show');
});

window.onclick = function(event) {
    if (event.target != userLog) {
        userLog.style.display = "none";
    }
}

let changeIcon = function(icon){
    icon.classList.toggle('fa-xmark');
}

$(document).ready(function(){
    $(".main-content-input").keyup(function(){
        var keyWord = $(this).val();
        $(".col-4").each(function(){
            if ($(this).attr('data-name').search(new RegExp(keyWord, "i")) < 0) {
                $(this).fadeOut();;
            } else {
                $(this).show();
            }
        });
    });
});

function focusInput(){
    $('input').focus(function(){
        $(this).parents('.form-group').addClass('focused');
    });

    $('input').blur(function(){
        var inputValue = $(this).val();
        if ( inputValue == "" ) {
          $(this).parents('.form-group').removeClass('focused');  
        }
      })  
}