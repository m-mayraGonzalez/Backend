import Persona from "../models/persona.js";
import subirArchivo from '../db-helpers/subirArchivo.js';
import path from 'path';
import url from 'url';
import * as fs from 'fs'

const persona = {
  personaGet: async (req, res) => {
    const { value } = req.query;
    const persona = await Persona.find({
      $or: [
        { nombre: new RegExp(value, "i") },
        { tipoDocumento: new RegExp(value, "i") },
      ],
    }).sort({ createdAt: -1 });

    res.json({
      persona,
    });
  },

  personaPost: async (req, res) => {
    const { tipoPersona, nombre, tipoDocumento, numDocumento, direccion, telefono, email} = req.body;
    const persona = new Persona({ tipoPersona, nombre, tipoDocumento, numDocumento, direccion, telefono, email });
    await persona.save();

    res.json({
      persona,
    });
  },

  personaById: async (req, res) => {
    const { id } = req.params;
    const persona = await Persona.findOne({ _id: id });

    res.json({
      persona,
    });
  },

  personaCargarArchivo: async(req,res)=>{
    const {id}=req.params
    try {
      const nombre=await subirArchivo(req.files,undefined)
      let persona=await Persona.findById(id);
      if(persona.foto){
        const __dirname=path.dirname(url.fileURLToPath(import.meta.url));
        const pathImage=path.join(__dirname,'uploads/', persona.foto)
        if(fs.existsSync(pathImage)){
          fs.unlinkSync(pathImage)
        }
      }
      persona=await Persona.findByIdAndUpdate(id,{foto:nombre,})

      res.json({nombre})

    } catch (error) {
      res.status(400).json({error})
    }
  },

  personaPut: async (req, res) => {
    const { id } = req.params;
    const { _id, createdAt, __v, estado, ...resto } = req.body;
    const persona = await Persona.findByIdAndUpdate(id, resto);

    res.json({
      persona,
    });
  },

  personaActivar: async (req, res) => {
    const { id } = req.params;
    const persona = await Persona.findByIdAndUpdate(id, { estado: 1 });

    res.json({
      persona,
    });
  },

  personaDesactivar: async (req, res) => {
    const { id } = req.params;
    const persona = await Persona.findByIdAndUpdate(id, { estado: 0 });

    res.json({
      persona,
    });
  },

  personaDelete: async (req, res) => {
    const { id } = req.params;
    const persona = await Persona.findByIdAndDelete(id);

    res.json({
      persona,
    });
  },
};

export default persona;
