import Card from "@/components/Card";
import Chart from "@/components/Chart";
import Transactions from "@/components/Transactions";

export default function Home() {
  return (
    <div className="flex-">
      <div className="flex gap-4 justify-between">
        <Card />
        <Card />
        <Card />
      </div>
      <Transactions />
      <Chart />
    </div>
  );
}
