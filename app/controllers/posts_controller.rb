class PostsController < ApplicationController
    def index
        render json: Post.all
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def update
        post = Post.find(params[:id])
        post.update(post_update_params)
        render json: post_update_params
    end 

    def destroy
        post = Post.find(params[:id])
        post.destroy
        head :no_content
    end

    private
    def post_params
        params.permit(:img, :caption)
    end
    def post_update_params
        params.permit(:img, :caption)
    end
end

