function Courses({ params }: { params: { slug: string } }) {
  return (
    <main className="pt-[80px]">
      <h1>hello {params.slug}</h1>
    </main>
  );
}

export default Courses;
