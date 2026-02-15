import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router";
import AppShell from "./AppShell";

export function render(url: string) {
  return renderToString(
    <MemoryRouter initialEntries={[url]}>
      <AppShell />
    </MemoryRouter>,
  );
}
