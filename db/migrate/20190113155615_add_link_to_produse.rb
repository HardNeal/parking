class AddLinkToProduse < ActiveRecord::Migration[5.2]
  def change
    add_column :produses, :link, :string
  end
end
