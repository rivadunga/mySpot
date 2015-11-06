var sqlAdm = require("./../../sql/SqlAdm.js")


var onFinish = function (result)
{
    console.log(result);
}

var loadPosts = function (res)
{
    var query =
        "SELECT P.id_post, P.date, P.content, U.name, Pl.name, F.name " +
        "   FROM Post P " +
        "       JOIN User U ON P.id_user = U.id_user " +
        "       JOIN Place Pl ON P.id_place = Pl.id_place " +
        "       LEFT JOIN PostFile PF ON P.id_post = PF.id_post " +
        "       LEFT JOIN File F ON PF.id_file = F.id_file ";
    sqlAdm.getQuery(query, onFinish);
    res.send("holi");

}

var handleRequest = function (req, res, next)
{
    loadPosts(res);
};


exports.handleRequest = handleRequest;