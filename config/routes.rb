Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create] do
      resources :teams, only: [:index]
    end
    resources :teams, only: [:create, :update, :show, :destroy]

    resources :teams, only: [] do
      resources :projects, only: [:index]
    end
    resources :projects, only: [:create, :update, :show, :destroy]
    resource :session, only: [:create, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
end
