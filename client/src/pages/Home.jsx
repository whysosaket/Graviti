import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import "./HomeR.css";
import {
  useJsApiLoader,
  GoogleMap,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

const Home = () => {
  const center = { lat: 48.8584, lng: 2.2945 };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");

  const originRef = useRef();
  const destinationRef = useRef();

  const [waypoints, setWaypoints] = useState([
    { location:  'Patna, Bihar' , stopover: true },
  ]);

  const [numWaypoints, setNumWaypoints] = useState(0);
  const [waypoint, setWaypoint] = useState("");

  const addWaypoint = () => {
    setWaypoints([
      ...waypoints,
      {
        location: waypoint,
        stopover: true,
      },
    ]);
    setNumWaypoints(numWaypoints + 1);

  };


  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  async function calculateRoute() {
    console.log(originRef.current.value);
    console.log(destinationRef.current.value);
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }

    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      waypoints: waypoints,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
  }

  return (
    <div>
      <Navbar />
      <div className="half">
        <h5 className="title text-center py-5">
          Let's calculate <strong>distance</strong> from Google map
        </h5>

        <div className="right float-right w-50 d-flex">
          <div className="map mx-auto">
            <GoogleMap
              center={center}
              zoom={15}
              mapContainerStyle={{ width: "100%", height: "100%" }}
              options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
            >
              {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
              )}
            </GoogleMap>
          </div>
        </div>

        <div className="left float-left">
          <div className="lefttop w-100 d-md-flex">
            <div className="leftleft w-50">
              <div className="container">
                <div className="form-group row">
                  <div className="col-xs-2 w-100">
                    <label for="Origin" className="locationtag">
                      Origin
                    </label>
                    <Autocomplete>
                      <input
                        className="form-control locationinput my-2"
                        ref={originRef}
                        id="Origin"
                        type="text"
                        placeholder="Origin"
                      />
                    </Autocomplete>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="container">
                  <div className="form-group row">
                    <div className="col-xs-2 w-100">
                      <label for="AddStop" className="locationtag">
                        Stop
                      </label>
                      <Autocomplete>
                        <input
                          className="form-control locationinput my-2"
                          id="AddStop"
                          type="text"
                          placeholder="Add Stop"
                        />
                      </Autocomplete>
                    </div>
                  </div>
                </div>

                <div className="add-stop">
                  <i className="fa-solid fa-circle-plus d-inline-block"></i>
                  <p className="d-inline-block mx-2">Add another stop</p>
                </div>
              </div>

              <div className="container">
                <div className="form-group row">
                  <div className="col-xs-2 w-100">
                    <label for="Destination" className="locationtag">
                      Destination
                    </label>
                    <Autocomplete>
                      <input
                        className="form-control locationinput my-2"
                        ref={destinationRef}
                        id="Destination"
                        type="text"
                        placeholder="Destionation"
                      />
                    </Autocomplete>
                  </div>
                </div>
              </div>
            </div>
            <div className="leftright w-50">
              <div className="calculate text-center">
                <button className="btn btn-lg" onClick={calculateRoute}>
                  Calculate
                </button>
              </div>
            </div>
          </div>

          {distance && (
            <div className="leftbottom w-100">
              <div className="jumbotron border">
                <div className="jum-top d-flex">
                  <div className="jum-top-left align-middle my-auto w-50 d-inline-block">
                    <h4 className="text-center">
                      <strong>Distance</strong>
                    </h4>
                  </div>

                  <div className="jum-top-right align-middle my-auto  w-50 d-inline-block">
                    <h2 className="text-center">
                      <strong>{distance}</strong>
                    </h2>
                  </div>
                </div>

                <div className="jum-bottom">
                  <div className="container d-md-flex">
                    <p className="my-3">
                      The distance between{" "}
                      <strong>{originRef.current.value}</strong> and{" "}
                      <strong>{destinationRef.current.value}</strong> via the
                      seleted route is <strong>{distance}</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
