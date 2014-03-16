class Api::TodosController < ApplicationController
  def create
    @todo = Todo.new(self.todo_params)
    if @todo.save
      render :json => @todo
    else
      render :json => @todo.errors, :status => :unprocessable_entity
    end
  end

  def index
    @todos = Todo.all
    render :json => @todos
  end

  def show
    @todo = Todo.find(params[:id])
    render :json => @todo
  end

  protected
  def todo_params
    self.params[:todo].permit(:title)
  end
end
