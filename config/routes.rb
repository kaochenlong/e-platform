Rails.application.routes.draw do
  get "/products/new", to: "products#new", as: "new_product"
  get "/products", to: "products#index"
  post "/products", to: "products#create"
  get "/products/:id", to: "products#show", as: "product"
  delete "/products/:id", to: "products#destroy"

  root "products#index"
end
