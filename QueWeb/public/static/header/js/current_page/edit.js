var getCurrentPage = function() {
    var editList = [
        '/edit/appearset/',
        '/edit/survey/',
        '/project/setting/',
        '/project/logic_setting/'
    ]
    
    var currentLink = window.location.pathname
    for (var j = 0; j < editList.length; j++) {
        var lp = editList[j]
        if (currentLink.indexOf(lp) >= 0) {
            document.querySelector('#edit-header-edit').classList.add('showUnderLine')
            return
        }
    }
    if (currentLink.indexOf('/project/') >= 0) {
        document.querySelector('#edit-header-publish').classList.add('showUnderLine')
    } else if (currentLink.indexOf('/report/') >= 0) {
        document.querySelector('#edit-header-report').classList.add('showUnderLine')
    }
}
getCurrentPage()