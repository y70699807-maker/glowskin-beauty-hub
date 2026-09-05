import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/mission")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "mission" });
  },
  component: () => null,
});
