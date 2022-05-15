Rails.application.routes.draw do
  resources :products do
    member do
      post :like
      delete :unlike
    end
  end

  resource :users, only: [:create] do
    get "sign_up"
    get "login"
  end

  resource :sessions, only: [:create, :destroy]

  root "products#index"
end
