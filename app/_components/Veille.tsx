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
            Cybersecurity is very important in IT, staying up to date with the
            latest vulnerabilities and attacks is essential to avoid attacks and
            vulnerabilities in the vulnerabilities in the applications and sites
            we develop. I therefore maintain an active technology watch by
            regularly checking the latest news on the subject, and consulting
            sources of information such as
            <Code>Kaspersky Lab Threatpost</Code>,<Code>The Hacker News</Code>
            and <Code>Schneier on Security</Code>.
          </p>
        </div>
      </div>
    </Section>
  );
};
