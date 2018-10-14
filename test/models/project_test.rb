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

require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
