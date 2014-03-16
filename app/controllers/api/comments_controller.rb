class Api::CommentsController < ApplicationController
  def create
    @comment = TodoComment.new(self.comment_params)
    if @comment.save
      render :json => @comment
    else
      render :json => @comment.errors, :status => :unprocessable_entity
    end
  end

  def index
    @comments = TodoComment.where(:todo_id => params[:todo_id])
    render :json => @comments
  end

  def show
    @comment = TodoComment.find(params[:id])
    render :json => @comment
  end

  protected
  def comment_params
    self.params[:comment].permit(:todo_id, :content)
  end
end
