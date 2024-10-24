import { Router } from "express";

const usuariosRoutes = Router();

let usuarios = [];

    usuariosRoutes.get("/", (req, res) => {
        return res.status(200).json({
            messege: usuarios.length == 0 
            ? "Nenhum usuário cadastrado" 
            : `total de usuários cadastrados: $ 
            {usuarios.length}`,	 
            usuarios,            
        });
    });

export default usuariosRoutes;