class CreateProiectes < ActiveRecord::Migration[5.2]
  def change
    create_table :proiectes do |t|
      t.string :title
      t.text :desc
      t.string :link
      t.string :image

      t.timestamps
    end
  end
end
