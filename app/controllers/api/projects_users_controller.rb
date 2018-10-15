class Api::ProjectsUsersController < ApplicationController
  before_action :require_login
  def create
    @project_user = ProjectUser.new(project_user_params)

    if @project_user.save
      render "api/projects_users/show"
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def show
    @project_user = ProjectUser.find(params[:id])
    render "api/projects_users/show"
  end

  def destroy
    @project_user = ProjectUser.find(params[:id])
    @project_user.destroy
    render "api/projects_users/show"
  end

  private

  def project_user_params
    params.require(:project_user).permit(:project_id, :user_id)
  end
end
