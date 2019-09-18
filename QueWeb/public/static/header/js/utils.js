var addError = function(text, selector, className) {
    className = className || 'error'
    var textHtml = "<div class="+className+">"+text+"</div>"
    selector.insertAdjacentHTML('beforeEnd', textHtml)
}

var checkRegisterInfo = function(data, selector, callback) {
    $.ajax({
        url: "/register/check_info/",
        type: 'POST',
        data: data,
        success: function(data){
            var data = JSON.parse(data);
            if(data.err_msg != '') {
                if (data.err_msg = '璇ユ墜鏈哄凡琚崰鐢�') {
                    addError('璐﹀彿宸插瓨鍦紝璇烽噸鏂拌緭鍏ワ紝鎴�<span class="use_this">鐢ㄦ璐﹀彿鐧诲綍</span>', selector)
                } else {
                    addError(data.err_msg, selector)
                }
            } else {
                callback()
            }
        }
    });
};

$('.header-create-left, .back-tooltip-link, .header-personal-center-left').hover(function(event) {
    $('.back-tooltip').addClass('back-tooltip-active')
}, function(event) {
    $('.back-tooltip').removeClass('back-tooltip-active')
})

if ($('.edit-header').length <= 0) {
    $('.user-head .help').show()
} else {
    $('.user-head .help').hide()
}