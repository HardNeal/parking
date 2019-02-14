class AddPositionToFaq < ActiveRecord::Migration[5.2]
  def change
    add_column :faqs, :position, :string
  end
end
