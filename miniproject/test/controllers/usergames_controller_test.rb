require 'test_helper'

class UsergamesControllerTest < ActionController::TestCase
  setup do
    @usergame = usergames(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:usergames)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create usergame" do
    assert_difference('Usergame.count') do
      post :create, usergame: { name: @usergame.name, score: @usergame.score }
    end

    assert_redirected_to usergame_path(assigns(:usergame))
  end

  test "should show usergame" do
    get :show, id: @usergame
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @usergame
    assert_response :success
  end

  test "should update usergame" do
    patch :update, id: @usergame, usergame: { name: @usergame.name, score: @usergame.score }
    assert_redirected_to usergame_path(assigns(:usergame))
  end

  test "should destroy usergame" do
    assert_difference('Usergame.count', -1) do
      delete :destroy, id: @usergame
    end

    assert_redirected_to usergames_path
  end
end
