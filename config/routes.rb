Rails.application.routes.draw do
  root 'report#index'

  get 'report/get_report'
  post 'repost/form_submit'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
