import Button from "@/shared/ui/Button";
import ArrowIcon from "@/assets/icons/arrow-outline.svg";
export default function Stepper({ onBack }) {
  return (
    <div className="flex justify-between items-center w-full px-37 h-17 border-t border-[#EAE5FC]">
      <div>
        <Button
          type={"default"}
          label={"Go back"}
          className="h-9!"
          prefixIcon={<ArrowIcon className="rotate-270" />}
          onClick={onBack}
        />
      </div>
      <div>
        <Button type={"default"} label={"Skip"} className="h-9!" />
      </div>
    </div>
  );
}
