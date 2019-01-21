Your socket.io homework is due at 10pm on Nov 15th

Your SQL homework is due at 10pm on Nov 22

For the socket.io homework Chan accurately pointed out that the UI was missing an input area. See the updated layout below. The line under the date is the input area.

For clarity on the functionality:

• you should be using the same database schemas and API routes from your previous todo homework
• you need to include socket.io
• when a user inputs a new todo and pressed enter, the todo item should be added for _every_ user accessing the todolist.
• when a user clicks an open circle, the todo item should be marked complete for _every_ user accessing the todolist. Items are indicated as complete by added a teal color and an x (see visual below)
• If an item is marked complete, clicking the teal x will delete it.