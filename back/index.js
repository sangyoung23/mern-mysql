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

// 로그인 유효성 검사
app.post("/login", (req, res) => {
  const {username, password} = req.body

  const sql = "SELECT * FROM messages WHERE username = ? AND password = ?"

  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.log(err)
      res.status(500).send("Internal Server Error")
    } else {
      // 일치하는 회원이 있음
      if(result.length > 0) {
        res.status(200).send({success: true, message: "find a username"})
      } 
      // 일치하는 회원이 없음
      else {
        res.status(401).send({success: false, message: "일치하는 회원이 없습니다."})
      }
    }
  });
})

// 회원가입 전 유효성 검사
app.post("/register", (req, res) => {
  const {username} = req.body

  const sql = "SELECT * FROM messages WHERE username = ?"

  db.query(sql, [username], (err, result) => {
    if (err) {
      res.status(500).send("Internal Server Error")
    } else {
      // 일치하는 회원이 있음
      if(result.length > 0) {
        res.status(401).send({success: false, message: "중복된 아이디입니다."})
      } 
      // 일치하는 회원이 없음
      else {
        res.status(200).send({success: true, message: "사용 가능한 아이디입니다."})
      }
    }
  });
})

// 회원가입
app.post("/auth/register", (req, res) => {
  const {username, password} = req.body

  const sql = "INSERT INTO messages (`username`, `password`) VALUES (?, ?)"

  db.query(sql, [username, password], (err, result) => {
    if (err) {
      res.status(500).send("Internal Serve Error")
    } else {
      res.status(200).send({success: true, message: "회원가입 성공"})
    }
  })
})

// mysql table 연결

// get 방식으로 메시지 받아오기
// app.get("/messages", (req, res) => {
//   const q = "select * from messages";
//   db.query(q, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });

// post 방식으로 client message 받고 뿌려줌
// app.post("/messages/upt", (req, res) => {
//   const q = "insert into messages (`content`, `password`) values (?)";
//   const values = [req.body.content, req.body.password];

//   db.query(q, [values], (err, data) => {
//     if (err) return res.json(err);
//     return res.json("Message has been sent successfully");
//   });
// });

// message delete
// app.delete("/messages/delete", (req, res) => {
//   // `?` 쿼리를 실행하기 전에 실제 값으로 대체되며, client로부터 입력받은 값을 안전하게 처리
//   // `?` 나중에 해당 위치에 실제 값이 바인딩되어 실행된다.
//   const q = "delete from messages where id = ?";

//   db.query(q, [req.body.id], (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });

// app.put("/messages/:id", (req, res) => {
//   const q = "update messages set `content` = ?, `password` = ? where id = ?";

//   const values = [req.body.content, req.body.password, req.params.id];

//   db.query(q, values, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });
