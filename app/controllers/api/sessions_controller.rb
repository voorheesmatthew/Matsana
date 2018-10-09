class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user
      login(@user)
      render "api/users/show"
      #"api/home/#{@user.id}" #Not sure what to do in place of a team_id or is this a backend route???
    else
      render :json ['The username or password is not correct.'], status: 401
    end

  end

  def destroy
    @user = current_user
    if @user
      logout
      render 'api/users/show'
    else
      render json: ["Nobody logged in"], status: 404
    end
  end
end
