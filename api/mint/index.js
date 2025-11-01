export default async function handler(req, res) {
  // Placeholder relayer endpoint — implement your own secure relayer if you want server-side minted txs.
  // This endpoint intentionally returns 501 to remind you to add real relayer logic and protect with a webhook secret.
  res.status(501).json({ error: "Relayer not configured. Implement secure relayer logic here." });
}
