export default function Hamburger(): void {
  document?.querySelector(".hamburger")?.addEventListener("click", () => {
    document?.querySelector(".nav-links")?.classList.toggle("expanded");
  });
  return;
}
