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

require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
