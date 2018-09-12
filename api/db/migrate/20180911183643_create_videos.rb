class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :identity
      t.string :room_name
      t.boolean :join_room
      t.string :token


      t.timestamps
    end
  end
end
