class CreateUserlists < ActiveRecord::Migration
  def change
    create_table :userlists do |t|
      t.string :name
      t.integer :score

      t.timestamps
    end
  end
end
