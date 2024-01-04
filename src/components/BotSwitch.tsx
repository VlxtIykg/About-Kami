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

    const ws = new WebSocket("ws://localhost:777");
    ws.addEventListener("open", () => {
      ws.send("botswitch");
    });

    const response = await fetch("http://localhost:3000/bot_status", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: !prefetchedData.status,
      }),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <form onSubmit={submit} id="checkbox" class={prefetchedData.status ? "on" : "off"}>
      <label for="check"> Click to turn {prefetchedData.status ? "on" : "off"}
      </label>
      <button id="check" type="submit"/>
    </form>
  );
}
