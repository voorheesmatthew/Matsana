# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  name            :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :name, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true, presence: true
  validates :password, length: {minimum: 8, allow_nil: true}
  attr_reader :password
  after_initialize :ensure_session_token

  has_many :teams_users,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :TeamUser

  has_many :projects_users,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :ProjectUser

  has_many :teams,
  through: :teams_users,
  source: :team

  has_many :projects,
  through: :projects_users,
  source: :project

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def password=(pword)
    @password = pword
    self.password_digest = BCrypt::Password.create(pword)
  end

  def is_password?(pword)
    BCrypt::Password.new(self.password_digest).is_password?(pword)
  end

  def self.find_by_credentials(email, pword)
    user = User.find_by(email: email)
    user && user.is_password?(pword) ? user : nil
  end
end
