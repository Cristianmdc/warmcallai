import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import Hero from "@/components/Hero";
import FeaturesGrid from "@/components/FeaturesGrid";
import Testimonials1 from "@/components/Testimonials1";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function IndexPage() {
	return (
		<>
			{/* Hero Section */}
			<Hero />

			{/* Value Proposition Grid */}
			<FeaturesGrid />

			{/* Social Proof */}
			<Testimonials1 />

			{/* Pricing Section */}
			<Pricing />

			{/* FAQ Section */}
			<FAQ />

			{/* Final CTA */}
			<CTA />
		</>
	);
}

export const metadata = getSEOTags();
