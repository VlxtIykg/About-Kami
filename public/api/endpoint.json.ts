
export async function GET({}) {
  return new Response(
    JSON.stringify({
		"bot": {
			"status": "online",
			"capacity": "262k",
			"mph": [5, 7],
			"total": "1.5m"
		}, 
		"fuel": {
			"amount": 10
		}
})
  )
}