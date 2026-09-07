import Image from "next/image";
import ProfileIcon from "@/assets/icons/profile.svg";
import LocationIcon from "@/assets/icons/location.svg";

export default function ResumeCard({
  avatarSrc,
  avatarAlt,
  title,
  name,
  location,
  skills = [],
}) {
  return (
    <div className="flex flex-col gap-7.5 bg-[#F4F2FE] rounded-2xl p-8">
      <div className="flex gap-3">
        <Image src={avatarSrc} alt={avatarAlt} width={52} height={52} />
        <div className="flex flex-col gap-2.5">
          <h2>{title}</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <ProfileIcon />
              <span className="text-muted-foreground text-sm font-medium">
                {name}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <LocationIcon />
              <span className="text-primary text-sm font-medium">
                {location}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1">
        {skills.map((skill) => (
          <span
            key={skill}
            className="border whitespace-nowrap border-[#EAE5FC] bg-white px-3.5 py-2 text-muted-foreground font-medium text-sm cursor-pointer rounded-lg"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
