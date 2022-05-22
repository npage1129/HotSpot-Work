class EventSerializer < ActiveModel::Serializer
  attributes :id, :event_name, :venue_name, :longitude, :latitude
end
