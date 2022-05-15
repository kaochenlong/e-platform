class Product < ApplicationRecord
  validates :title, presence: true
  validates :price, presence: true

  belongs_to :user
end
