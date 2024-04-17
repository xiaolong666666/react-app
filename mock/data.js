const Mock = require("mockjs");

const getUserList = () =>
  Mock.mock({
    code: 200,
    msg: "success",
    data: {
      "list|10-20": [
        {
          "id|+1": 1,
          name: "@name",
          age: "@integer(1, 100)",
          sex: "@integer(0, 1)",
          birthday: "@date('yyyy-MM-dd')",
        },
      ],
    },
  });

const getArticleList = () =>
  Mock.mock({
    code: 200,
    msg: "success",
    data: {
      "list|10-20": [
        {
          "id|+1": 1,
          title: "@name",
          author: "@name",
          createTime: "@date('yyyy-MM-dd')",
        },
      ],
    },
  });

module.exports = {
  getUserList,
  getArticleList,
};
