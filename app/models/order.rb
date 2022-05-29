class Order < ApplicationRecord
  include AASM
  extend FriendlyId
  friendly_id :generate_serial, use: :slugged

  belongs_to :user
  belongs_to :product

  aasm column: 'state' do
    state :pending, initial: true
    state :paid, :cancelled

    event :pay do
      transitions from: :pending, to: :paid

      after do
        puts "發送簡訊"
      end
    end

    event :cancel do
      transitions from: [:pending, :paid], to: :cancelled
    end
  end



  private
  def generate_serial
    Time.current.strftime("%Y%m%d") + SecureRandom.alphanumeric(6)
  end
end
