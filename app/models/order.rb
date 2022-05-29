class Order < ApplicationRecord
  extend FriendlyId
  friendly_id :generate_serial, use: :slugged

  belongs_to :user
  belongs_to :product

  private
  def generate_serial
    Time.current.strftime("%Y%m%d") + SecureRandom.alphanumeric(6)
  end
end
