import { metadata } from "./layout";

export default function Home() {
  const title = String(metadata.title);

  return <h1 className="p-7 text-5xl">{title}</h1>;
}
