/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export const WORKS: WorkProps[] = [
  {
    image:
      "https://media.licdn.com/dms/image/D560BAQEZGvyxiOdEyA/company-logo_100_100/0/1709283137585/wienerbergerfr_logo?e=1721260800&v=beta&t=G4UX61ffp7nJZVw4fnmHKCFcZGNTEfDDNg8jQA8W2ik",
    title: "Wienerberger",
    role: "Application developer (internship)",
    date: "may 2022 - june 2022",
    url: "https://www.wienerberger.fr/",
  },
  {
    image:
      "data:image/png;base64,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",
    title: "Self employed",
    role: "web developer",
    date: "january 2023 - february 2023",
    url: "/",
    freelance: true,
  },
  {
    image:
      "data:image/png;base64,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",
    title: "Self employed",
    role: "web developer",
    date: "january 2024 - Present",
    url: "/",
    freelance: true,
  },
];
type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  freelance?: boolean;
};
export const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 rounded-full "
      />

      <div className="mr-auto">
        <div className="flex tiems-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
        </div>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>

      <p className="text-xs text-end text-muted-foreground">{props.date}</p>
    </Link>
  );
};
