import excel from "excel4node";
import { request } from "express";
import XLSX from 'xlsx';
import DesertorSchema from "../models/desertoresModel.js";

const generarExcel = (req,res) => {

};

const cargar_archivo = async(req = request, res) => {

  if(req.files) {
    console.log(req.files)
    // let excel = req.files.file;
    // await excel.mv('./uploads/' + excel.name)

    // let book = XLSX.readFile('./uploads/' + excel.name);
    // let sheet_name_list = book.SheetNames;
    // let data = XLSX.utils.sheet_to_json(book.Sheets[sheet_name_list[0]]);

    // await DesertorSchema.truncate();

    // data.forEach( async (fila) => {
    //   await DesertorSchema.create(fila);
    // })

    return res.status(200).json('OK');
  }

};

export { generarExcel, cargar_archivo };
