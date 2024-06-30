package controllers

import (
	"backend/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetProblems(c *gin.Context) {
	problems := []models.Problem{
		{Title: "Two Sum", Level: "Easy", Total: 1000, AcRate: "50%"},
		{Title: "Add Two Numbers", Level: "Medium", Total: 800, AcRate: "60%"},
	}
	c.JSON(http.StatusOK, problems)
}
