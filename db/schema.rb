# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_04_15_081129) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "decks", force: :cascade do |t|
    t.string "name", null: false
    t.boolean "is_private", null: false
    t.integer "num_cards_included", default: 4, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "input_cards"
    t.index ["name", "is_private"], name: "index_decks_on_name_and_is_private", unique: true
  end

  create_table "games", force: :cascade do |t|
    t.string "identifier", null: false
    t.string "status", default: "active", null: false
    t.jsonb "state"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "seen_cards", default: ""
    t.bigint "custom_deck_id"
    t.integer "num_cards_included_override"
    t.index ["custom_deck_id"], name: "index_games_on_custom_deck_id"
    t.index ["identifier"], name: "index_games_on_identifier", unique: true
  end

  add_foreign_key "games", "decks", column: "custom_deck_id"
end
