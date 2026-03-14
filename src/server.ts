import app from "./app";
import db from "./db";

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

db.connect()
    .then((obj) => {
        console.log("Connected to the database");
        obj.done(); // release the connection
    })
    .catch((error) => {
        console.error("Error connecting to the database:", error);
    });
