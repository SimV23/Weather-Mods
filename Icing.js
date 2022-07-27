//This adds realistic icing effects.
//If you fly into icing conditions, the icing on the wing is simulated.
//You can turn on your anti-icing equipment with I, however not all aircraft are equipped to handle icing conditions.

var antiIcing = new Boolean(0);
function toggleIcing() {
   if (antiIcing == 0) {
	   antiIcing = 1
	};
	if (antiIcing == 1) {
	   antiIcing = 0
	};
};

function simulateIcing() {
if (antiIcing == false) {
   if (weather.definition.cloudCover >= 100 && geofs.animation.values.altitudeMeters <= weather.definition.ceiling && geofs.animation.values.airTemp < 0) {
	
	};
} else {
   void(0)
};
};

icingInterval = setInterval(function(){
   simulateIcing()
}, 100)
