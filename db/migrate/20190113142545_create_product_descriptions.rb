class CreateProductDescriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :product_descriptions do |t|
      t.string :title
      t.text :desc

      t.timestamps
    end
  end
end
