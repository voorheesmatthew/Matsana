Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] do
      resources :teams, only: [:create, :update, :index, :show, :destroy]
    end

    resources :teams, only: [] do
      resources :projects, only: [:create, :update, :index, :show, :destroy]
    end
    resource :session, only: [:create, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
end
