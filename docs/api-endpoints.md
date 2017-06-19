# API Endpoints

## HTML

Root
  - GET / - react entry point

## JSON

Users
  - POST /api/users
    * required data: username, password
  - PATCH /api/users
  - GET /api/users/:user_id
    * required params: user_id

Session
  - POST /api/session
    * required data: username, password
  - DELETE /api/session

Date
  - GET /api/date/:date_id
    * returns all journal entries and to-dos for a certain date + user

Journal Entries
  - GET /api/journal_entry
    * returns all journal entries for a user
  - POST /api/journal_entry
    * required data: date_id, title, body
  - GET /api/journal_entry/:id
    * required params: journal_entry_id
  - PATCH /api/journal_entry/:id
    * required params: journal_entry_id
  - DELETE /api/journal_entry/:id
    * required params: journal_entry_id

To-Do
  - GET /api/todo/:date_id
    * returns all to-dos for a certain date & user
  - POST /api/todo
    * required data: date_id, user_id, body
  - GET /api/todo/:id
    * required params: todo_id
  - PATCH /api/todo/:id
    * required params: todo_id
  - DELETE /api/todo/:id
    * required params: todo_id
