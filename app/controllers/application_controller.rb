class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  include ActionController::Cookies

  def user_id
    User.find_by(id: session[:user_id])
end

def authorize_user
  return render json: { error: "Not Authorized" }, status: :unauthorized unless user_id
end

  private

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

    def render_not_found_response(invalid)
        render json: { errors: invalid }, status: :not_found
    end
end