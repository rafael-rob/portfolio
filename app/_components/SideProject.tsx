import { Brain, Code, LucideIcon, NotebookPen, SprayCan } from "lucide-react";
import Link from "next/link";

export const SIDE_PROJETCS: SideProjectProps[] = [
  {
    Logo: Code,
    title: "Porfolio",
    description: "This website",
    url: "https://github.com/rafael-rob/portfolio",
  },
  {
    Logo: Brain,
    title: "IA",
    description: "AI for assisted recruiter reading",
    url: "https://github.com/rafael-rob/IApython",
  },
  {
    Logo: NotebookPen,
    title: "Hubskills",
    description: "Web application for skills assessment",
    url: "https://github.com/rafael-rob/hubskills",
  },
  {
    Logo: SprayCan,
    title: "ChapelotteCoiffure",
    description: "in production...",
    url: "https://github.com/rafael-rob/MaisonChapelotte",
  },
];
export type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
