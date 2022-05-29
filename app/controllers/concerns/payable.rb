module Payable
  def gateway
    Braintree::Gateway.new(
      environment: :sandbox,
      merchant_id: ENV['MERCHANT_ID'],
      public_key: ENV['PUBLIC_KEY'],
      private_key: ENV['PRIVATE_KEY']
    )
  end
end
