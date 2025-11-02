import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bitcoin } from "lucide-react";
import { FaTelegram, FaDiscord, FaInstagram, FaXTwitter } from 'react-icons/fa6';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="fixed inset-0 gradient-orange-soft"></div>
      <div className="relative">
        <section className="hero-container">
          <div className="container mx-auto text-center max-w-5xl px-4 sm:px-6">
            <div className="mb-6 sm:mb-8 animate-fade-in">
              <div className="badge-hero inline-flex mb-4 hover-scale">
                <Bitcoin className="w-4 h-4" />
                <span className="text-sm sm:text-base">2,000+ Learners • Since 2022</span>
              </div>
            </div>

            <h1 className="text-display font-extrabold mb-6 sm:mb-8 md:mb-10 text-balance animate-fade-in-up px-2">
              Web3 & Finance <span className="gradient-text-orange">Community</span>
            </h1>

            <p className="text-body-lg text-gray-600 mb-8 sm:mb-12 md:mb-14 max-w-3xl mx-auto text-pretty animate-fade-in-up px-2">
              A knowledge-sharing community where we&apos;re all students. Learn about stocks, cryptocurrencies, market analysis, and Web3 developments through peer-to-peer discussions and educational content.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 justify-center items-stretch sm:items-center animate-fade-in-up px-2">
              <a
                href="#features"
                className="btn-primary w-full sm:w-auto group ripple shimmer min-h-[56px] sm:min-h-0"
              >
                Join Our Community
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
              </a>
              <a
                href="#faq"
                className="btn-secondary w-full sm:w-auto hover-scale min-h-[56px] sm:min-h-0"
              >
                View FAQ
              </a>
            </div>
          </div>
        </section>

        <section id="features" className="py-16 sm:py-24 md:py-36 lg:py-40 px-4 sm:px-6 flex items-center justify-center">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 items-start md:items-center">
              <div className="md:col-span-1 lg:col-span-7">
                <h2 className="text-display-sm font-extrabold mb-4 sm:mb-6 text-gray-900 text-balance">
                  Knowledge Sharing{" "}
                  <span className="gradient-text-orange">Community</span>
                </h2>
                <p className="text-body-lg text-gray-600 mb-6 sm:mb-8 text-pretty">
                  Connect with 2,000+ learners exploring stocks, crypto, and Web3.
                  Share knowledge, learn from peers, and grow together in a supportive
                  environment where everyone&apos;s a student.
                </p>

                <div className="space-y-4 sm:space-y-5">
                  <div className="flex items-start space-x-3 sm:space-x-4 slide-in-bottom animate-delay-100">
                    <div className="icon-feature hover-scale">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full hover-pulse"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg color-transition">Multi-Asset Focus</h3>
                      <p className="text-sm sm:text-base text-gray-600 mt-1">Stocks, crypto, and Web3 discussions in one place</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4 slide-in-bottom animate-delay-200">
                    <div className="icon-feature hover-scale">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full hover-pulse"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg color-transition">Peer Learning</h3>
                      <p className="text-sm sm:text-base text-gray-600 mt-1">Everyone&apos;s a student, no gurus or mentors</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4 slide-in-bottom animate-delay-300">
                    <div className="icon-feature hover-scale">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full hover-pulse"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg color-transition">Education Focus</h3>
                      <p className="text-sm sm:text-base text-gray-600 mt-1">Knowledge sharing over profit showing</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-1 lg:col-span-5 mt-8 md:mt-0">
                <h3 className="text-hero-sm font-extrabold text-gray-900 mb-5 sm:mb-6 text-center">
                  Join Our Community
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  <a href="https://t.me/moneyhunteridn" target="_blank" rel="noopener noreferrer" className="card-social bg-blue-50/50 hover:bg-blue-50 group card-lift slide-in-bottom animate-delay-100 min-h-[72px]">
                    <div className="flex items-center space-x-3 sm:space-x-4 flex-1">
                      <div className="icon-social bg-blue-500 wiggle flex-shrink-0">
                        <FaTelegram className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base color-transition">Telegram</h4>
                        <p className="text-xs sm:text-sm text-gray-600 truncate">Daily discussions & updates</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-500 transition-all duration-300 group-hover:translate-x-1 flex-shrink-0" />
                  </a>

                  <a href="https://discord.gg/PcrwafBjAA" target="_blank" rel="noopener noreferrer" className="card-social bg-indigo-50/50 hover:bg-indigo-50 group card-lift slide-in-bottom animate-delay-200 min-h-[72px]">
                    <div className="flex items-center space-x-3 sm:space-x-4 flex-1">
                      <div className="icon-social bg-indigo-500 wiggle flex-shrink-0">
                        <FaDiscord className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base color-transition">Discord</h4>
                        <p className="text-xs sm:text-sm text-gray-600 truncate">Structured community</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-indigo-500 transition-all duration-300 group-hover:translate-x-1 flex-shrink-0" />
                  </a>

                  <a href="https://instagram.com/moneyhunteridn" target="_blank" rel="noopener noreferrer" className="card-social bg-pink-50/50 hover:bg-pink-50 group card-lift slide-in-bottom animate-delay-300 min-h-[72px]">
                    <div className="flex items-center space-x-3 sm:space-x-4 flex-1">
                      <div className="icon-social bg-gradient-to-bl from-purple-600 via-pink-500 to-yellow-400 wiggle flex-shrink-0">
                        <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base color-transition">Instagram</h4>
                        <p className="text-xs sm:text-sm text-gray-600 truncate">Educational content</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-pink-500 transition-all duration-300 group-hover:translate-x-1 flex-shrink-0" />
                  </a>

                  <a href="https://x.com/moneyhunteridn" target="_blank" rel="noopener noreferrer" className="card-social bg-gray-50/50 hover:bg-gray-50 group card-lift slide-in-bottom animate-delay-400 min-h-[72px]">
                    <div className="flex items-center space-x-3 sm:space-x-4 flex-1">
                      <div className="icon-social bg-black wiggle flex-shrink-0">
                        <FaXTwitter className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base color-transition">X (Twitter)</h4>
                        <p className="text-xs sm:text-sm text-gray-600 truncate">Latest news & insights</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-black transition-all duration-300 group-hover:translate-x-1 flex-shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 sm:py-20 md:py-32 lg:py-40 px-4 sm:px-6 flex items-center justify-center">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-display-sm font-extrabold mb-3 sm:mb-4 text-gray-900 text-balance px-2">
                Frequently Asked Questions
              </h2>
              <p className="pt-2 sm:pt-4 text-base sm:text-lg md:text-xl text-gray-600 text-pretty px-2">
                Everything you need to know about Money Hunter community.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              <AccordionItem value="item-1" className="card-faq shadow-transition slide-in-bottom animate-delay-100">
                <AccordionTrigger className="text-gray-900 hover:text-[#FF5900] text-sm sm:text-base md:text-lg accordion-trigger color-transition text-left">
                  What makes Money Hunter different from other finance communities?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  We&apos;ve been building this community since 2022 with one core principle: we&apos;re all students here. No gurus, no hierarchy, just genuine peer-to-peer learning. We cover both traditional markets (stocks) and digital assets (crypto, Web3) in one supportive environment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="card-faq shadow-transition slide-in-bottom animate-delay-200">
                <AccordionTrigger className="text-gray-900 hover:text-[#FF5900] text-sm sm:text-base md:text-lg accordion-trigger color-transition text-left">
                  What topics do you cover in the community?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Our community covers stocks, cryptocurrencies, and Web3 developments. We have members specializing in technical analysis, fundamental research, and market analysis. Discussions range from beginner basics to advanced strategies across both traditional and digital assets.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="card-faq shadow-transition slide-in-bottom animate-delay-300">
                <AccordionTrigger className="text-gray-900 hover:text-[#FF5900] text-sm sm:text-base md:text-lg accordion-trigger color-transition text-left">
                  Which platforms should I join and what&apos;s the difference?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  We&apos;re active across three platforms: Telegram for daily discussions and quick updates, Discord for more structured community interactions, and Instagram for educational content and market insights. Start with whichever platform you prefer, or join multiple for the full experience.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <footer className="py-8 sm:py-10 px-4 sm:px-6">
          <div className="container mx-auto text-center max-w-4xl">
            <Link href="/" className="inline-flex items-center justify-center space-x-2 mb-5 sm:mb-6 hover-scale group">
              <Image src="/android-chrome-192x192.png" width={20} height={20} className="sm:w-6 sm:h-6" alt="logo" />
              <span className="text-base sm:text-lg font-bold text-[#FF5900] gradient-text-hover">Money Hunter</span>
            </Link>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-5 sm:mb-6 text-gray-600 text-sm sm:text-base">
              <a href="https://t.me/moneyhunteridn" target="_blank" rel="noopener noreferrer" className="link-underline hover:text-gray-900 color-transition whitespace-nowrap min-h-[44px] flex items-center">Telegram</a>
              <a href="https://discord.gg/moneyhunter" target="_blank" rel="noopener noreferrer" className="link-underline hover:text-gray-900 color-transition whitespace-nowrap min-h-[44px] flex items-center">Discord</a>
              <a href="https://instagram.com/moneyhunteridn" target="_blank" rel="noopener noreferrer" className="link-underline hover:text-gray-900 color-transition whitespace-nowrap min-h-[44px] flex items-center">Instagram</a>
              <a href="https://x.com/moneyhunteridn" target="_blank" rel="noopener noreferrer" className="link-underline hover:text-gray-900 color-transition whitespace-nowrap min-h-[44px] flex items-center">X (Twitter)</a>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-4 gap-y-2 text-gray-400 text-xs sm:text-sm">
              <span>&copy; 2025 Money Hunter</span>
              <span className="hidden sm:inline">•</span>
              <Link href="#" className="link-underline hover:text-gray-600 color-transition min-h-[44px] flex items-center">Community Guidelines</Link>
            </div>
          </div>
        </footer>
      </div >
    </div >
  );
}