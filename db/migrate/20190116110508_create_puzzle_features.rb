class CreatePuzzleFeatures < ActiveRecord::Migration[5.2]
  def change
    create_table :puzzle_features do |t|
      t.string :title
      t.text :desc
      t.string :icon

      t.timestamps
    end
  end
end
