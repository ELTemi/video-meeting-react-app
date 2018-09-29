class Contact < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :phone_number, presence: true, uniqueness: true, length: { is: 10 }
end
