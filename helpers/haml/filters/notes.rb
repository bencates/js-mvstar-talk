module Haml::Filters::Notes
  include Haml::Filters::Base

  def render(text)
    clean_text = Haml::Helpers.html_escape(text).chomp
    %Q{<aside class="notes">\n#{clean_text}</aside>}
  end
end
