import { useState } from "preact/hooks";

export default function Form() {
  const [responseMessage, setResponseMessage] = useState("");

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
    if (data.message) {
      setResponseMessage(data.message);
    }
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