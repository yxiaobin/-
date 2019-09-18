// 閫夐」鍏宠仈鐨勯€夐」妯℃澘
var source_relation_option = '{@each option_list as option}<li class="option_association disabled" data-related="true" data-related-question-id="&{option.question_qid}"><div class="option_title_wrap"><i class="icon_wj icon_xxgl"></i><div class="option_title" id="&{option.option_id}">&&{option.option_title}<span class="text-relation"> [鍏宠仈鑷�&&{option.question_cid}]</span></div></div></li>{@/each}';
var source_relation_option_dropdown = '{@each option_list as option}<option data-related="true" data-related-question-id="&{option.question_qid}" class="T_edit_min_disabled" id="58f70f78e73a0914a4f660c4">&&{option.option_title}<span class="text-relation">[鍏宠仈鑷�&&{option.question_cid}]</span></option>{@/each}';

var source_relation_question_index_matrix = '<div class="option_item related_question_display show_related_question" data-related="true"><div class="related_question_title"><div class="">琛屾爣棰樺紩鐢ㄨ嚜&&{index_string}棰樼瓟妗�</div></div><div class="related_question_option &&{custom_attr.score_display}">{@each j in range(0, 3)}<div class="score_wrap"><div num="&&{custom_attr.max_answer_num - custom_attr.min_answer_num + 1}">{@each i in range(custom_attr.min_answer_num - 1, custom_attr.max_answer_num)}{@if custom_attr.score_display=="slider"}<span {@if i==custom_attr.min_answer_num}class="active {@if i==custom_attr.max_answer_num-1}last{@/if}"{@else if i==custom_attr.min_answer_num-1}class="first"{@else if i==custom_attr.max_answer_num-1}class="last"{@/if} ><em></em><i></i></span>{@else}<span{@if i==custom_attr.min_answer_num-1} class="active"{@/if} ><em></em><i></i></span>{@/if}{@/each}</div></div>{@/each}</div></div>'
// 鍒濆鍖栭€夐」鍏宠仈
function init_related_question_dict(question) {
    var related_question_list = question.related_question_list,
        question_id = question._id.$oid;
    if (related_question_list && related_question_list.length > 0) {
        for (var j = 0; j < related_question_list.length; j++) {
            var related_qid = related_question_list[j]._id.$oid;
            var relation_qid_list = RELATED_QUESTION_DICT[related_qid] ? RELATED_QUESTION_DICT[related_qid] : [];
            if (relation_qid_list.indexOf(question_id) == -1) relation_qid_list.push(question_id);
            RELATED_QUESTION_DICT[related_qid] = relation_qid_list;
        }
    }
}

/**
 * 鏇存柊閫夐」鍏宠仈瀛楀吀 RELATED_QUESTION_DICT
 * @param  {String}  qid  琚洿鏂伴€夐」鍏宠仈鐨勯鐩甶d
 * @param  {Array}  old_relation_qid_list  琚洿鏂伴€夐」鍏宠仈鐨勯鐩殑鑰侀€夐」鍏宠仈鍒楄〃棰樼洰id鍒楄〃
 * @param  {Array}  new_related_qid_list  琚洿鏂伴€夐」鍏宠仈鐨勯鐩殑鏂伴€夐」鍏宠仈鍒楄〃棰樼洰id鍒楄〃
 */
function update_related_question_dict(qid, old_relation_qid_list, new_related_qid_list) {
    old_relation_qid_list = old_relation_qid_list ? old_relation_qid_list : [];
    new_related_qid_list = new_related_qid_list ? new_related_qid_list : [];
    // 鍒犻櫎鑰佺殑閫夐」鍏宠仈
    for(var i = 0; i < old_relation_qid_list.length; i++){
        var from_qid = old_relation_qid_list[i],
            related_qid_list = RELATED_QUESTION_DICT[from_qid] ? RELATED_QUESTION_DICT[from_qid] : [];
        if(related_qid_list.indexOf(qid) != -1){
            related_qid_list.splice(related_qid_list.indexOf(qid), 1);
            var index = related_qid_list.indexOf(qid);
            RELATED_QUESTION_DICT[from_qid] = related_qid_list;
        }
    }
    // 鏂板鏂扮殑閫夐」鍏宠仈
    for(var i = 0; i < new_related_qid_list.length; i++){
        var from_qid = new_related_qid_list[i],
            related_qid_list = RELATED_QUESTION_DICT[from_qid] ? RELATED_QUESTION_DICT[from_qid] : [];
        if(related_qid_list.indexOf(qid) == -1){
            related_qid_list.push(qid);
        }
        RELATED_QUESTION_DICT[from_qid] = related_qid_list;
    }
    // 鏇存柊鍏宠仈棰樼洰鐨勫叧鑱旈€夐」
    update_question_relation_option(qid);
}

// 鏇存柊鍏宠仈棰樼洰鐨勫叧鑱旈€夐」
function update_question_relation_option(qid) {
    // qid_list 鎵€鏈夊叧鑱� qid 鐨勯鐩垪琛�
    var qid_list  = RELATED_QUESTION_DICT[qid];
    if(qid_list){
        for(var i = 0; i < qid_list.length; i++){
            var question_obj = QUESTION_DICT[qid_list[i]],
                disp_type = QUESTION_DICT[question_obj._id.$oid].custom_attr.disp_type,
                question_type = question_obj.question_type;
            var custom_attr = QUESTION_DICT[question_obj._id.$oid].custom_attr;
            var $qOptionList = $('#question_box').find('#question_' + question_obj._id.$oid).find('.q_option_ul'),
                index = $qOptionList.find('li[data-related-question-id='+ qid +']:first').index();
            $qOptionList.find('li[data-related-question-id='+ qid +']').remove();

            var relation_option_list = [],
                form_type = '';
            var question_index_list = []
            if(question_type == QUESTION_TYPE_SINGLE){
                form_type = 'radio';
            }else if(question_type == QUESTION_TYPE_MULTIPLE){
                form_type = 'checkbox';
            }

            for(var j = 0; j < question_obj.related_question_list.length; j++){
                var relation_question = question_obj.related_question_list[j],
                    question_qid = relation_question._id.$oid,
                    question_cid = QUESTION_DICT[question_qid].cid;
                if(question_qid == qid){
                    // 榛樿閫夐」鎵归噺娣诲姞閫夐」鏃讹紝浼氬厛鍒犻櫎榛樿閫夐」锛岀劧鍚庢坊鍔犳柊閫夐」锛屾鏃秈ndex=-1
                    // 濡傛灉j=0锛屾牴鎹€夐」鍏宠仈鐨勯『搴廼ndex搴斾负0
                    // 濡傛灉j>0锛宨ndex搴斾负涓婁竴涓叧鑱旈€夐」涓渶鍚庝竴椤圭殑涓嬫爣鍔�1
                    if(index == -1){
                        if (j == 0) index = 0;
                        else{
                            var prev_oid = question_obj.related_question_list[j - 1]._id.$oid;
                            index = $qOptionList.find('li[data-related-question-id='+ prev_oid +']:last').index() + 1;
                        }
                    }
                    get_relation_question_index_list(QUESTION_DICT[question_qid], qid, question_cid, question_index_list);
                    get_relation_option_list(QUESTION_DICT[question_qid], qid, question_cid, relation_option_list);
                }
            }

            var data = {
                'form_type': form_type,
                'option_list': relation_option_list,
                'index_string': question_index_list,
                'custom_attr': custom_attr
            };
            var option_temp_html = juicer(source_relation_option, data);

            if(index == 0){
                if (disp_type != 'matrix_scale') {
                    $qOptionList.prepend(option_temp_html);
                } else {
                    $qOptionList.find('.related_question_display').remove();
                    var $tableHead = $qOptionList.find('.table_head');
                    var option_temp_html = juicer(source_relation_question_index_matrix, data);
                    $tableHead.after(option_temp_html);
                }
            }else if(index > 0){
                $(option_temp_html).insertAfter($qOptionList.find('li').eq(index-1));
            }

            update_question_relation_option(question_obj._id.$oid);
        }
    }
}
// 鑾峰彇鎸囧畾鍏宠仈棰樼洰搴忓彿鍒楄〃
function get_relation_question_index_list(question_obj, question_qid, question_cid, list) {
    var _this = this,
        cid = question_obj.cid;
    var cur_len = list.length;
    var index = cid.replace('Q', '')
    list.splice(list.length - cur_len, 0, index);
}
// 鑾峰彇鎸囧畾鍏宠仈棰樼洰鐨勯€夐」鍒楄〃
function get_relation_option_list(question_obj, question_qid, question_cid, list) {
    var option_list = question_obj.option_list,
        relation_option_list = [];
    var cur_len = list.length;
    for (var j = 0; j < option_list.length; j++) {
        var option_id = option_list[j]._id.$oid,
            option_title = formatOptionTitleRemoveImg(option_list[j].title),
            is_open = option_list[j].is_open;
        var option_obj = {
            'question_qid': question_qid,
            'question_cid': question_cid,
            'option_id': option_id,
            'option_title': option_title,
            'is_open': is_open
        }
        list.splice(list.length - cur_len, 0, option_obj);
    }
    if (question_obj.related_question_list) {
        var question_obj_list = question_obj.related_question_list;
        for (var j = 0; j < question_obj_list.length; j++) {
            get_relation_option_list(QUESTION_DICT[question_obj_list[j]._id.$oid], question_qid, question_cid, list);
        }
    }
}

function get_source_q_list(disabled_list){
    var temp_qid_list = qid_list.slice(0, qid_list.length);
    var disabled_arr = disabled_list ? disabled_list : disabled_qid_list;
    return $.map(temp_qid_list, function(qid){
        if (check_in(qid, disabled_arr)){
            return;
        }
        var question = q_attr_dict[qid];
        // if (check_in(question.qtype, [QUESTION_TYPE_SINGLE, QUESTION_TYPE_MULTIPLE])){
        // if (question.qtype != QUESTION_TYPE_DESC){
        //     return question;
        // }
        return question;
    });
}

function get_question(qid_or_qcid) {
    for(var key in QUESTION_DICT){
        if (get_oid(QUESTION_DICT[key]) == qid_or_qcid || QUESTION_DICT[key].cid == qid_or_qcid){
            return QUESTION_DICT[key];
        }
    }
    return null;
}
// 鏍煎紡鍖栧瓧绗︿覆锛岀Щ闄mg鏍囩
function formatOptionTitleRemoveImg(title) {
    var re = new RegExp('<img .*>');
    if (re.test(title)) {
        var formatTitle = title.replace(/<(?:\/?img*\b(?:[=\s](['"]?)[\s\S]*?\1)*)\/?>/g, '');
        // formatTitle = $(formatTitle).text().replace(/,/g, "锛�");
        return formatTitle;
    } else {
        return title;
    }
}