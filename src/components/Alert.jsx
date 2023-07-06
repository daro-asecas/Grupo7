import Swal from 'sweetalert2/seeetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
const Swal = require('sweetalert2');

Swal.fire({
    title: 'Sweet!',
    text: 'Modal with a custom image.',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })