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

## date
column name       | data type  | details
------------------|------------|-----------------------
id                | integer    | not null, primary key
user_id           | integer    | not null, foreign key, indexed
journal_entry_id  | integer    | foreign key, indexed
to-do_id          | integer    | foreign key, indexed
created_at        | datetime   | not null
updated_at        | datetime   | not null

## journal_entry
column name | data type  | details
------------|------------|-----------------------
id          | integer    | not null, primary key
user_id     | integer    | not null, foreign key, indexed
date_id     | integer    | not null, foreign key, indexed
title       | string     | not null
body        | string     | not null
created_at  | datetime   | not null
updated_at  | datetime   | not null

## to-do
column name | data type  | details
------------|------------|-----------------------
id          | integer    | not null, primary key
user_id     | integer    | not null, foreign key, indexed
date_id     | integer    | not null, foreign key, indexed
body        | string     | not null
created_at  | datetime   | not null
updated_at  | datetime   | not null