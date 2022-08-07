$(document).ready(redimensionnerVideos);

function redimensionnerVideos() {

	$('iframe').each(function() {
        var elt = $(this);
        var ratio = elt.width() / elt.height();
        var limite = parseInt(elt.attr('width'));
        var largeur = Math.min(elt.parent().width(), limite);
        video.width(largeur).height(largeur / ratio);
    });

}

$(window).resize(redimensionnerVideos);