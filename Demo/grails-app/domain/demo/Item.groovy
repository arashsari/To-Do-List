package demo

import grails.rest.*
@Resource(uri='/items')

class Item {

	String description
	Boolean completion
	
    static constraints = {
		
		description blank:false
		completion default:false
    }
}
