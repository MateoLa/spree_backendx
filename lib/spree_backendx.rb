require 'spree'
require "spree_backendx/engine"
require "zeitwerk"

loader = Zeitwerk::Loader.for_gem
link_to_del_deco = File.join(__dir__, "../app/helpers/spree/admin/navigation_helper_decorator.rb")

loader.ignore(link_to_del_deco)
loader.setup