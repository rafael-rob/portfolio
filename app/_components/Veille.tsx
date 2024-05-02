import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { Code } from "./Code";

export const Veille = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Veille Technologique</Badge>
      <h2 className=" text-3xl font-semibold tracking-tight first:mt-0">
        Sécurité dans l{"'"}informatique
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <p className="text-sm text-muted-foreground">
            La cybersécurité est très important dans le domaine informatique,
            rester à jour sur les dernières vulnérabilités et les dernières
            attaques est primordial pour éviter les attaques et les
            vulnérabilités des applications et des sites nous développons. Je
            maitiens donc une veille technlogiqueactive en
            consultantrégulièrement les actualités sur ce sujet, en consultant
            des sources d{"'"}informations telles que{" "}
            <Code>Kaspersky Lab Threatpost</Code>,<Code>The Hacker News</Code>{" "}
            et <Code>Schneier on Security</Code>.
          </p>
        </div>
      </div>
    </Section>
  );
};
