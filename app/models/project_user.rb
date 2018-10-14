# == Schema Information
#
# Table name: projects_users
#
#  id         :bigint(8)        not null, primary key
#  project_id :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ProjectUser < ApplicationRecord
  self.table_name = 'projects_users'

  belongs_to :project,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: :Project

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User
  
end
