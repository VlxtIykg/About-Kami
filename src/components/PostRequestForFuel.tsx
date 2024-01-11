import { useState, useEffect } from "preact/hooks";
import { navigate } from "astro:transitions/client";

interface PrefetchedData {
  amount: number;
  id: number;
}

const closeFuelMenu = () => {
  useEffect(() => {
    const updateMenu = document.getElementById("update_form");
    const fuelToggle = document.getElementById("update_fuel");
    const formToggle = document.getElementById("close_form");

    if (updateMenu && formToggle && fuelToggle !== null) {
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
    fetch("http://localhost:3001/fuel")
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
    const response = await fetch("http://localhost:3001/fuel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, id: 1 }),
    });
    const data = await response.json();
    if (data) {
      let href = "/gabagool";
      navigate(href);
    }
  }

  return (
    <>
      <p id="fuel_number">
        Amount:  {prefetchedData.amount}
      </p>

      <div>
        <button className="card__buttons" id="update_fuel">
          Update fuel
        </button>
        <div className="form-popup" id="update_form">
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
          </form>

          <button
            type="button"
            id="close_form"
            class="btn cancel"
            onClick={closeFuelMenu}>
            Close
          </button>
        </div>
      </div>
    </>
  );
}

