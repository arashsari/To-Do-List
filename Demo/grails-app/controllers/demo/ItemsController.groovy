package demo

import grails.converters.*
class ItemsController {
	
	static namespace = "v1"

    def index() { 
		def items = Item.list()
//		render(contentType: "item/json")
		render text: items as JSON
	}
	
	def save() {
	}
	def show() {
		description = params.get('desc')
		def item = Item.findByDescription(description)
		render text: item as JSON
	}
	
	// save,show,update,delete
}
