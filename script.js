function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: { lat: 28.0339, lng: 1.6596 }
  });

  const martyrsMemorial = { lat: 36.7459, lng: 3.0696 };
  const marker = new google.maps.Marker({
    position: martyrsMemorial,
    map: map,
    title: "Martyrs' Memorial"
  });
}


window.initMap = initMap;
