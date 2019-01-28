Rails.application.routes.draw do
  ActiveAdmin.routes(self)
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'homepages#index'
  get 'homepages/parking', to: 'homepages#parking', as: "parking"
  get 'homepages/puzzle', to: 'homepages#puzzle', as: "puzzle"
  get 'homepages/contacts', to: 'homepages#contacts', as: "contacts"
  get 'homepages/faq', to: 'homepages#faq', as: "faq"

  get "new_app" => "homepages#new_app", as: "new_app"
	post "create_app" => "homepages#create_app", as: "create_app"

	get "new_get_quote" => "homepages#new_get_quote", as: "new_get_quote"
	post "create_get_quote" => "homepages#create_get_quote", as: "create_get_quote"
end
