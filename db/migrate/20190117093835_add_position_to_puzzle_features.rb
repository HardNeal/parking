class AddPositionToPuzzleFeatures < ActiveRecord::Migration[5.2]
  def change
    add_column :puzzle_features, :position, :string
  end
end
