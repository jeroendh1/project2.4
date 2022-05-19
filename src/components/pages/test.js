<script src="https://unpkg.com/@googlemaps/js-api-loader@1.0.0/dist/index.min.js"></script>
  const loader = new google.maps.plugins.loader.Loader({
    apiKey: "AIzaSyDbB9RqdCMfJE89Nxv91rWJtu2b4-W1OkU",
    version: "weekly",
    libraries: ["places"]
  });
  
  const mapOptions = {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 4
  };
// Promise
loader.loadCallback(e => {
if (e) {
console.log(e);
} else {
new google.maps.Map(document.getElementById("map"), mapOptions);
}
});
 
 