import config from "@/config";
import ButtonCheckout from "./ButtonCheckout";

// <Pricing/> displays the pricing plans for your app
// It's your Stripe config in config.js.stripe.plans[] that will be used to display the plans
// <ButtonCheckout /> renders a button that will redirect the user to Stripe checkout called the /api/stripe/create-checkout API endpoint with the correct priceId

const Pricing = () => {
  return (
    <section className="bg-gray-50 overflow-hidden" id="pricing">
      <div className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <p className="font-medium text-blue-600 mb-8">Pricing</p>
          <h2 className="font-bold text-3xl lg:text-5xl tracking-tight text-gray-900">
            Choose Your Path to Sales Success
          </h2>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Start free, scale as you grow. Every plan includes the AI intelligence that transforms cold calls into warm conversations.
          </p>
        </div>

        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {config.stripe.plans.map((plan) => (
            <div key={plan.priceId} className="relative w-full max-w-lg">
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <span
                    className={`badge text-xs text-white font-semibold border-0 bg-blue-600`}
                  >
                    MOST POPULAR
                  </span>
                </div>
              )}

              {plan.isFeatured && (
                <div
                  className={`absolute -inset-[1px] rounded-[9px] bg-gradient-to-r from-blue-600 to-emerald-600 z-10`}
                ></div>
              )}

              <div className="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-white p-8 rounded-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex justify-between items-center gap-4">
                  <div>
                    <p className="text-lg lg:text-xl font-bold text-gray-900">{plan.name}</p>
                    {plan.description && (
                      <p className="text-gray-600 mt-2">
                        {plan.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  {plan.priceAnchor && (
                    <div className="flex flex-col justify-end mb-[4px] text-lg ">
                      <p className="relative">
                        <span className="absolute bg-gray-400 h-[1.5px] inset-x-0 top-[53%]"></span>
                        <span className="text-gray-500">
                          ${plan.priceAnchor}
                        </span>
                      </p>
                    </div>
                  )}
                  <p className={`text-5xl tracking-tight font-extrabold text-gray-900`}>
                    {plan.price === 0 ? "Free" : `$${plan.price}`}
                  </p>
                  {plan.price !== 0 && (
                    <div className="flex flex-col justify-end mb-[4px]">
                      <p className="text-xs text-gray-500 uppercase font-semibold">
                        USD
                      </p>
                    </div>
                  )}
                </div>
                {plan.price !== 0 && (
                  <div className="text-sm text-gray-600">
                    {plan.name === "Pro" && "Save $55.88 with annual billing"}
                    {plan.name === "Business" && "Save $79.88 with annual billing"}
                  </div>
                )}
                {plan.features && (
                  <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-[18px] h-[18px] text-green-500 shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="text-gray-700">{feature.name} </span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="space-y-2">
                  <ButtonCheckout priceId={plan.priceId}>
                    {plan.price === 0 ? "Start Free Today" : `Start ${plan.name} Trial`}
                  </ButtonCheckout>

                  <p className="flex items-center justify-center gap-2 text-sm text-center text-gray-600 font-medium relative">
                    {plan.price === 0 ? "No credit card required" : "14-day free trial"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Benefits */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Why Choose WarmCallAI?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl mb-2">💳</div>
                <div className="font-semibold text-gray-900">No Setup Fees</div>
                <div className="text-sm text-gray-600">Get started immediately</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🔄</div>
                <div className="font-semibold text-gray-900">Cancel Anytime</div>
                <div className="text-sm text-gray-600">No long-term contracts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📈</div>
                <div className="font-semibold text-gray-900">Upgrade/Downgrade</div>
                <div className="text-sm text-gray-600">Change plans as needed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🛡️</div>
                <div className="font-semibold text-gray-900">30-Day Money Back</div>
                <div className="text-sm text-gray-600">Risk-free guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
