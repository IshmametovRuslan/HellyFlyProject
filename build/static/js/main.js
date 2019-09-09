$(document).ready(function () {
	ymaps.ready( init );

	function init() {
		var myMap       = new ymaps.Map( "map", {
			    center : [ 55.755549, 37.611850 ],
			    zoom : 13,
			    controls : []
		    } ),
		    myPlacemark = new ymaps.Placemark( [ 55.755549, 37.611850 ], {
			    // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
			    balloonContentBody : "Встречаемся тут!",
		    }, {
			    preset: 'islands#redDotIcon'
		    } );
		myMap.geoObjects.add( myPlacemark );
	}

	$('#open-player').click(function (e) {
		e.preventDefault();

		$('.player').addClass('player_visible');
		$('#open-player>img').css('display', 'none');

	})
});


