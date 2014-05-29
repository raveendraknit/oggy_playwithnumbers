class MainController < ApplicationController

  def index

    @userlists = Userlist.find(:all, :order => 'score desc, created_at asc', :limit => 10)

    

  end

end
