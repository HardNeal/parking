class AddAttachmentImageToProiectes < ActiveRecord::Migration[5.2]
  def self.up
    change_table :proiectes do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :proiectes, :image
  end
end
