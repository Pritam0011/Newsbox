const express = require("express");
const axios = require("axios");
const newsRou = express.Router();

newsRou.get("/", async (req, res) => {
	try {
		const apiks = [process.env.API_KEY_1, process.env.API_KEY_2];
		const apik = apiks[Math.floor(Math.random() * apiks.length)];
		var url =
			"http://newsapi.org/v2/top-headlines?" + "country=in&" + `apiKey=${apik}`;

		const news_get = await axios.get(url);
		res.render("news", { articles: news_get.data.articles, cate: "General" });
	} catch (error) {
		if (error.response) {
			console.errorr(error);
		}
	}
});

newsRou.post("/search", async (req, res) => {
	const search = req.body.search;

	try {
		const apiks = [process.env.API_KEY_1, process.env.API_KEY_2];
		const apik = apiks[Math.floor(Math.random() * apiks.length)];
		var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=${apik}`;

		const cat = search;
		const news_get = await axios.get(url);
		res.render("news", {
			articles: news_get.data.articles,
			cate: cat.charAt(0).toUpperCase() + cat.slice(1),
		});
	} catch (error) {
		if (error.response) {
			console.error(error);
		}
	}
});

newsRou.get("/:category", async (req, res) => {
	var category = req.params.category;
	try {
		const apiks = [process.env.API_KEY_1, process.env.API_KEY_2];
		const apik = apiks[Math.floor(Math.random() * apiks.length)];
		var url =
			"http://newsapi.org/v2/top-headlines?country=in&category=" +
			category +
			`&apiKey=${apik}`;

		const news_get = await axios.get(url);
		res.render("news", {
			articles: news_get.data.articles,
			cate: category.charAt(0).toUpperCase() + category.slice(1),
		});
	} catch (error) {
		if (error.response) {
			console.error(error);
		}
	}
});

module.exports = newsRou;
