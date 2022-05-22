class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :event_name
      t.string :venue_name
      t.string :date 
      t.string :time
      t.float :longitude
      t.float :latitude

      t.timestamps
    end
  end
end
