# Schema

## users
column name     | data type  | details
----------------|------------|-----------------------
id              | integer    | not null, primary key
username        | string     | not null, indexed, unique
session_token   | string     | not null, indexed, unique
password_digest | string     | not null
avatar_url      | string     |
created_at      | datetime   | not null
updated_at      | datetime   | not null
