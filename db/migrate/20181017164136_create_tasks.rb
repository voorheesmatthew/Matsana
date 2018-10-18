class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :task_name
      t.date :due_date
      t.boolean :complete, null: false, default: false
      t.integer :team_id, null: false
      t.integer :user_id
      t.integer :project_id

      t.timestamps
    end
    add_index :tasks, :task_name
    add_index :tasks, :due_date
    add_index :tasks, :team_id
    add_index :tasks, :user_id
    add_index :tasks, :project_id
  end
end
