class CreateParkings < ActiveRecord::Migration[5.2]
  def change
    create_table :parkings do |t|
      t.string :title
      t.string :desc

      t.timestamps
    end
  end
end
