class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.string :team_name, null: false

      t.timestamps
    end
    add_index :teams, :team_name
  end
end
