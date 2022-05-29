class OrdersController < ApplicationController
  include Payable

  before_action :authenticate_user!

  def pay
    order = Order.friendly.find(params[:id])

    result = gateway.transaction.sale(
      amount: order.amount,
      payment_method_nonce: params[:nonce]
    )

    if result.success?
      redirect_to root_path, notice: "成功"
    else
      redirect_to root_path, notice: "付款發生錯誤"
    end
  end
end
