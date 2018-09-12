class ContactsController < ApplicationController

  def index
    contacts = Contact.all
    render json: contacts    
  end

  def create
    contact = Contact.new(contact_params)
    if contact.save
      render json: contact
    end
    binding.pry
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :phone_number)
  end
end