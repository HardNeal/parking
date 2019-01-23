class RequestMailer < ApplicationMailer
	default from: "office@topparking.md"

	def new_application(email)
    @email  = "Email или номер для связи: #{email}"
    mail(:to => 'office@topparking.md', :subject => "С сайта пришла новая заявка")
  end

  def new_get_quote(username, email, phone, message)
  	@email = email
  	@name = username
  	@phone = phone
  	@message = message
    mail(:to => 'office@topparking.md', :subject => "С сайта пришла новая заявка")
  end
end
