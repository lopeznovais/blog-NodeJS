if(process.env.NODE_ENV == "production"){
    module.exports = {mongoURI: "mongodb+srv://lopeznovais:Bacg2126@blogapp-nodejs-8ejpb.mongodb.net/test?retryWrites=true&w=majority"}
}else{
    module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}