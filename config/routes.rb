Rails.application.routes.draw do
  root :to => 'home#index'
  
  namespace :api, defaults: { format: 'json' } do
    post '/:identifier', to: 'games#find_or_create'
  end

  match '*path', to: 'home#index', via: :all
  mount ActionCable.server, at: '/cable'
end
