class CreateTeamUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :teams_users do |t|
      t.integer :team_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :teams_users, :team_id
    add_index :teams_users, :user_id
    add_index :teams_users, [:team_id, :user_id], unique: true
  end
end
