import { TextLink } from "./TextLink";

export function Connect() {
  const email = "tommywellsrocks@gmail.com";
  return (
    <span className="flex gap-x-1">
      Reach me at <TextLink href={`mailto:${email}`}>{email}</TextLink>
    </span>
  );
}
