Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  root "report#index"

  get 'report/get_report'
  post 'report/form_submit', to: "report#form_submit", as: "form_submit"
  post 'report/get_report'
  get 'report/fetch_year'
  post 'report/fetch_year'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
