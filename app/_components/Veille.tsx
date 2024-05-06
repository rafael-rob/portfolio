import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { Code } from "./Code";

export const Veille = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Technology Watch</Badge>
      <h2 className=" text-3xl font-semibold tracking-tight first:mt-0">
        IT Security
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <p className="text-sm text-muted-foreground">
            Cybersecurity is vital in IT. Staying updated on the newest
            vulnerabilities and threats is essential to protect the applications
            and websites we develop. Therefore, I maintain an active technology
            watch by regularly monitoring sources such as
            <Code>Kaspersky Lab Threatpost</Code>,<Code>The Hacker News</Code>
            and <Code>Schneier on Security</Code>.
          </p>
        </div>
      </div>
    </Section>
  );
};
