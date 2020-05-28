module Spree::Admin::BaseControllerDecorator

  def self.prepended(base)
    base.helper_method :main_part_classes    
    base.helper_method :filter_classes
  end

  def main_part_classes
    if cookies['sidebar-minimized'] == 'true'
      'col-12 sidebar-collapsed'
    else
      'col-12 col-md-10 offset-md-2'
    end
  end

  def filter_classes
    if cookies['sidebar-minimized'] == 'true'
      'col-12 sidebar-collapsed'
    else
      'col-12 col-md-10 offset-md-2'
    end
  end

end

Spree::Admin::BaseController.prepend Spree::Admin::BaseControllerDecorator