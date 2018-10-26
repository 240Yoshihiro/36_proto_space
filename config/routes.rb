Rails.application.routes.draw do
  devise_for :users
  root 'prototypes#index'
changes
  resources :users, only: [:show, :edit, :update]
  resources :prototypes, only: [:index, :new, :create, :show, :destroy] do
    resources :comments
  end
end
