const router = require('express').Router();
const uuid = require('uuid');
const AWS = require('aws-sdk');
const isLogged = require('./middleware.js');

const s3= new AWS.S3({
    accessKeyId:process.env.S3_ACCESS_KEY,
    secretAccessKey:process.env.S3_ACCESS_SECRET,
    region:"ap-south-1"
});

router.get('/upload',isLogged, (req, res) => {
    const key = `${req.user._id}/${uuid.v1()}.jpeg`
    s3.getSignedUrl('putObject',{
        Bucket:'memories-of-vit-bucket',
        ContentType:'image/jpeg',
        Key:key
    },(err,url)=>{
        if(!err){res.send({key:key,url:url})}
    })
});
router.get('/delete/:userid/:filename',isLogged, (req, res) => {
    const key = req.params.userid+'/'+req.params.filename;
  
    s3.deleteObject(
    {
        Bucket:'memories-of-vit-bucket',
        Key:key
    }, function (err, data) {
        if (err) console.log(err);
        else console.log("Successfully deleted file from bucket");
    });
});


module.exports=router;