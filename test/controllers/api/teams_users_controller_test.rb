require 'test_helper'

class Api::TeamsUsersControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_teams_users_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_teams_users_destroy_url
    assert_response :success
  end

end
