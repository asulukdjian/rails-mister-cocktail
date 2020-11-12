class AddForeignKeysToDoses < ActiveRecord::Migration[6.0]
  def change
    add_column :doses, :cocktail_id, :bigint
    add_column :doses, :ingredient_id, :bigint
  end
end
