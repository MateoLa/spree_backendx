#
# This is a workorround that allows our link_to_delete to be used
# in those places where link_to_with_icon has been used to delete stuffs
#

Deface::Override.new(
    virtual_path: 'spree/admin/orders/_shipment_manifest',
    name: 'allow_use_of_js_delete_popup_by_link_to_delete',
    replace: 'erb[loud]:contains("link_to_with_icon \'delete\',")',
    text: "<%= link_to_delete item.line_item, url: \"#\", class: 'delete-item', data: { 'shipment-number' => shipment.number, 'variant-id' => item.variant.id, action: 'remove'}, title: Spree.t('delete'), no_text: true %>"
)

#
# In the same way we need to override: orders/_line_items,
# promotions/_promotion_action and promotions/_promotion_rule
#