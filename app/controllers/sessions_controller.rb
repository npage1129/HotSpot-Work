class SessionsController < ApplicationController
  skip_before_action :authorize_user, :only => [:create, :destroy]
  def create
    user = User.find_by(username:params[:username])
   
    
    if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :ok
    else
        render json: { error: "Invalid Password and/or Username" },  status: :unauthorized
    end
    puts session[:user_id]
end
    
      def destroy
        session.delete :user_id
        head :no_content
      end
end
