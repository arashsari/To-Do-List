class UrlMappings {

	static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }
//		"/api/v1/items(.${format})?"(controller: "items", namespace: "v1")
		"/items"(resources:'item')

        "/"(view:"/index")
        "500"(view:'/error')
	}
}
