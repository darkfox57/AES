const sortOptions = {
    titulo: {
      asc: (a, b) => a.title.localeCompare(b.title),
      desc: (a, b) => b.title.localeCompare(a.title),
    },
    fecha: {
      asc: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      desc: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    },
    gmail: {
      asc: (a, b) => a.gmail.localeCompare(b.gmail),
      desc: (a, b) => b.gmail.localeCompare(a.gmail),
    },
    estado: {
      asc: (a, b) => a.status - b.status,
      desc: (a, b) => b.status - a.status,
    },
    ubicacion:{
        asc: (a, b) => a.location.localeCompare(b.location),
      desc: (a, b) => b.location.localeCompare(a.location),
    },
    fechainicio:{
      asc: (a, b) => new Date(b.date_in) - new Date(a.date_in),
      desc: (a, b) => new Date(a.date_in) - new Date(b.date_in),
    },
    fechafinal:{
        asc: (a, b) => new Date(b.date_out) - new Date(a.date_out),
        desc: (a, b) => new Date(a.date_out) - new Date(b.date_out),
      }
}

export default sortOptions