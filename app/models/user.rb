require 'bcrypt'
class User < ApplicationRecord
    has_many :posts, dependent: :destroy
    has_many :comments, through: :posts
    has_secure_password


    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

    before_save { self.username = username.downcase }


    validates :username, presence: true
end 
