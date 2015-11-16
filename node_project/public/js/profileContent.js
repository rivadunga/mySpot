$(document).ready(function() {
    refreshContent();
    setInterval(function() {
        refreshContent()
    }, 4000);
    uploadPhoto();
});

function uploadPhoto() {
    $('#IP_form').live('change', function() {
        $("#IP_form").ajaxForm({
            success: function(data, textStatus, jqXHR) {
                refreshContent();
            }
        }).submit();
    });
}


function uploadText() {
    var text = $('#TP_text').val();
    if (text) sendText(text);
}

function sendText(content) {
    $.ajax({
        type: "POST",
        url: "/saveText",
        data: {
            content: content
        },
        success: function(data) {
            refreshContent();
        }
    });
}


function refreshContent() {

    var lastIndex = 0;
    if ($('.idPost:first').val())
        lastIndex = $('.idPost:first').val();

    $.ajax({
        type: "POST",
        url: "/getPosts",
        data: {
            lastIndex: lastIndex
        },
        success: function(data) {
            if (data != "" && data != null)
                $('#mainContainer').prepend(data);
        }
    });
}