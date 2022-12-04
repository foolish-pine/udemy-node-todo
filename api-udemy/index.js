const express = require("express");
const app = express();
const PORT = 5000;

app.listen(PORT, () => console.log("サーバーが起動しました。"));

app.get("/", (req, res) => {
	res.send("Udemy講座を受講中");
});

const customers = [
	{
		title: "田中",
		id: 1,
	},
	{
		title: "斎藤",
		id: 2,
	},
	{
		title: "橋本",
		id: 3,
	},
	{
		title: "鈴木",
		id: 4,
	},
	{
		title: "安藤",
		id: 5,
	},
];

app.get("/api/customers", (req, res) => {
	res.send(customers);
});
