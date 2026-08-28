import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import ArrowIcon from "@/assets/icons/arrow-outline.svg";

const BLOGS = [
  {
    key: "1",
    image: { src: "/images/blog1.webp", alt: "blog 1" },
    category: "Freelance Facts",
    categoryClassName: "text-primary",
    title: "Freelance Facts: Are You Really in the Right Niche?",
    description: "You chose your niche. But is it choosing you back?",
    readTime: "5 min read",
    href: "#",
  },
  {
    key: "2",
    image: { src: "/images/blog2.webp", alt: "blog 2" },
    category: "Recruiters Playbook",
    categoryClassName: "text-company",
    title: "Freelance Facts: Are You Really in the Right Niche?",
    description: "You chose your niche. But is it choosing you back?",
    readTime: "4 min read",
    href: "#",
  },
  {
    key: "3",
    image: { src: "/images/blog3.webp", alt: "blog 3" },
    category: "Platform How To",
    categoryClassName: "text-foreground",
    title: "Are You Really in the Right Niche?",
    description: "You chose your niche. But is it choosing you back?",
    readTime: "6 min read",
    href: "#",
  },
  {
    key: "4",
    image: { src: "/images/blog4.webp", alt: "blog 4" },
    category: "Market Trends",
    categoryClassName: "text-[#2388FF]",
    title: "Are You Really in the Right Niche?",
    description: "You chose your niche. But is it choosing you back?",
    readTime: "3 min read",
    href: "#",
  },
];

function BlogCard({
  image,
  category,
  categoryClassName,
  title,
  description,
  readTime,
  href,
}) {
  return (
    <div className="flex flex-1 border border-[#E7E8EA] rounded-2xl bg-[#F9F9FA] overflow-hidden">
      <div className="flex shrink-0 w-70.5 h-70.5">
        <Image
          src={image.src}
          alt={title}
          width={282}
          height={282}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-14 p-6 min-w-0">
        <div className="flex flex-col gap-3">
          <h3 className={`text-sm font-medium ${categoryClassName}`}>
            {category}
          </h3>
          <h2 className="text-[18px] font-semibold text-foreground leading-6 line-clamp-2">
            {title}
          </h2>
          <p className="text-sm text-muted-foreground truncate">
            {description}
          </p>
        </div>
        <div className="flex w-full justify-between items-center">
          <Link href={href}>
            <Button
              type={"outline"}
              label={"Read more"}
              suffixIcon={<ArrowIcon className="rotate-45 h-4.5" />}
              className={"rounded-md! w-30! h-8!"}
            />
          </Link>
          <p className="text-muted-foreground text-sm leading-4 font-normal">
            {readTime}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Blogs() {
  return (
    <section className="flex w-full justify-center">
      <div className="w-full max-w-300">
        <div className="grid grid-cols-2 gap-6 w-full">
          {BLOGS.map(({ key, ...blog }) => (
            <BlogCard key={key} {...blog} />
          ))}
        </div>
        <div className="flex w-full justify-center my-16">
          <a href="https://prodoo.com/Blog/">
            <Button
              type={"primary"}
              label={"View all blogs"}
              className={"rounded-[10px]!"}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
