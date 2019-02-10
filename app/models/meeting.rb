=begin class Meeting < ApplicationRecord
  validates :name, presence: true, uniqueness: true

end
=end
