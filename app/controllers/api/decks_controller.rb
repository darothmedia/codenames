module API
  class DecksController < ApplicationController
    def index
      allDecks = Deck.all
      decks = Deck.where_custom
      decks = decks.where_public if params[:include_private_decks] == 'false'

      render json: { decks: decks.to_json(only: [:id, :name, :is_private]) }
      # render json: allDecks
    end

    def create
      @deck = Deck.new(deck_params)
      if @deck.save
        render json: @deck
      else
        render json: @deck.errors.full_messages, status: 422
      end
    end

    private
    def deck_params
      params.permit(:name, :is_private, :num_cards_included, :input_cards)
    end

  end
end
