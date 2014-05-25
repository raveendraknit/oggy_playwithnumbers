class CreateUsergames < ActiveRecord::Migration
  def change
    create_table :usergames do |t|
      t.text :name
      t.integer :score

      t.timestamps
    end
  end
end
