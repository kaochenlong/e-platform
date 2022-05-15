class Product < ApplicationRecord
  validates :title, presence: true
  validates :price, presence: true

  belongs_to :user
  has_one_attached :cover
end
