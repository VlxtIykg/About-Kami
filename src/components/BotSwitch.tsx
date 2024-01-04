import { useState, useEffect } from "preact/hooks";

interface PrefetchedData {
  status: boolean;
  capacity: number;
  coins_per_hour: number;
  total_made: number;
}

export default function Form() {
  const [prefetchedData, setPrefetchedData] = useState<PrefetchedData>({
    status: false,
    capacity: 0,
    coins_per_hour: 0,
    total_made: 0,
  });

  useEffect(() => { 
    fetch("http://localhost:3000/bot")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setPrefetchedData(data);
      });
  }, []);

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    console.log(prefetchedData.status);
    const response = await fetch("http://localhost:3000/bot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: 1,
        status: 1,
        capacity: "300k",
        coins_per_hour: "17m",
        total_made: "120m",
      }),
    });
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
    }
  }

  return (
    <form onSubmit={submit} id="checkbox" class={prefetchedData.status ? "on" : "off"}>
      <label for="check"> Click to turn {prefetchedData.status ? "on" : "off"}
      </label>
      <button id="check" type="submit"/>
    </form>
  );
}
