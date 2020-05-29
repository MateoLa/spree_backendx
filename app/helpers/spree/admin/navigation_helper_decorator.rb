# With Zeitwerk the only way to use this kind of module (using class_eval)
# is to exclude them in "/lib/engine_name.rb" and load them manually. 

Spree::Admin::NavigationHelper.class_eval do

	def link_to_delete(resource, options = {})
    url = options[:url] || object_url(resource)
    name = options[:name] || Spree.t(:delete)
    options[:class] = 'btn btn-danger btn-sm js-delete-button'
    options[:data] = { action: 'remove', url: url, resource: resource.class.model_name.human }
    link_to_with_icon 'delete', name, url, options
  end

end