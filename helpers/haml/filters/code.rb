module Haml::Filters::Code
  include Haml::Filters::Base

  def render(text)
    clean_text = Haml::Helpers.html_escape text
    "<pre><code>#{clean_text.chomp}</code></pre>"
  end
end
