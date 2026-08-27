export default function FAQ() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="relative flex flex-col w-full items-center overflow-hidden mt-16 border-t border-[#EAE5FC] py-16"
    >
      <div className="flex flex-col gap-4 text-center items-center justify-center w-full max-w-207">
        <h2
          id="faq-heading"
          className="text-foreground text-[40px] font-semibold leading-13"
        >
          Frequently Asked Questions
        </h2>
        <p className="font-normal text-muted-foreground text-[16px] leading-6">
          Prodoo connects businesses with skilled freelancers, simplifying
          hiring and collaboration. It&apos;s a reliable platform for growth.
        </p>
      </div>
    </section>
  );
}
