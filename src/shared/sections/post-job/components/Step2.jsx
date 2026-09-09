import Button from "@/shared/ui/Button";
import InputText from "@/shared/ui/InputText";
import MaskIcon from "@/shared/ui/MaskIcon";
import ArrowIcon from "@/assets/icons/arrow-outline.svg";

const BARD_ICON_PATH =
  "M10.6144 17.7956L11.492 15.7854C12.2731 13.9966 13.6789 12.5726 15.4325 11.7942L17.8482 10.7219C18.6162 10.381 18.6162 9.26368 17.8482 8.92277L15.5079 7.88394C13.7092 7.08552 12.2782 5.60881 11.5105 3.75894L10.6215 1.61673C10.2916 0.821766 9.19319 0.821768 8.8633 1.61673L7.97427 3.75892C7.20657 5.60881 5.77553 7.08552 3.97685 7.88394L1.63658 8.92277C0.868537 9.26368 0.868536 10.381 1.63658 10.7219L4.0523 11.7942C5.80589 12.5726 7.21171 13.9966 7.99275 15.7854L8.8704 17.7956C9.20776 18.5682 10.277 18.5682 10.6144 17.7956ZM19.4014 22.6899L19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899Z";

export default function Step2({ setStep }) {
  return (
    <section className="flex w-full h-full justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8 w-full max-w-170">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="font-semibold text-foreground text-[32px]">
            Customize & Complete Your Job Post
          </h2>
          <p className="text-foreground text-sm font-normal leading-5">
            Phillip AI has drafted your job details. Feel free to edit, add a
            title, and complete your post in few steps.
          </p>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <InputText
            label="Job title"
            placeholder="Write a job title"
            className="w-full rounded-full! border-2! border-[#9A85FF]! focus:shadow-[0px_0px_0px_2.5px_#8E81F52B]!"
          />
          <div className="border-2 border-transparent bg-[linear-gradient(#fff,#fff),linear-gradient(90deg,#3864FD_0%,#D22CFF_50.26%,#F72384_100%)] bg-origin-border [background-clip:padding-box,border-box] rounded-[20px] pb-4">
            <div className="flex w-full justify-center items-center bg-[#F4F2FE] h-8! rounded-t-[20px] mb-4">
              <p className="flex gap-2 items-center bg-[linear-gradient(90deg,#D22CFF_0%,#5B57FD_100%)] bg-clip-text text-transparent text-xs! font-medium">
                <MaskIcon
                  path={BARD_ICON_PATH}
                  className="h-4 w-4"
                  style={{
                    background:
                      "linear-gradient(180deg, #D32DFF 0%, #5559FD 100%)",
                  }}
                />
                Refined by Phillip AI
              </p>
            </div>
            <p className="px-4 font-medium text-sm text-foreground leading-5">
              I’m looking for an experienced and proactive Senior Full-Stack
              Software Engineer to drive the end-to-end development of our
              scalable web platform. In this role, you will architect
              responsive, high-performance user interfaces using React and
              TypeScript, while designing secure, robust backend APIs and
              microservices using Node.js. You will take ownership of database
              design and optimization with PostgreSQL, integrate cloud-based
              infrastructure, and ensure seamless data flow across the entire
              stack. The ideal candidate has deep expertise in full-stack
              architecture, clean coding practices, and modern deployment
              pipelines, with a strong ability to translate product requirements
              into reliable, production-ready software solutions.
            </p>
          </div>
        </div>
        <div className="flex w-full justify-center mb-20">
          <Button
            type={"primary"}
            label="Looks good"
            onClick={() => setStep(3)}
            suffixIcon={<ArrowIcon className="rotate-90" />}
            className="w-full max-w-85"
          />
        </div>
      </div>
    </section>
  );
}
