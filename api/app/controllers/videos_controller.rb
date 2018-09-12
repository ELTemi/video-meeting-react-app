
class VideosController < ApplicationController

  def create
    video = Video.new(video_params)
    if video.save
      render json: video
    end
  end

  private

  def video_params
    params.require(:video).permit(:identity, :room_name, :join_room, :token)
  end


end
