export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  return (
    <h1>这是 Invoices</h1>
  )
}