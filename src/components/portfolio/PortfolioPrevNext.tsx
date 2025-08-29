// components/portfolio/PortfolioPrevNext.tsx
import Link from "next/link";
import { getPrevNextPortfolio } from "@/lib/portfolio";

type Props = {
  currentSlug: string;
  /** If true, disables at ends instead of wrapping */
  bounded?: boolean;
  /** Base path for your detail route */
  basePath?: "/portfolio-details";
};

export default function PortfolioPrevNext({
  currentSlug,
  bounded = false,
  basePath = "/portfolio-details",
}: Props) {
  const { prev, next } = getPrevNextPortfolio(currentSlug, bounded);

  return (
    <div className="container">
      <div className="cs_portfolio_details">
        <nav
          className="cs_section_next_prv anim_div_ShowZoom"
          aria-label="Portfolio navigation"
        >
          <div className="cs_prv_btn">
            {prev ? (
              <Link
                prefetch={false}
                href={`${basePath}/${prev.slug}`}
                aria-label={`Previous: ${prev.title}`}
              >
                Previous
              </Link>
            ) : (
              <span aria-disabled="true" className="cs_disabled">Previous</span>
            )}
          </div>

          <div aria-hidden="true">|</div>

          <div className="cs_next">
            {next ? (
              <Link
                prefetch={false}
                href={`${basePath}/${next.slug}`}
                aria-label={`Next: ${next.title}`}
              >
                Next Project
              </Link>
            ) : (
              <span aria-disabled="true" className="cs_disabled">Next Project</span>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
