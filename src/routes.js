const {
  addEducationHandler,
  getAllEducationHandler,
  getEducationByIdHandler,
  editEducationByIdHandler,
  deleteEducationByIdHandler,
} = require('./handlers/education-handler');

const routes = [
  // Edukasi
  {
    method: 'POST',
    path: '/educations',
    handler: addEducationHandler,
  },
  {
    method: 'GET',
    path: '/educations',
    handler: getAllEducationHandler,
  },
  {
    method: 'GET',
    path: '/educations/{educationId}',
    handler: getEducationByIdHandler,
  },
  {
    method: 'PUT',
    path: '/educations/{educationId}',
    handler: editEducationByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/educations/{educationId}',
    handler: deleteEducationByIdHandler,
  },

  // Deteksi
  {
    method: 'GET',
    path: '/detection',
    handler: () => 'Halaman deteksi penyakit tanaman',
  },

  // Halaman 404
  {
    method: '*',
    path: '/{any*}',
    handler: () => 'Halaman tidak ditemukan',
  },
];

module.exports = routes;
