BackboneDemo2::Application.routes.draw do
  namespace :api do
    resources :todos, :only => [:create, :index, :show] do
      resources :comments, :only => [:index]
    end

    resources :comments, :only => [:create, :show]
  end
end
