Rails.application.routes.draw do
  root :to => 'home#index'

  namespace :api, defaults: { format: 'json' } do
    resources :decks, only: [:index, :create]

    post '/:identifier', to: 'games#find_or_create'

    # should always go last
    get  '/:identifier', to: 'games#show'
  end

  match '*path', to: 'home#index', via: :all
  mount ActionCable.server, at: '/cable'
end
