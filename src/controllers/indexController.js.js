module.exports={
    index: (req,res)=> res.render('index', {title : 'Home'}), 
    contact: (req,res)=> res.render('contact',{title : 'Contact'}), 
    about: (req,res)=> res.render('about', {title : 'About'}), 
    admin: (req,res)=> res.render('admin', {title : 'Admin', admin: req.query.user}), 
    music: (req,res)=> res.render('music', {title : 'Music'}), 
    login: (req,res)=> res.render('login',{title : 'Login'}),
    noEntry: (req,res)=> res.render('noEntry', {title : 'No entry'}),  
}