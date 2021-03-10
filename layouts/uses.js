import Container from '@/components/Container';

export default function UsesLayout({ children }) {
  return (
    <Container
      title="Uses – Colin Dismuke"
      description="This is the tech I'm currently using for engineering analysis, coding,
          and Zooming."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          My Gear
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          This is the tech I'm currently using for engineering analysis, coding,
          and Zooming. Most of this have been accumulated over the past several
          years, with a recent office upgrade in 2020.
        </p>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
