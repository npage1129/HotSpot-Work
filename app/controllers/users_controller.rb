before_action :set_user, only: [:show, :update, :destroy]
skip_before_action :authorize, only: :create
class UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users
    end

    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
        end

    def update
        if @user.update(user_params)render json: @user
        else
            render json: @user.errors, status: :unprocessable_entity
        end

    def destroy
        @user.destroy
    end
    private

    def set_user
        @user = User.find(params[:id])
    end

    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation, :email, :image)
    end 

end
