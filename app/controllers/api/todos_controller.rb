class Api::TodosController < ApplicationController
  def create
    @todo = Todo.new(self.todo_params)
    if @todo.save
      render :json => @todo
    else
      render :json => @todo.errors, :status => :unprocessable_entity
    end
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy!
    render :json => @todo
  end

  def index
    @todos = Todo.all
    render :json => @todos
  end

  def show
    @todo = Todo.find(params[:id])
    render :json => @todo
  end

  def update
    @todo = Todo.find(params[:id])
    if @todo.update_attributes(self.todo_params)
      render :json => @todo
    else
      render :json => @todo.errors, :status => :unprocessable_entity
    end
  end

  protected
  def todo_params
    self.params[:todo].permit(:title)
  end
end
