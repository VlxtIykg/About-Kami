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
    <>
      <p class="emphasis">
        Status:
        <span style={{ color: prefetchedData.status ? "#317f76" : "red" }}>
          {prefetchedData.status ? "  Online" : "  Offline"}
        </span>
      </p>
      <p>Capacity: {prefetchedData.capacity}</p>
      <p>MPH: {prefetchedData.coins_per_hour}</p>
      <p>Total: {prefetchedData.total_made}</p>
      <form
        onSubmit={submit}
        id="checkbox"
        class={prefetchedData.status ? "on" : "off"}>
        <label htmlFor="check" id="check__label">
          {" "}
          Click to turn {prefetchedData.status ? "on" : "off"}
      </label>
        <button id="check__button" type="submit" />
    </form>
    </>
  );
}
