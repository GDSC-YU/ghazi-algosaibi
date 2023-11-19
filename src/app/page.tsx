import { metadata } from "./layout";

export default function Home() {
  const title = String(metadata.title);

  return <h1 className="p-14 text-5xl font-medium">{title}</h1>;
}
