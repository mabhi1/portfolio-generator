import dynamic from "next/dynamic";

const SimplePortfolio = dynamic(() => import("../../simple-portfolio/app/page"));

export default function Home() {
  return (
    <div>
      Home
      <SimplePortfolio />
    </div>
  );
}
