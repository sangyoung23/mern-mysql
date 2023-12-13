import mysql from "mysql";
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0000",
  database: "messenger",
});

import express from "express";
const app = express();
// json 형태의 req body를 파싱하기 위해 미들웨어 사용
app.use(express.json());

// cors
import cors from "cors";
app.use(cors());

app.listen(8800, () => {
  console.log("Connected to server");
});

app.get("/", (req, res) => {
  res.json("back server");
});

// mysql table 연결
// app.get("/messages", (req, res) => {
//   const q = "select * from messages";
//   db.query(q, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });

app.post("/messages", (req, res) => {
  const q = "insert into messages (`content`, `password`) values (?)";
  const values = [req.body.content, req.body.password];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Message has been sent successfully");
  });
});
