Rails.application.routes.draw do
  get "/products/new", to: "products#new", as: "new_product"

  root "pages#home"
end
