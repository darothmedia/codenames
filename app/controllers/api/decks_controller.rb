module API
  class DecksController < ApplicationController
    def index
      decks = Deck.where_custom
      decks = decks.where_public if params[:include_private_decks] == 'false'

      render json: { decks: decks.to_json(only: [:id, :name, :is_private]) }
    end

    def create
      @deck = Deck.new(deck_params)
      if @deck.save
        render :create
      else
        render json: @deck.errors.full_messages, status: 422
      end
    end

    private
    def deck_params
      params.require(:deck).permit(:name, :is_private, :num_cards_included)
    end

  end
end
