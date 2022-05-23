class CommentSerializer < ActiveModel::Serializer
  belongs_to :user
  belongs_to :post
  attributes :id, :post_id, :user_id, :comment
end

