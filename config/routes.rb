Rails.application.routes.draw do
  resources :users, only: [:index,:show, :create, :update, :destroy]
  resources :posts, only: [:index, :create, :update, :destroy]
  resources :comments, only: [:index, :create, :update, :destroy]
  resources :addresses, only: :index
  resources :events, only: :index
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
