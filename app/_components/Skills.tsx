import { Section } from "./Section";
import { LaravelLogo } from "./icons/LaravelLogo";
import { Code } from "./Code";
import { VueLogo } from "./icons/ReactLogo";
import { ReactLogo } from "./icons/VueLogo";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className=" text-3xl font-semibold tracking-tight first:mt-0">
        I love working on...
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <LaravelLogo size={42} />

          <h3 className=" text-2xl font-semibold tracking-tight">Laravel</h3>
          <p className="text-sm text-muted-foreground">
            My main framework is <Code>Laravel</Code>. I also use{" "}
            <Code>Vue.js</Code> as a frontend framework.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <VueLogo size={42} />

          <h3 className=" text-2xl font-semibold tracking-tight">Vue.js</h3>
          <p className="text-sm text-muted-foreground">
            I like using <Code>Vue.js</Code>, its a lightweight, easy-to-use
            framework.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <ReactLogo
            size={42}
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          />

          <h3 className=" text-2xl font-semibold tracking-tight">React</h3>
          <p className="text-sm text-muted-foreground">
            I like <Code>React</Code> for its large community and flexibility
          </p>
        </div>
      </div>
    </Section>
  );
};
