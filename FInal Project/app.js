$('#submitButton').on('click', function() {
        let name = $('#displayName').val()
        let comment = $('#commentLine').val()
        $('#commentsDiv').prepend('<div id = "singleComment"><span class = "names">' + name + 
        '</span><button class = "delete">Delete</button>' + 
        '<button class = "edit">Edit</button><p class = "comments">' 
        + comment + '</p></div>');    
})