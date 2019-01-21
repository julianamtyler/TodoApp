$(document).ready(function(){
$(function () {
  
    const day = moment().format('ddd');
    const date = moment().format('MMM D YYYY');
    $('#day').append(day);
     $('#date').append(date);

    const todoList = function () {
        $('#todoItems').empty();
        $.ajax({ url: '/api/todoItems', method: 'GET' })
        .then(function (todoList) {
            console.log(todoList)
                todoList.forEach(e =>{$(`#todoItems`).append($(`<li id="newtodo"><b>${e.todoname}</b><i data-dbId = ${e._id} id = "test" class="far fa-circle"></i></li>`))})
            });
    }

    todoList();

    const postItem = function (newtodo) {
        $.ajax({ url: '/api/todoItems', method: 'POST', data: newtodo })
            .then(function () {
                let todoname = $('#todo').val();
                $('#todoItems').append($(`<li id="newtodo"><b>${todoname}</b><i  class="far fa-circle"></i></li>`))
            
            }) 
    };



    $('form').submit(function (e) {
        e.preventDefault();
        const val = { todoname: $('#todo').val(), done: false}
        postItem(val);
    });


$('#todoItems').on('click',function(e){
    if($(e.target).attr('class') == 'far fa-circle'){
    $(e.target).removeClass("fa-circle").addClass("fa-times-circle")
    .closest('li').addClass('complete'); 
    
    } else if($(e.target).attr('class') == 'far fa-times-circle'){
        $.ajax({ url: `/api/todoItems/${ $(e.target).data('dbid')}`, method: 'DELETE'})
        .then(function () {
            $(e.target).closest('li').remove()
        })
        }
        });
    })
})