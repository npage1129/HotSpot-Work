class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :image, :username
end
