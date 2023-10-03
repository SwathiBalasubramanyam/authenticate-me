class Api::SessionsController < ApplicationController

  before_action :require_logged_in, only: [:destroy]
  before_action :require_logged_out, only: [:create]

  def create
    @user = User.find_by_credentials(params[:email], params[:password])
    if @user
      login!(@user)
      render json: {user: @user}
    else
      render json: {errors: ['The provided credentials were invalid.']}, status: :unauthorized
    end
  end

  def show
    if current_user
      render json: {user: @current_user}
    else
      render json: {user: nil}
    end
  end

  def destroy
    if current_user
      logout!
      render json: {message: 'success'}
    end
  end

end
