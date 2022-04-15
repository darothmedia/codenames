class ChangeDeck < ActiveRecord::Migration[6.0]
  def change
    add_column :decks, :input_cards, :string
  end
end
