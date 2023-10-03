export default function Layout({
  children,
  params,
  searchParams,
}: {
  children: React.ReactNode
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <section>
      <div>{searchParams?.greeting || "Hello!"}</div>
      <div>{children}</div>
    </section>
  )
}
