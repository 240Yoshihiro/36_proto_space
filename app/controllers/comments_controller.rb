def create
    @prototype = c.find(params[:prototype_id]) #①
    @comment = @prototype.comments.build(comment_params) #②
    @comment.user_id = current_user.id #③
    if @comment.save
      render :index #④
    end
  end

  def edit
  end

  def destroy
    @comment = Comment.find(params[:id]) #⑤
    if @comment.destroy
      render :index #⑥
    end
  end

  private
    def comment_params
      params.require(:comment).permit(:comment_content, :prototype_id, :user_id)
    end
