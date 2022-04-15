class Deck < ApplicationRecord
  DEFAULT = 'default'
  DEFAULT_DECK = self.find_by(name: DEFAULT)

  has_many :games, foreign_key: :custom_deck_id, dependent: :destroy

  validates_presence_of :name
  validates_uniqueness_of :is_private, scope: :name

  scope :where_custom, -> { where.not(name: DEFAULT) }
  scope :where_public, -> { where(is_private: false) }

  def cards
    if self.input_cards
      self.input_cards.split(/[, \n]+/).map(&:upcase)
    else
      path = if is_private
             Rails.root.join("app/assets/decks/private/#{name}.txt")
            else
              Rails.root.join("app/assets/decks/#{name}.txt")
           end

      File.read(path).split("\n").map(&:upcase)
    end
  end
end
