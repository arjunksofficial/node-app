module.exports = function(router){
    router.get('/',function(req,res,next){
        res.send('Good Night');
    });
    
    router.get('/arjun',function(req,res,next){
        res.send('Good Night Arjun');
    });
}