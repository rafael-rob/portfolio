/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
import { Code } from "./Code";
import Link from "next/link";
import { GithubIcon } from "./icons/GithubIcon";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl text-primary">
          Rafael Robalinho
        </h2>
        <h3 className="text-3xl font-caption">FullStack Developer</h3>
        <p className="text-base">
          I{"'"}m currently a second-year web development student. I{"'"}m
          looking for a work-study position for next fall. I was able to realize
          that you can find directly on my{" "}
          <Link href="https://github.com/rafael-rob">
            <Code className="inline-flex items-center gap-1">
              <GithubIcon size={16} className="inline" />
              GitHub
            </Code>
            .
          </Link>
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="data:image/jpeg;base64,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"
          className="w-full h-auto max-w-xs max-md:w-56 rounded-full object-contain"
          alt="raf's picture"
        />
      </div>
    </Section>
  );
};
