$(document).ready(function () {
	$.ajax({
		url: 'https://api.themoviedb.org/3/movie/popular?api_key=9fe754410f195aff953c3080f94a1cea&language=en-US&page=1',
		type: 'GET',
		dataType: 'json'
	})

		.done(function (datos) {
			var c = 0;
			var p = 0;
			var si = 0;
			$.each(datos.results, function (index, el) {
				c = c + 1;
				p = p + 1;
				si = si + 1;
				$('#mostrar').append(
					'<th style="background-color: black ">' +
						' <div class="card border-dark mb-3"  style="width: 17.5rem; ">' +
						' <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2' +
						el.poster_path +
						'" class="card-img-top" alt="...">' +
						' <div class="card-body" style="background-color: black" >' +
						' <h5 style="color: white" class="card-title">' +
						el.title +
						'</h5>' +
						' <p style="color: white" class="card-text">' +
						'Idioma : ' +
						el.original_language +
						'</p>' +
						' <p  style="color: white" class="card-text">' +
						'Fecha de estreno : ' +
						el.release_date +
						'</p>' +
						'<a href="#modal' +
						p +
						'"  class="btn btn-success btn-lg"  data-toggle="modal">Ver trailer</a>' +
						vertrailer(el.id, p) +
						'<a href="#moda' +
						si +
						'" class="btn btn-info btn-lg" data-toggle="modal">Sinopsis</a>' +
						'<div class="modal fade" id="moda' +
						si +
						'">' +
						'<div class="modal-dialog">' +
						'<div class="modal-content">' +
						'<div class="modal-header">' +
						'<h6 class="modal-title"> ' +
						el.title +
						'</h6>' +
						'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
						'</div>' +
						'<div class="modal-body" style="background-color: black">' +
						'<p style="color: white" >' +
						el.overview +
						'</p>' +
						'</div>' +
						'<div class="modal-footer">' +
						'</div>' +
						' </div>' +
						'</div>' +
						'</div>' +
						' </div>' +
						' </div>' +
						'</th>'
				);
				if (c == 3) {
					'<hr>' + $('#mostrar').append('<hr>' + '<div>' + '</div>');
					c = 0;
				}
			});
			console.log('success');
		})
		.fail(function () {
			console.log('error');
		});
});

function vertrailer(url, numero) {
	$.ajax({
		url:
			'https://api.themoviedb.org/3/movie/' +
			url +
			'/videos?api_key=ecd9d7dac93e34f53ce2f35af49832a0&language=en-US',
		type: 'GET',
		dataType: 'json'
	})
		.done(function (datos) {
			$('#mostrar').append(
				'<div class="modal fade" id="modal' +
					numero +
					'">' +
					'<div class="modal-dialog">' +
					' <div class="modal-content">' +
					'<iframe width="498" height="455" src="https://www.youtube.com/embed/' +
					datos.results[0].key +
					'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
					'</div>' +
					'</div>' +
					'</div>'
			);

			console.log('success');
		})
		.fail(function () {
			console.log('error');
		});

	return ' ';
}
