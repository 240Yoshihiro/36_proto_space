class CapturedImage < ActiveRecord::Base
  belongs_to :Prototype
  belongs_to :user

  mount_uploader :content, PrototypeImageUploader

  enum status: %i(main sub)

  validates :content,
            :status,
            presence: true
end
