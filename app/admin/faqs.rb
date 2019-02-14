ActiveAdmin.register Faq do
menu parent: 'Faq'
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
permit_params :id, :title, :description, :position
form do |f|
  f.semantic_errors
  f.inputs do
    f.input :title
    f.input :description
    f.input :position, :as => :select, :collection => [["Right","right"], ["Left","left"]]
  end
  f.actions
end
end
