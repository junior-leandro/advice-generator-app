import AdviceSlip from "./components/Adviceslip";

export default function Home() {
  
  return (
    <main className="flex flex-col w-screen h-screen justify-center items-center">
      <h1 className="text-3xl">Advice Generator APP</h1>
      <AdviceSlip />
    </main>
  )
}
