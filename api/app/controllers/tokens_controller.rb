
class TokensController < ApplicationController

  def get_token
    token = Twilio::JWT::AccessToken.new(ENV['ACCOUNT_SID'], ENV['API_KEY_SID'], ENV['API_KEY_SECRET'],
        [], ttl: 3600, identity: 'example-user')
  end

  def get_grant
    grant = Twilio::JWT::AccessToken::VideoGrant.new
    grant.room = 'cool room'
    grant
  end

  def create
    token = get_token
    grant = get_grant
    token.add_grant grant
    render json: {token: token.to_jwt}
  end

  def get_rooms
    account_sid = ENV['ACCOUNT_SID']
    auth_token = 'f45f5fb91319427c9f957aca6f9b8839'
    @client = Twilio::REST::Client.new(account_sid, auth_token)

    rooms = @client.video.rooms.list(status: 'completed')
    rooms_list = []

    rooms.each do |record|
      rooms_list << {
        room_id: record.sid,
        date_of_call: record.date_created,
        call_duration: record.duration,
        status: record.status,
        name: record.unique_name
      }
    end
    render json: {rooms: rooms_list}
  end

end
