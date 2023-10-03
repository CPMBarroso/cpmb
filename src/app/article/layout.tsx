export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug: string }
}) {
  return (
    <section>
      <div>{children}</div>
    </section>
  )
}
