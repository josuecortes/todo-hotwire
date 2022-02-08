class AddFieldsToTask < ActiveRecord::Migration[7.0]
  def change
    add_column :tasks, :description, :string
    add_column :tasks, :difficult, :integer, default: 2
    add_column :tasks, :due_date, :date
    add_column :tasks, :status, :integer, default: 1
    add_reference :tasks, :user, null: false, foreign_key: true
    add_reference :tasks, :tag, null: true, foreign_key: true
  end
end
