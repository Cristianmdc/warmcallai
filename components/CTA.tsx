import ButtonCheckout from "./ButtonCheckout";
import config from "@/config";

const CTA = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-emerald-600 overflow-hidden py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-bold text-4xl md:text-6xl tracking-tight mb-8 text-white">
          Stop Dreading Monday Mornings
        </h2>
        
        <div className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
          <p className="mb-4">
            Remember why you got into sales in the first place? To help people solve problems. To build relationships. To make a difference.
          </p>
          <p className="mb-4">
            Our AI gives you back the tools to do what you do best – connect with people and create value.
          </p>
          <p>
            No more anxiety before calls. No more generic scripts. No more feeling like you're bothering people. Just real conversations with real people about real solutions.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-semibold text-white mb-4">
            In 14 days, you could be:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div className="text-center">
              <div className="text-3xl mb-2">😊</div>
              <div className="font-semibold">The salesperson prospects actually want to talk to</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🤝</div>
              <div className="font-semibold">The one who builds relationships instead of just hitting numbers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-semibold">The one who comes home energized instead of defeated</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <ButtonCheckout className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100">
            Transform Your Sales Career Today
          </ButtonCheckout>
          <button className="btn btn-outline btn-wide text-white border-white hover:bg-white hover:text-blue-600">
            Questions? Chat with our team
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-100 text-sm">
          <span>14-day free trial</span>
          <span>•</span>
          <span>No credit card required</span>
          <span>•</span>
          <span>Join 12,000+ successful sales professionals</span>
          <span>•</span>
          <span>⭐⭐⭐⭐⭐ 4.9/5 rating</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
