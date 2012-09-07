#= require_tree ./lib
#= require reveal

initialTime = Date.now()
elapsedTime = (start) ->
  diff = Date.now() - start
  diff = Math.round(diff / 1000)
  seconds = diff % 60
  seconds = "0#{seconds}" if seconds < 10
  minutes = Math.floor(diff / 60)
  "#{minutes}:#{seconds}"

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
  window.clear?()
  console.log("""
  ==========================================
  #{elapsedTime(initialTime)} - #{title}
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

