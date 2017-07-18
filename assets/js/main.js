
function addTodoItem() {
  var todoItem = $("#new-charla-item").val();
  $("#charla-list").append("<li><input type='checkbox'" + 
                         " name='charla-item-done'" + 
                         " class='charla-item-done'"+ 
                         " value='" + charlaItem + "' /> " + 
                         charlaItem);
  
 $("#new-charla-item").val("");
}

//listado de charlas
$(function() {
 
   $("#add").on('click', function(e){
     e.preventDefault();
     addCharlaItem()
   });
   
  $(document).on('click', ".todo-item-done", completeTodoItem)

});