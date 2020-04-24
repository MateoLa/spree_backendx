module SpreeBackendx
  class Engine < Rails::Engine
    isolate_namespace Spree
    engine_name 'spree_backendx'

    config.to_prepare do
      Dir.glob(File.join(File.dirname(__FILE__), "../../app/**/*_decorator.rb")) do |c|
        Rails.configuration.cache_classes ? require(c) : load(c)
      end
    end

  end
end
