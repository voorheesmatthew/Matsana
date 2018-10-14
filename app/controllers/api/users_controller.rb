class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)


    if @user.save
      fteam = Team.new({team_name: 'My First Team'})
      fteam.save!
      team_user = TeamUser.create({team_id: fteam.id, user_id: @user.id})

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
