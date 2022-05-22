class Event < ApplicationRecord
    has_many :addresses
    has_many :posts, dependent: :destroy
end
