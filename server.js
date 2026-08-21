const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        app: "MarketLearn",
        message: "MarketLearn API is running 🚀"
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        status: "online"
    });
});

app.get("/api/products", (req, res) => {
    res.json({
        success: true,
        products: []
    });
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`MarketLearn API running on port ${PORT}`);
});
