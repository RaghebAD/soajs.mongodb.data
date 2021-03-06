var gc_posts = {
	"_id": ObjectId("55c0c5aee0e554410b76dbe8"),
	"name": "gc_posts",
	"author": "owner",
	"genericService": {
		"config": {
			"errors": {
				"400": "Database Error",
				"401": "Invalid Page Id Provided"
			},
			"schema": {
				"commonFields": {
					"id": {
						"source": [
							"query.id"
						],
						"validation": {
							"type": "string"
						},
						"required": true
					},
					"title": {
						"source": [
							"body.title"
						],
						"validation": {
							"type": "string"
						},
						"required": true
					},
					"content": {
						"source": [
							"body.content"
						],
						"validation": {
							"type": "string"
						},
						"required": true
					}
				},
				"/list": {
					"_apiInfo": {
						"l": "List Entries",
						"group": "Posts",
						"groupMain": true
					}
				},
				"/add": {
					"_apiInfo": {
						"l": "Add Page",
						"group": "Posts"
					},
					"commonFields": [
						"title",
						"content"
					]
				},
				"/update": {
					"_apiInfo": {
						"l": "Update Page",
						"group": "Posts"
					},
					"commonFields": [
						"title",
						"content",
						"id"
					]
				},
				"/get": {
					"_apiInfo": {
						"l": "Get One Page",
						"group": "Posts"
					},
					"commonFields": [
						"id"
					]
				},
				"/delete": {
					"_apiInfo": {
						"l": "Delete Page",
						"group": "Posts"
					},
					"commonFields": [
						"id"
					]
				}
			},
			"serviceName": "gc_posts",
			"servicePort": 4501,
			"requestTimeout": 30,
			"requestTimeoutRenewal": 5,
			"awareness": false,
			"extKeyRequired": false,
			"maxFileUpload": "4096"
		},
		"options": {
			"multitenant": false,
			"security": false,
			"session": true,
			"acl": false,
			"oauth": true
		}
	},
	"soajsService": {
		"db": {
			"config": {
				"DEV": {
					"gc_posts": {
						"cluster": "cluster1",
						"tenantSpecific": false
					}
				}
			},
			"multitenant": false,
			"collection": "data"
		},
		"apis": {
			"/list": {
				"method": "get",
				"mw": {
					"code": 400
				},
				"type": "list",
				"workflow": {
					"postExec": "console.log('list api postExec workflow overide');"
				}
			},
			"/add": {
				"method": "post",
				"mw": {
					"code": 400,
					"model": "add"
				},
				"type": "add",
				"workflow": {}
			},
			"/update": {
				"method": "post",
				"mw": {
					"code": 401,
					"model": "update"
				},
				"type": "update",
				"workflow": {}
			},
			"/get": {
				"method": "get",
				"mw": {
					"code": 401
				},
				"type": "get",
				"workflow": {}
			},
			"/delete": {
				"method": "get",
				"mw": {
					"code": 401
				},
				"type": "delete",
				"workflow": {}
			}
		}
	},
	"soajsUI": {
		"list": {
			"columns": [
				{
					"label": "Title",
					"name": "title",
					"field": "fields.title",
					"filter": []
				}
			],
			"defaultSortField": "title",
			"defaultSortASC": false
		},
		"form": {
			"add": [
				{
					"name": "title",
					"label": "Title",
					"placeholder": "My Page ...",
					"tooltip": "Enter the title of the page",
					"type": "text",
					"required": true
				},
				{
					"name": "content",
					"label": "Content",
					"placeholder": "",
					"tooltip": "",
					"type": "editor",
					"required": true
				}
			],
			"update": [
				{
					"name": "title",
					"label": "Title",
					"placeholder": "My Page ...",
					"tooltip": "Enter the title of the page",
					"type": "text",
					"required": true
				},
				{
					"name": "content",
					"label": "Content",
					"placeholder": "",
					"tooltip": "",
					"type": "editor",
					"required": true
				}
			]
		}
	},
	"v": 1,
	"ts": 1438604213165,
	"modified": 1438604213159
};