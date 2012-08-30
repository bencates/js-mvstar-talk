#= require_tree ./lib
#= require reveal

# Fires when a slide with data-state=customevent is activated
Reveal.addEventListener 'customevent', ->
  console.log '"customevent" has fired'

# Fires each time a new slide is activated
Reveal.addEventListener 'slidechanged', (event) ->
  # Log speaker notes to the console
  $slide = $(event.currentSlide)
  window.slide = $slide
  title = $slide.find('h1,h2,h3,h4,h5,h6').first().text()
  notes = $slide.find('aside.notes').text()
  console.log("""
  ==========================================
  #{title}
  ------------------------------------------
  #{notes}
  ==========================================
  """)

# Full list of configuration options available here:
# https:#github.com/hakimel/reveal.js#configuration
Reveal.initialize
  controls: true
  progress: true
  history: true

  theme: Reveal.getQueryHash().theme or 'default', # default/neon/beige
  transition: Reveal.getQueryHash().transition or 'default' # default/cube/page/concave/linear(2d)

hljs.initHighlightingOnLoad()

