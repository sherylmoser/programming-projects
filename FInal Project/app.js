$('#submitButton').on('click', function() {
        let name = $('#displayName').val()
        let comment = $('#commentLine').val()
        $('#commentsDiv').prepend(`
        <div id = "singleComment">
                <span class = "names">${name}</span>
                <button class = "delete">Delete</button>  
                <button class = "edit">Edit</button>
                <p class = "comments">${comment}</p>
        <div id = "editPost" class = "editing">
                <input id = "editName" type = "text" placeholder = "Display Name">
                <input id = "editComment" type ="text" placeholder = "Comment">
                <input id = "submitEdit" type = "submit" value = "Submit"> 
        </div>
        </div>`);    
})
$('#commentsDiv').on('click', '.delete', function() {
        let fullComment = $(this).parents()[0];
        $(fullComment).remove();
})
$('#commentsDiv').on('click', '.edit', function() {
        let fullComment = $(this).parents()[0];
        let editingLine = $(fullComment).children()[4];
        $(editingLine).toggleClass('editing');
})
$('#commentsDiv').on('click', '#submitEdit', function () {
        let fullComment = $(this).parents()[1];
        let commentChildren = $(fullComment).children()[4];
        let editNameChild = $(commentChildren).children()[0]
        let editCommentChild = $(commentChildren).children()[1]
        let editedName = $(editNameChild).val();
        let editedComment = $(editCommentChild).val();
        $(fullComment).replaceWith(`
        <div id = "singleComment">
                <span class = "names">${editedName}</span>
                <button class = "delete">Delete</button>  
                <button class = "edit">Edit</button>
                <p class = "comments">${editedComment}</p>
        <div id = "editPost" class = "editing">
                <input id = "editName" type = "text" placeholder = "Display Name">
                <input id = "editComment" type ="text" placeholder = "Comment">
                <input id = "submitEdit" type = "submit" value = "Submit"> 
        </div>
        </div>`)
})