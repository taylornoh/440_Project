import AlCard from "./AlCard";
import LoadCard from "./LoadCard";
import StoreCard from "./StoreCard";

function Home() {
  return (
    <div>
      <div className="container">
        <LoadCard />
        <StoreCard />
        <AlCard />
      </div>
    </div>
  );
}

export default Home;
