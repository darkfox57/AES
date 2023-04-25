import * as XLSX from "xlsx";

function DescargarExcel(data) {
 const ws = XLSX.utils.json_to_sheet(data);
 const wb = XLSX.utils.book_new();
 XLSX.utils.book_append_sheet(wb, ws, "Personas");
 XLSX.writeFile(wb, "listado_personas.xlsx");
}

export default DescargarExcel