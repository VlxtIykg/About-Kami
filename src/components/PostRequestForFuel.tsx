import { useState, useEffect } from "preact/hooks";

interface PrefetchedData {
  amount: number;
  id: number;
}

const closeFuelMenu = () => {
  useEffect(() => {
    const updateMenu = document.getElementById("update_form");
    const fuelToggle = document.getElementById("update_fuel");
    const formToggle = document.getElementById("close_form");

    if (updateMenu && formToggle) {
      fuelToggle.style.display = "block";
      updateMenu.style.display = "none";
      formToggle.style.display = "none";
    }
  })
};

export default function Form() {
  const [prefetchedData, setPrefetchedData] = useState<PrefetchedData>({
    amount: 0,
    id: 0,
  });

  useEffect(() => {
    fetch("http://localhost:3000/fuel")
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
    const amount = formData.get("amount");
    console.log(amount);
    const response = await fetch("http://localhost:3000/fuel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, id: 1 }),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <form onSubmit={submit}>
      <label>
        <input
          id="amount"
          type="text"
          placeholder="Enter fuel amt"
          required
          name="amount"
          pattern="[0-9]+"
        />
      </label>
      <button>Update</button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
}
