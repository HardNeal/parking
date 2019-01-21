class ApplicationController < ActionController::Base
	def access_denied(exception)
    flash[:danger] = exception.message
    redirect_to root_url
  end
end
