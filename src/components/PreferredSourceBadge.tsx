import { SITE } from "@/lib/site";

type Props = {
  theme?: "light" | "dark";
};

export function PreferredSourceBadge({ theme = "dark" }: Props) {
  return (
    <aside
      className={`max-w-sm rounded-sm border p-4 ${
        theme === "dark"
          ? "border-white/15 bg-white/[0.04]"
          : "border-border bg-white"
      }`}
      aria-label="Add Geofields as a preferred source in Google Search"
    >
      <p
        className={`text-[0.65rem] font-semibold uppercase tracking-[0.22em] ${
          theme === "dark" ? "text-white/50" : "text-muted-foreground"
        }`}
      >
        Google Search
      </p>
      <p className={`mt-2 text-sm font-semibold ${theme === "dark" ? "text-white" : "text-foreground"}`}>
        Add us as a preferred source
      </p>
      <p
        className={`mt-1 text-xs leading-relaxed ${
          theme === "dark" ? "text-white/55" : "text-muted-foreground"
        }`}
      >
        Highlight Geofields in Google Search, Top Stories, AI Overviews and AI Mode.
      </p>
      <div className="mt-4 min-h-10">
        <div
          data-theme={theme}
          data-lang="en"
          {...{ "google-add-preferred-source-btn": "" }}
        />
      </div>
      <a
        href={SITE.preferredSources.deeplink}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-3 inline-block text-xs underline-offset-2 hover:underline ${
          theme === "dark" ? "text-white/50 hover:text-primary" : "text-muted-foreground hover:text-primary"
        }`}
      >
        Add Geofields in Google source preferences
      </a>
    </aside>
  );
}
