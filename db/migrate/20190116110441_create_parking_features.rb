class CreateParkingFeatures < ActiveRecord::Migration[5.2]
  def change
    create_table :parking_features do |t|
      t.string :title
      t.text :desc
      t.string :icon

      t.timestamps
    end
  end
end
