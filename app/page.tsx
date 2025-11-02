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
          <div className="container mx-auto text-center max-w-5xl">
            <div className="mb-8 animate-fade-in">
              <div className="badge-hero inline-flex mb-4">
                <Bitcoin className="w-4 h-4 icon-float" />
                <span>2,000+ Learners • Since 2022</span>
              </div>
            </div>

            <h1 className="text-display font-extrabold mb-10 text-balance animate-fade-in-up">
              Web3 & Finance <span className="gradient-text-orange">Community</span>
            </h1>

            <p className="text-body-lg text-gray-600 mb-14 max-w-3xl mx-auto text-pretty animate-fade-in-up">
              A knowledge-sharing community where we&apos;re all students. Learn about stocks, cryptocurrencies, market analysis, and Web3 developments through peer-to-peer discussions and educational content.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center items-center animate-fade-in-up">
              <a
                href="#features"
                className="btn-primary w-full sm:w-auto group"
              >
                Join Our Community
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </a>
              <a
                href="#faq"
                className="btn-secondary w-full sm:w-auto"
              >
                View FAQ
              </a>
            </div>
          </div>
        </section>

        <section id="features" className="py-24 sm:py-36 md:py-40 px-6 sm:px-4 flex items-center justify-center">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="md:col-span-1 lg:col-span-7">
                <h2 className="text-display-sm font-extrabold mb-6 text-gray-900 text-balance">
                  Knowledge Sharing{" "}
                  <span className="gradient-text-orange">Community</span>
                </h2>
                <p className="text-body-lg text-gray-600 mb-8 text-pretty">
                  Connect with 2,000+ learners exploring stocks, crypto, and Web3.
                  Share knowledge, learn from peers, and grow together in a supportive
                  environment where everyone&apos;s a student.
                </p>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 gradient-orange rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1 shadow-glow-orange">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg">Multi-Asset Focus</h3>
                      <p className="text-body text-gray-600 mt-1">Stocks, crypto, and Web3 discussions in one place</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 gradient-orange rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1 shadow-glow-orange">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg">Peer Learning</h3>
                      <p className="text-body text-gray-600 mt-1">Everyone&apos;s a student, no gurus or mentors</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 gradient-orange rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1 shadow-glow-orange">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg">Education Focus</h3>
                      <p className="text-body text-gray-600 mt-1">Knowledge sharing over profit showing</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-1 lg:col-span-5">
                <h3 className="text-hero-sm font-extrabold text-gray-900 mb-6 text-center">
                  Join Our Community
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  <a href="https://t.me/moneyhunteridn" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 sm:p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                        <FaTelegram className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Telegram</h4>
                        <p className="text-xs sm:text-sm text-gray-600">Daily discussions & updates</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-500" />
                  </a>

                  <a href="https://discord.gg/PcrwafBjAA" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 sm:p-4 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors group">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                        <FaDiscord className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Discord</h4>
                        <p className="text-xs sm:text-sm text-gray-600">Structured community</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-indigo-500" />
                  </a>

                  <a href="https://instagram.com/moneyhunteridn" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 sm:p-4 bg-pink-50 hover:bg-pink-100 rounded-lg transition-colors group">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-bl from-purple-600 via-pink-500 to-yellow-400 rounded-lg flex items-center justify-center">
                        <FaInstagram className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Instagram</h4>
                        <p className="text-xs sm:text-sm text-gray-600">Educational content</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-pink-500" />
                  </a>

                  <a href="https://x.com/moneyhunteridn" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg flex items-center justify-center">
                        <FaXTwitter className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">X (Twitter)</h4>
                        <p className="text-xs sm:text-sm text-gray-600">Latest news & insights</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-black" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 sm:py-24 md:py-40 px-6 sm:px-4 flex items-center justify-center">
          <div className="container mx-auto max-w-3xl px-4 sm:px-0">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-display-sm font-extrabold mb-4 text-gray-900 text-balance">
                Frequently Asked Questions
              </h2>
              <p className="pt-4 text-body-lg text-gray-600 text-pretty">
                Everything you need to know about Money Hunter community.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              <AccordionItem value="item-1" className="glass border-[#FF5900]/10 rounded-lg px-4 sm:px-6 shadow-glow-orange hover:shadow-glow-orange-lg transition-shadow duration-200">
                <AccordionTrigger className="text-gray-900 hover:text-[#FF5900] text-base sm:text-lg accordion-trigger">
                  What makes Money Hunter different from other finance communities?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm sm:text-base">
                  We&apos;ve been building this community since 2022 with one core principle: we&apos;re all students here. No gurus, no hierarchy, just genuine peer-to-peer learning. We cover both traditional markets (stocks) and digital assets (crypto, Web3) in one supportive environment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="glass border-[#FF5900]/10 rounded-lg px-4 sm:px-6 shadow-glow-orange hover:shadow-glow-orange-lg transition-shadow duration-200">
                <AccordionTrigger className="text-gray-900 hover:text-[#FF5900] text-base sm:text-lg accordion-trigger">
                  What topics do you cover in the community?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm sm:text-base">
                  Our community covers stocks, cryptocurrencies, and Web3 developments. We have members specializing in technical analysis, fundamental research, and market analysis. Discussions range from beginner basics to advanced strategies across both traditional and digital assets.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="glass border-[#FF5900]/10 rounded-lg px-4 sm:px-6 shadow-glow-orange hover:shadow-glow-orange-lg transition-shadow duration-200">
                <AccordionTrigger className="text-gray-900 hover:text-[#FF5900] text-base sm:text-lg accordion-trigger">
                  Which platforms should I join and what&apos;s the difference?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm sm:text-base">
                  We&apos;re active across three platforms: Telegram for daily discussions and quick updates, Discord for more structured community interactions, and Instagram for educational content and market insights. Start with whichever platform you prefer, or join multiple for the full experience.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <footer className="py-8 px-6 sm:px-4">
          <div className="container mx-auto text-center">
            <Link href="/" className="flex items-center justify-center space-x-2 mb-4">
              <Image src="/android-chrome-192x192.png" width={20} height={20} className="sm:w-6 sm:h-6" alt="logo" />
              <span className="text-base sm:text-lg font-bold text-[#FF5900]">Money Hunter</span>
            </Link>

            <div className="flex justify-center space-x-4 sm:space-x-6 mb-4 text-gray-600 text-sm sm:text-base">
              <a href="https://t.me/moneyhunteridn" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">Telegram</a>
              <a href="https://discord.gg/moneyhunter" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">Discord</a>
              <a href="https://instagram.com/moneyhunteridn" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">Instagram</a>
              <a href="https://x.com/moneyhunteridn" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">X (Twitter)</a>
            </div>

            <div className="flex justify-center space-x-2 sm:space-x-4 text-gray-400 text-xs sm:text-sm">
              <span>&copy; 2025 Money Hunter</span>
              <span>•</span>
              <Link href="#" className="hover:text-gray-600">Community Guidelines</Link>
            </div>
          </div>
        </footer>
      </div >
    </div >
  );
}