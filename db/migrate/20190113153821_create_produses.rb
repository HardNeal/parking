class CreateProduses < ActiveRecord::Migration[5.2]
  def change
    create_table :produses do |t|
      t.string :title
      t.text :desc
      t.string :image

      t.timestamps
    end
  end
end
