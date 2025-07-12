import themes from "daisyui/src/theming/themes";
import { ConfigProps } from "./types/config";

const config = {
  // REQUIRED
  appName: "WarmCallAI",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "Turn every cold call into a warm conversation with AI-powered prospect intelligence that reveals personal insights in seconds.",
  // REQUIRED (no https://, not trailing slash at the end, just the naked domain)
  domainName: "warmcallai.com",
  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (resend.supportEmail) otherwise customer support won't work.
    id: "",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: ["/"],
  },
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1Niyy5AxyNprDp7iZIqEyD2h"
            : "price_456",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Free",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Perfect for individual sales reps testing the waters",
        // The price you want to display, the one user will be charged on Stripe.
        price: 0,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 0,
        features: [
          {
            name: "5 queries per month",
          },
          { name: "Basic prospect intelligence" },
          { name: "Personal insights discovery" },
          { name: "Connection point identification" },
          { name: "Email support" },
        ],
      },
      {
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_456",
        // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
        isFeatured: true,
        name: "Pro",
        description: "Most popular for individual sales professionals",
        price: 12.99,
        priceAnchor: 0,
        features: [
          {
            name: "50 queries per month",
          },
          { name: "Everything in Free" },
          { name: "Advanced AI insights" },
          { name: "Real-time prospect updates" },
          { name: "Integration with CRM" },
          { name: "Priority support" },
          { name: "Conversation starter suggestions" },
        ],
      },
      {
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_456",
        name: "Business",
        description: "Perfect for sales teams and small businesses",
        price: 24.99,
        priceAnchor: 0,
        features: [
          {
            name: "100 queries per month per user",
          },
          { name: "Everything in Pro" },
          { name: "Team collaboration tools" },
          { name: "Shared prospect database" },
          { name: "Team performance analytics" },
          { name: "Admin dashboard" },
          { name: "Bulk prospect research" },
          { name: "Custom integrations" },
        ],
      },
      {
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1O5KtcAxyNprDp7iftKnrrpw"
            : "price_456",
        name: "Enterprise",
        description: "Custom solution for large sales organizations",
        price: 0,
        priceAnchor: 0,
        features: [
          {
            name: "Unlimited queries",
          },
          { name: "Everything in Business" },
          { name: "Custom AI training" },
          { name: "Dedicated account manager" },
          { name: "Advanced security features" },
          { name: "Custom integrations" },
          { name: "SLA guarantees" },
        ],
      },
    ],
  },
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  resend: {
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `WarmCallAI <noreply@resend.warmcallai.com>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `WarmCallAI Team <team@resend.warmcallai.com>`,
    // Email shown to customer if they need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "support@warmcallai.com",
  },
  colors: {
    // REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you use any theme other than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
    theme: "light",
    // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after "data-theme=")
    // OR you can just do this to use a custom color: main: "#f37055". HEX only.
    main: "#1E40AF", // Deep Blue for trust and professionalism
  },
  auth: {
    // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API
    loginUrl: "/api/auth/signin",
    // REQUIRED — the path you want to redirect users to after a successful login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js
    callbackUrl: "/dashboard",
  },
} as ConfigProps;

export default config;
