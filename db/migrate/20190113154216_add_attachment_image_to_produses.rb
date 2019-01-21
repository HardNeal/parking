class AddAttachmentImageToProduses < ActiveRecord::Migration[5.2]
  def self.up
    change_table :produses do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :produses, :image
  end
end
