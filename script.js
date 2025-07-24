function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: { lat: 36.7459, lng: 3.0696 }, // center on Martyrs' Memorial
    mapId: "YOUR_MAP_ID" // optional for custom style
  });

  const martyrsMemorial = {
    lat: 36.7459,
    lng: 3.0696
  };

  const marker = new google.maps.Marker({
    position: martyrsMemorial,
    map,
    title: "Martyrs' Memorial"
  });

  const infoWindow = new google.maps.InfoWindow({
    content: `
      <div style="max-width: 200px;">
        <h3>Martyrs' Memorial</h3>
        <p>A monument commemorating Algeria’s war for independence, located in Algiers.</p>
      </div>
    `
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });

  
  infoWindow.open(map, marker);
}

window.initMap = initMap;
