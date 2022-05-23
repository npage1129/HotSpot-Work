class PostSerializer < ActiveModel::Serializer
  belongs_to :user
  has_many :comments, dependent: :destroy
  belongs_to :event
  attributes :id, :user_id, :event_id, :img, :caption
end
