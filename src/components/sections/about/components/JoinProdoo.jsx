import Button from "@/components/ui/Button";
import ArrowIcon from "@/assets/icons/send.svg";

export default function JoinProdoo() {
  return (
    <div className="border-t border-[#EAE5FC] relative overflow-hidden lg:pb-15">
      <section
        aria-labelledby="our-impact-heading"
        className="relative flex flex-col w-full items-center overflow-hidden"
      >
        <div className="flex flex-col gap-2 text-center items-center justify-center my-16 w-full max-w-188">
          <h2
            id="our-impact-heading"
            className="text-foreground text-[40px] font-semibold leading-13"
          >
            Join the Prodoo Community{" "}
          </h2>
          <p className="font-normal text-muted-foreground text-[16px] leading-6">
            Become part of a growing community where businesses discover
            exceptional talent and freelancers unlock new opportunities. Whether
            you&apos;re hiring  freelancers for your next expert or building
            your freelance career, Prodoo is here to help you succeed every step
            of the way.
          </p>
        </div>
        <div>
          <Button
            type={"primary"}
            label={"Contact Us"}
            suffixIcon={<ArrowIcon />}
          />
        </div>
      </section>
    </div>
  );
}
