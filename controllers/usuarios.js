
const {response} = require('express')

const usuariosGet = (req,res=response)=>{
    res.json({
        msg: 'get API'
    });
}


const usuarioPost = (req,res=response)=>{
    res.json({
        msg: 'post API'
    });
}


const usuariosPut = (req,res=response)=>{
    res.json({
        msg: 'put API'
    });
}  


const usuariosPatch = (req,res=response)=>{
    res.json({
        msg: 'patch API --usuario patch'
    });
}


const usuariosDelete = (req,res=response)=>{
    res.json({
        msg: 'delete API'
    });
}


module.exports={
    usuarioPost,
    usuariosDelete,
    usuariosGet,
    usuariosPatch,
    usuariosPut
}