import FetchingData from "./examples/Fetchdata/FetchingData";
import GeoLocation from "./examples/Geolocation/Geolocation";
import TimerWithCleanup from "./examples/TimerWithCleanup/TimerWithCleanup";

const App = () => {
  return (
    <section>
      <h1 className="text-4xl font-semibold text-center my-8">
        Example 1: fetching data using API
      </h1>
      <FetchingData />
      <h1 className="text-4xl font-semibold text-center my-8">
        Example 2: fetching geolocation using Plain JS
      </h1>
      <GeoLocation />
      <h1 className="text-4xl font-semibold text-center my-8">
        Example 3: Clean up effect on component unmount
      </h1>
      <TimerWithCleanup />
    </section>
  );
};

export default App;
