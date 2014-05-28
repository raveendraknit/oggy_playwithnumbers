class MainController < ApplicationController

  def index

    @userlists = Userlist.all
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @userlists }
    end

  end

end
