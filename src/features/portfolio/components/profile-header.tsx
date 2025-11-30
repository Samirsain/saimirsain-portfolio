import { USER } from "@/features/portfolio/data/user";
import { FlipSentences } from "@/registry/flip-sentences";

import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-0.5 my-[3px]">
          <img
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt="Samir Sain Full Stack Developer"
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>

        <a
          href="https://www.india.gov.in"
          target="_blank"
          rel="noreferrer"
          className="absolute top-0 -left-px"
        >
          {/* Flag of India */}
          <svg
            className="h-8 sm:h-9"
            viewBox="0 0 30 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Flag of India</title>
            {/* Saffron */}
            <rect width="30" height="6.67" fill="#FF9933" />
            {/* White */}
            <rect y="6.67" width="30" height="6.67" fill="#FFFFFF" />
            {/* Green */}
            <rect y="13.33" width="30" height="6.67" fill="#138808" />
            {/* Ashoka Chakra */}
            <circle cx="15" cy="10" r="2.5" fill="none" stroke="#000080" strokeWidth="0.3" />
            {/* 24 spokes */}
            {[...Array(24)].map((_, i) => {
              const angle = (i * 15 * Math.PI) / 180;
              const x1 = 15 + 0.8 * Math.cos(angle);
              const y1 = 10 + 0.8 * Math.sin(angle);
              const x2 = 15 + 2.5 * Math.cos(angle);
              const y2 = 10 + 2.5 * Math.sin(angle);
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#000080"
                  strokeWidth="0.2"
                />
              );
            })}
          </svg>
        </a>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex grow items-end pb-1 pl-4">
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-edge">
          <div className="flex items-center gap-2 pl-4">
            <h1 className="-translate-y-px text-3xl font-semibold">
              Samir Sain
            </h1>

            <VerifiedIcon
              className="size-4.5 text-info select-none"
              aria-label="Verified"
            />

            {USER.namePronunciationUrl && (
              <PronounceMyName
                namePronunciationUrl={USER.namePronunciationUrl}
              />
            )}
          </div>

          <div className="h-12.5 border-t border-edge py-1 pl-4 sm:h-9">
            <FlipSentences
              className="font-mono text-sm text-balance text-muted-foreground"
              variants={{
                initial: { y: -10, opacity: 0 },
                animate: { y: -1, opacity: 1 },
                exit: { y: 10, opacity: 0 },
              }}
            >
              {USER.flipSentences}
            </FlipSentences>
          </div>
        </div>
      </div>
    </div>
  );
}
