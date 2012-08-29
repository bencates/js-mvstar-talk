module RenderSlides
  def render_slides
    build_slides filelist
  end

  private

  def filelist(path = "source/_slides")
    Dir.entries(path).map do |f|
      if f[0] != '.' and File.directory?(path + '/' + f)
        filelist(path + '/' + f).map { |s| f + '/' + s }
      else
        f.gsub /\..*$/, ''
      end
    end.reject { |f| f.empty? }
  end

  def build_slides(slides)
    slides.map do |slide|
      content_tag :section do
        if slide.is_a? Array
          text = build_slides slide
        else
          text = render nil, "_slides/#{slide}", locals: {}, layout: false
        end
      end
    end.join "\n"
  end

end

