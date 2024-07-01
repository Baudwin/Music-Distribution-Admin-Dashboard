require('dotenv').config()
const earnings = require("../mockDB/dummyEarnings")
const PDFDocument = require('pdfkit')
const Papa = require('papaparse')

module.exports = {

downloadAsPdf : async(req,res)=>{

    const doc = new PDFDocument();
    doc.fontSize(12)
    doc.text('Music Distribution Company - Earnings Report', {align: 'center', bold:true})
    doc.moveDown();
    earnings.forEach(earning=>{
        doc.text(`Date : ${earning.date}     -    Earnings : ${earning.amount}`)
        doc.moveDown();
    })
    
    doc.pipe(res)
    doc.end()
    }, 


    downloadAsCsv : async(req,res)=>{
        const csv = Papa.unparse(earnings)
        res.send(csv)
    }

}

