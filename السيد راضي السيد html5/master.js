document.getElementById("getLocation").onclick = () => {
  navigator.geolocation.getCurrentPosition((p) => {
    document.getElementById("lat").innerHTML = Math.round(p.coords.latitude);
    document.getElementById("long").innerHTML = Math.round(p.coords.longitude);
  });
};
