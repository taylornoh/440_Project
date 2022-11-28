import AlCard from "./AlCard";
import LoadCard from "./LoadCard";
import StoreCard from "./StoreCard";
import BranchCard from "./BranchCard";
import ComparisonCard from "./ComparisonCard";
import DataMovementCard from "./DataMovementCard";
import EICard from "./EICard";
import JumpCard from "./JumpCard";

function Home() {
  return (
    <div>
      <div className="container">
        <LoadCard />
        <StoreCard />
        <JumpCard />
        <BranchCard />
        <AlCard />
        <ComparisonCard />
        <EICard />
        <DataMovementCard />
      </div>
    </div>
  );
}

export default Home;
