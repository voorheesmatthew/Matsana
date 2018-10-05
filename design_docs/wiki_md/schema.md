# Database Schema

## `users`

| column name  | data type | details |
| ------------ | --------- | ------- |
| `id` | integer | not null, primary key |
| `username` | string | not null, indexed |
| `email` | string | not null, indexed, unique |
| `password_digest` | string | not null |
| `session_token` | string | not null, indexed, unique |
| `created_at` | datetime | not null |
| `updated_at` | datetime | not null |

* index on `username, unique: true`
* index on `session_token, unique: true`

**NB** Do I need row: | `img_url` | string | not null, indexed, unique |

## `teams`

| column name  | data type | details |
| ------------ | --------- | ------- |
| `id` | integer | not null, primary key |
| `team_name` | string | not null, indexed |
| `created_at` | datetime | not null |
| `updated_at` | datetime | not null |

* index on `team_name`

## `teams_users`

| column name  | data type | details |
| ------------ | --------- | ------- |
| `id` | integer | not null, primary key |
| `team_id` | integer | not null |
| `user_id` | integer | not null |
| `created_at` | datetime | not null |
| `updated_at` | datetime | not null |

* `team_id` references `teams`
* `user_id` references `users`
* index on `[:team_id, :user_id], unique: true`

## `projects`

| column name  | data type | details |
| ------------ | --------- | ------- |
| `id` | Integer | not null, primary key |
| `project_name` | string | not null, indexed |
| `layout` | string | not null |
| `team_id` | integer | not null, indexed, foreign key |
| `owner_id` | integer | null, indexed, foreign key |
| `created_at` | datetime | not null |
| `updated_at` | datetime | not null |

* `team_id` references `teams`
* `user_id` references `users`
* index on `project_name`
* index on `team_id`
* index on `owner_id`

## `projects_users`

| column name  | data type | details |
| ------------ | --------- | ------- |
| `id` | integer | not null, primary key |
| `project_id` | integer | not null |
| `user_id` | integer | null |
| `created_at` | datetime | not null |
| `updated_at` | datetime | not null |

* `project_id` references `projects`
* `user_id` references `users`
* index on `[:project_id, :user_id], unique: true`


## `tasks`

| column name  | data type | details |
| ------------ | --------- | ------- |
| `id` | Integer | not null, primary key |
| `task_name` | string | not null, indexed |
| `description` | text | null |
| `due_date` | date | null |
| `team_id` | integer | not null, indexed, foreign key |
| `user_id` | integer | null, indexed, foreign key |
| `created_at` | datetime | not null |
| `updated_at` | datetime | not null |

* `team_id` references `teams`
* `user_id` references `users`
* index on `task_name`
* index on `due_date`
* index on `project_id`
* index on `team_id`
* index on `user_id`

## `projects_tasks`

| column name  | data type | details |
| ------------ | --------- | ------- |
| `id` | integer | not null, primary key |
| `project_id` | integer | null |
| `task_id` | integer | null |
| `created_at` | datetime | not null |
| `updated_at` | datetime | not null |

* `project_id` references `projects`
* `task_id` references `tasks`
* index on `[:project_id, :task_id], unique: true`
