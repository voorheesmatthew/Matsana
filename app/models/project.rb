# == Schema Information
#
# Table name: projects
#
#  id           :bigint(8)        not null, primary key
#  project_name :string           not null
#  team_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Project < ApplicationRecord
  validates :project_name, :team_id, presence: true

  belongs_to :team,
  primary_key: :id,
  foreign_key: :team_id,
  class_name: :Team

end
