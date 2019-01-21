ActiveAdmin.register Produse do
	menu parent: 'Управление главная'
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

permit_params :id, :title, :desc, :image, :link

	form do |f|
    f.semantic_errors
    f.inputs do
      f.input :title
      f.input :desc
      f.input :link
      f.input :image, as: :file
     if f.object.image.present?
       f.semantic_fields_for :image_attributes do |image|
         image.input :_destroy, as: :boolean, label: 'Delete?'
       end
     end
    end
    f.actions
  end
end
