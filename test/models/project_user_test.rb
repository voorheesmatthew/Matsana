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

require 'test_helper'

class ProjectUserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
