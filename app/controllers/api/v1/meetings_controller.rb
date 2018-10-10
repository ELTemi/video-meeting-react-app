module Api::V1
  class MeetingsController < ApplicationController

    def index
      meetings = Meeting.all
      render json: meeting
    end

    def create
      meeting = Meeting.new(meeting_params)
      if meeting.save
        render json: meeting
      end
    end


    private

    def meeting_params
      params.require(:meeting).permit(:name)
    end
  end

end
