class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.integer :event_id
      t.string :img
      t.text :caption

      t.timestamps
    end
  end
end
