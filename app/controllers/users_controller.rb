class UsersController < ApplicationController
    skip_before_action :authorize_user, :only => [:new, :index, :show, :create, :update, :destroy]


    
    def index
        @users = User.all
        render json: @users
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: {error: "Not authorized" }, status: :unauthorized
        end
    end

    def create
        user = User.create!(user_create)
        render json: user, status: :created
    end 


    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :created
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end
    private

    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation, :email, :image)
    end 

    def  user_create
        params.permit(:username, :password, :image, :email)
    end

    
end
