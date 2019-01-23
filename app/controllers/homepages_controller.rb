class HomepagesController < ApplicationController
  def index
  end

  def parking
  	
  end

  def puzzle
  	
  end

  def contacts
  	
  end

  def new_app
    @application = Application.new
  end

  def create_app
    @application = Application.new(application_params)

    if @application.save
      RequestMailer.new_application(@application.email).deliver_later
      redirect_to root_path,
        notice: 'application was successfully created.'
    else
      render :new
    end
  end

  def new_get_quote
    @get_quote = GetQuote.new
  end

  def create_get_quote
    @get_quote = GetQuote.new(get_quote_params)

    if @get_quote.save
      RequestMailer.new_get_quote(@get_quote.name, @get_quote.email, 
                             @get_quote.phone, @get_quote.message).deliver_later
      redirect_to root_path,
        notice: 'get_quote was successfully created.'
    else
      render :new
    end
  end

  private

  def get_quote_params
    params.require(:get_quote).permit(:name, :phone, :message, :email)
  end

  def application_params
    params.require(:application).permit(:email)
  end
end