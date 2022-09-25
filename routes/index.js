const express = require("express");
const axios = require("axios");
/* Creating a router object. */
const newsRou = express.Router();

/* This is a route that is used to get the news based on the country. */
newsRou.get("/", async (req, res) => {
	try {
		var url =
			"http://newsapi.org/v2/top-headlines?" +
			"country=in&" +
			"apiKey=286e21d0f5d04097b85a8e096078828b";

		const news_get = await axios.get(url);
		res.render("news", { articles: news_get.data.articles, cate: "General" });
	} catch (error) {
		if (error.response) {
			console.log(error);
		}
	}
});

/* This is a route that is used to get the news based on the search. */
newsRou.post("/search", async (req, res) => {
	const search = req.body.search;

	try {
		var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=286e21d0f5d04097b85a8e096078828b`;

		const cat=search
		const news_get = await axios.get(url);
		res.render("news", { articles: news_get.data.articles, cate:cat.charAt(0).toUpperCase() + cat.slice(1)  });
		res.render("news", { articles: news_get.data.articles, cate:'Search'});
	} catch (error) {
		if (error.response) {
			console.log(error);
		}
	}
});

/* This is a route that is used to get the news based on the category. */
newsRou.get("/:category", async (req, res) => {
	/* Getting the category from the url. */
	var category = req.params.category;
	try {
		var url =
			"http://newsapi.org/v2/top-headlines?country=in&category=" +
			category +
			"&apiKey=286e21d0f5d04097b85a8e096078828b";

		// console.log(news_get.data.articles);

		const news_get = await axios.get(url);
		res.render("category", {
			articles: news_get.data.articles,
			cate: category.charAt(0).toUpperCase() + category.slice(1),
		});
	} catch (error) {
		if (error.response) {
			console.log(error);
		}
	}
});

module.exports = newsRou;
