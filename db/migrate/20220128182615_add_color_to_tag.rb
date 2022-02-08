class AddColorToTag < ActiveRecord::Migration[7.0]
  def change
    add_column :tags, :color, :string, default: ""
  end
end
