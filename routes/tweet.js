const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("전체 트위터 조회");
});

router.get("/:id", (req, res) => {
  console.log(req.params);

  res.send("특정 트위터 조회");
});

router.post("/", (req, res) => {
  // 데이터 베이스 조회
  // 11 id 생성
  // 너는 이제부터 11번 유저야

  res.send("게시물 생성");
});

router.put("/:id", (req, res) => {
  res.send("게시물 수정");
});

router.delete("/:id", (req, res) => {
  res.send("게시물 삭제");
});

module.exports = router;
