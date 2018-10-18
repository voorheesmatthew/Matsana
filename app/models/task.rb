# == Schema Information
#
# Table name: tasks
#
#  id         :bigint(8)        not null, primary key
#  task_name  :string           not null
#  due_date   :date
#  complete   :boolean          default(FALSE), not null
#  team_id    :integer          not null
#  user_id    :integer
#  project_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Task < ApplicationRecord
  validates :team_id, presence: true

  belongs_to :team,
  primary_key: :id,
  foreign_key: :team_id,
  class_name: :Team

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :project,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: :Project,
  optional: true
end
