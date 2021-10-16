var __path = process.cwd(),
      monk = require('monk')
 
// Connection URL
var url = 'mongodb+srv://caliph71:clph1122@cluster0.e1ccz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
try {
if(url == '') throw console.log('Cek konfigurasi database, var url belum diisi');
} catch (e) {
	return;
	}
var db = monk(url);

db.then((a) => {
  console.log('Connected To Database MongoDB')
 
})
.catch ((e) => {
	console.log('Error : '+ e +'\n\nGagal connect ke database, \ncek configurasi database apakah Connection URL sudah benar')
	})


module.exports = db