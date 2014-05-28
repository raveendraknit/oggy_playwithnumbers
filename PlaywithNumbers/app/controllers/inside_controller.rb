class InsideController < ApplicationController
  def index
    @userlists = Userlist.find(:all, :order => 'score desc', :limit => 1)
  end
end
