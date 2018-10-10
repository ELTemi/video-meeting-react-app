Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'tokens' => "tokens#create"

  get 'token' => "tokens#get_token"


  get 'rooms' => "tokens#get_rooms"

  namespace :api do
    namespace :v1 do
      resources :meetings
      resources :contacts
    end
  end

end
