package main

import (
	// "backend/controllers"
	"backend/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	routes.SetupRoutes(router)
	router.Run(":8080")
}
