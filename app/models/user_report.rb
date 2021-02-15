class UserReport
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :details, type: Array
end
