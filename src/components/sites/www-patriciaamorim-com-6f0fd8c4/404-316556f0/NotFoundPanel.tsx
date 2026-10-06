import Link from "next/link";

const loopItems = [0, 1];
const loopLabels = [0, 1];

/** Full-viewport 404 panel: display numeral, a looping "Page not found." ticker and a home button. */
export function NotFoundPanel() {
  return (
    <div className="relative flex h-screen max-h-full w-screen max-w-full items-center justify-center">
      <div className="flex flex-col items-center text-center">
        <h2 className="relative flex flex-wrap items-center font-display text-[16em] leading-[0.7] font-bold tracking-[-0.01em] uppercase max-[991px]:text-[14em] max-[479px]:text-[8em]">
          404
        </h2>
        <div className="font-wght-450 mt-[1em] mb-[3em] flex w-[21vw] flex-col justify-center overflow-hidden text-[0.875em] font-normal tracking-normal uppercase max-[991px]:w-[32vw] max-[767px]:w-[45vw]">
          <div className="flex gap-[0.25em]">
            {loopItems.map((item) => (
              <div
                key={item}
                className="flex flex-none animate-loop-left items-center justify-start gap-[0.25em] overflow-hidden"
              >
                {loopLabels.map((label) => (
                  <div key={label}>Page not found.&nbsp;</div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <Link href="/" className="rounded-full bg-white px-[1.25em] py-[0.625em] text-canvas">
          Go back home
        </Link>
      </div>
    </div>
  );
}
