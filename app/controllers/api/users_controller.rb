class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)


    if @user.save
      @team = Team.new({team_name: 'My First Team'})
      if @team.save
        team_user = TeamUser.create({team_id: @team.id, user_id: @user.id})
      else
        render json: @team.errors.full_messages, status: 422
      end

      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :password)
  end

end
