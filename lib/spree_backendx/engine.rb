module SpreeBackendx
  class Engine < Rails::Engine
    isolate_namespace Spree
    engine_name 'spree_backendx'

    engine_root = File.expand_path("../../..", __FILE__)

    config.to_prepare do
      Dir.glob(File.join(engine_root, "/app/**/*_decorator.rb")) do |c|
        Rails.configuration.cache_classes ? require(c) : load(c)
      end
    end

  end
end
