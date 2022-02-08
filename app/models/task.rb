class Task < ApplicationRecord
  validates_presence_of :title, :user_id

  belongs_to :user
  belongs_to :tags, optional: true

  # after_create_commit { broadcast_prepend_to 'tasks' }
  # after_update_commit { broadcast_replace_to 'tasks' }
  # after_destroy_commit { broadcast_remove_to 'tasks' }
  
end
