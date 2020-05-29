require 'spree'
require "spree_backendx/engine"
require "zeitwerk"

loader = Zeitwerk::Loader.for_gem
delete_popup_helper = "../app/helpers/spree_backendx/delete_popup_helper.rb"
loader.ignore(delete_popup_helper)
loader.setup