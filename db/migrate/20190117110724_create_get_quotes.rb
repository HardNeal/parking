class CreateGetQuotes < ActiveRecord::Migration[5.2]
  def change
    create_table :get_quotes do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.text :message

      t.timestamps
    end
  end
end
