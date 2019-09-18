function jsConfirm(Obj) {
    var onlyid = Obj.onlyid || "maptss";
    Tinfo = {
        title: Obj.title || "鎻愮ず",
        content: Obj.content || "<span style='color:#ef6262;'>纭畾瑕佸垹闄ゅ悧锛�</span>",
        //鎻愮ず鍐呭
        conw: Obj.conw || 300,
        //瀹藉害
        obj: Obj.obj || false,
        //鎵ц鏂规硶
        Param: Obj.Param || '',
        //鎵ц鏂规硶鍙傛暟
		obj_text: Obj.obj_text || '纭畾',
        //鎵ц鏂规硶鎸夐挳鍐呭
        close_obj: Obj.close_obj || false,
        //鍙栨秷鏂规硶
        close_Param: Obj.close_Param || '',
		//鍙栨秷鏂规硶鍙傛暟
		close_text: Obj.close_text || '鍙栨秷',
        //鍙栨秷鏂规硶鎸夐挳鍐呭
        is_zhifu:false
    };
    var qr = '<div class="WJButton wj_blue tcQz">'+ Tinfo.obj_text +'</div>';
    var qx = '<div class="WJButton wj_blue uniteC">'+ Tinfo.close_text +'</div>';
    var con = '<div class="tccCon">' + '<div class="tccCon_t">'+ Tinfo.content +'</div><div class="tccCon_a">' + qr + qx + '</div></div>';

    //鍒涘缓寮瑰嚭灞�
    var wb = new jsbox({
        onlyid: onlyid,
        title: Tinfo.title,
        conw: Tinfo.conw,
        // FixedTop:170,
        content: con,
        range: true,
        mack: true
    }).show();

    //纭畾浜嬩欢
    $('.tcQz').die().live('click', function() {
        var isReturn = Tinfo.obj(Tinfo.Param);
		if(isReturn==undefined || isReturn==null){
          $('.jsbox_close').click();
          setTimeout(function(){$('.zon_edit').remove();},100);
		}
    });
    //鍙栨秷浜嬩欢
    $('.uniteC').one('click', function() {
        if(Tinfo.close_obj) {
            Tinfo.close_obj(Tinfo.close_Param);
        }
        $('.jsbox_close').click();
    });
	//鍏抽棴鎸夐挳鍙栨秷浜嬩欢
    $('.jsbox_close').one('mousedown', function() {
        if(Tinfo.close_obj) {
            Tinfo.close_obj(Tinfo.close_Param);
        }
        $('.jsbox_close').click();
		return false;
    });

}