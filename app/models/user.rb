class User < ApplicationRecord

  validates :membership, :user_name, presence: true
  validates :username, uniqueness: true
  validates :membership, inclusion: {
    in: %w(Bronze Silver Gold Platinum)
  }
end
