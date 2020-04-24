const http=require('http');
const express=require('express');
const path=require('path');
const app=express();
app.use(express.static(__dirname+'/public'));
app.use('/home.html',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'home.html'));
});
app.use('/doctor.html',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'doctor.html'));
});
app.use('/info.html',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'info.html'));
});
app.use('/bookappointment.html',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'bookappointment.html'));
});
app.use('/medicine.html',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'medicine.html'));
});
app.use('/medibuddy',(req,res,next)=>{
    res.redirect('https://www.medibuddy.in/about-medicine');
});
app.use('/medlife',(req,res,next)=>{
    res.redirect('https://www.medlife.com/');
});
app.use('/1mg',(req,res,next)=>{
    res.redirect('https://www.1mg.com/');
});
app.use('/medplus',(req,res,next)=>{
    res.redirect('https://www.medplusmart.com/');
});
app.use('/netmeds',(req,res,next)=>{
    res.redirect('https://www.netmeds.com/');
});
app.listen(3000);