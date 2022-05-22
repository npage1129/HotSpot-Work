class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :event_id, :img, :caption
end
