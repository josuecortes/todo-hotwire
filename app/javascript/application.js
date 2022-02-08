// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "controllers"
import "@hotwired/turbo-rails"
import jQuery from "jquery" 
window.jQuery = jQuery
window.$ = jQuery
import React from "react"
window.React = React
import "bootstrap"
