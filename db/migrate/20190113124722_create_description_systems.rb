class CreateDescriptionSystems < ActiveRecord::Migration[5.2]
  def change
    create_table :description_systems do |t|
      t.string :title
      t.text :desc
      t.string :icon

      t.timestamps
    end
  end
end
