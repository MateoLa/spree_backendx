module SpreeBackendx
  class Engine < ::Rails::Engine
    isolate_namespace Spree
    engine_name 'spree_backendx'    
  end
end
