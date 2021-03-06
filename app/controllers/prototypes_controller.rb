class PrototypesController < ApplicationController
  before_action :set_prototype, only: [:show, :edit]

  def index
    @prototypes = Prototype.order("created_at DESC").page(params[:page]).per(8)
  end

  def new
    @prototype = Prototype.new
    @prototype.captured_images.build
  end

  def create
    @prototype = Prototype.new(prototype_params)
    if @prototype.save
      redirect_to :root, notice: 'New prototype was successfully created'
    else
      redirect_to ({ action: :new }), alert: 'YNew prototype was unsuccessfully created'
     end
  end

  def edit
  end

  def show
  end

  def destroy
    prototype = Prototype.find(params[:id])
    if prototype.user_id == current_user.id
      prototype.destroy
    end
    redirect_to ({ action: :index }), notice: '投稿を削除しました。'
  end

  def search
    @prototypes = Prototype.search(params[:q])
    @prototypes = @prototypes.page(params[:page])
    render "index"
  end

  private

  def set_prototype
    @prototype = Prototype.find(params[:id])
  end

  def prototype_params
    params.require(:prototype).permit(
      :title,
      :catch_copy,
      :concept,
      :user_id,
      captured_images_attributes: [:content, :status]
    )
  end
end
