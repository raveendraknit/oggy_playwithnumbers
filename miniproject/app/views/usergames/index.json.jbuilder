json.array!(@usergames) do |usergame|
  json.extract! usergame, :id, :name, :score
  json.url usergame_url(usergame, format: :json)
end
