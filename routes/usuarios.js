const{Router} = require('express');
const { usuarioPost, usuariosPut, usuariosGet, usuariosDelete, usuariosPatch } = require('../controllers/usuarios');
const router = Router();


router.get('/api',usuariosGet);
router.post('/api', usuarioPost);
router.put('/api',usuariosPut);
router.delete('/api',usuariosDelete);
router.patch('/api',usuariosPatch);








module.exports = router ;  