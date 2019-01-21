class AddPositionToParkingFeatures < ActiveRecord::Migration[5.2]
  def change
    add_column :parking_features, :position, :string
  end
end
