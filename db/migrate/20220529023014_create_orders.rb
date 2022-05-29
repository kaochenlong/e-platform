class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.string :serial
      t.belongs_to :product
      t.integer :amount
      t.belongs_to :user, null: false, foreign_key: true
      t.string :state, default: 'pending'

      t.timestamps
    end
  end
end
