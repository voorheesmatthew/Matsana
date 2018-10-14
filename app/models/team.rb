# == Schema Information
#
# Table name: teams
#
#  id         :bigint(8)        not null, primary key
#  team_name  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Team < ApplicationRecord
  validates :team_name, presence: true

  has_many :projects,
  primary_key: :id,
  foreign_key: :team_id,
  class_name: :Project

  has_many :teams_users,
  primary_key: :id,
  foreign_key: :team_id,
  class_name: :TeamUser

  has_many: :users,
  through: :teams_users,
  source: :user

end
