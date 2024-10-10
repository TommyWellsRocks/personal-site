import { TextLink } from "../TextLink";

export function Connect() {
  const email = "tommywellsrocks@gmail.com";
  return (
    <span className="flex gap-x-1 text-sm font-bold sm:text-base">
      <TextLink href={`mailto:${email}`}>Contact Me</TextLink>
    </span>
  );
}
