$('.user-head-logo-div').hover(function(event) {
    $('.user-head-hover').addClass('user-head-hover-active')
}, function(event) {
    $('.user-head-hover').removeClass('user-head-hover-active')
})
$('.user-head-hover').hover(function(event) {
    $('.user-head-hover').addClass('user-head-hover-active')
}, function(event) {
    $('.user-head-hover').removeClass('user-head-hover-active')
})

document.querySelector('.user-head-hover-exit-content').addEventListener('click', function (event) {
    var links = document.querySelectorAll('link')
    for (var i = 0; i < links.length; i++) {
        var link = links[i]
        if (link.href.indexOf('jsbox.css') >= 0) {
            link.remove()
        }
    }

    $('.user-head-hover').removeClass('user-head-hover-active')
    var validate_obj = Object;
    validate_obj.title = '閫€鍑虹‘璁�';
    var content = '浣犺閫€鍑洪棶鍗风綉涔�?'
    validate_obj.content = content;
    // validate_obj.obj = $('.user-head-hover-exit-title');
    validate_obj.obj_text = "纭畾";
    validate_obj.close_text = "鍙栨秷";
    validate_obj.obj = function() {
        // 娓呴櫎鐧诲綍鐢ㄦ埛 ID
        gio_logout ();
        window.location.href = '/logout'
    }
    jsConfirm(validate_obj);
})