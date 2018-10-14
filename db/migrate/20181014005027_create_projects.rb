class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :project_name, null: false
      t.integer :team_id, null: false

      t.timestamps
    end
    add_index :projects, :project_name
    add_index :projects, :team_id
  end
end
