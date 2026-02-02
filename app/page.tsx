"use client";

import { Badge } from "@/components/ui/badge";
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
import { FadeInSection } from "@/components/fade-in-section";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="fixed inset-0 bg-gradient-to-r from-[#FF5900]/8 via-white to-[#FF5900]/8"></div>
      <div className="relative">
        <section className="py-16 sm:py-20 md:py-10 px-6 sm:px-4 min-h-screen flex items-center justify-center">
          <div className="container mx-auto text-center max-w-4xl">
            <div className="mb-6">
              <Badge className="bg-[#FF5900]/10 text-[#FF5900] border-[#FF5900]/30 mb-4 shadow-md shadow-[#FF5900]/10 text-sm sm:text-base">
                <Bitcoin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                2,000+ Learners • Since 2022
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text">
              Web3 & Finance Community
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              A knowledge-sharing community where we&apos;re all students. Learn about stocks, cryptocurrencies, market analysis, and Web3 developments through peer-to-peer discussions and educational content.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a
                href="#features"
                className="inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg font-semibold rounded-lg bg-[#FF5900] text-white hover:bg-[#FF5900]/80 hover:shadow-lg hover:shadow-[#FF5900]/25 transition-all duration-200 shadow-md w-full sm:w-auto"
              >
                Join Our Community
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#faq"
                className="inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg font-semibold rounded-lg border-2 border-[#FF5900] text-[#FF5900] bg-white hover:bg-[#FF5900]/10 hover:text-[#FF5900] hover:shadow-lg hover:shadow-[#FF5900]/25 transition-all duration-200 shadow-sm group w-full sm:w-auto"
              >
                View FAQ
              </a>
            </div>
          </div>
        </section >

        <section id="features" className="py-24 sm:py-36 md:py-40 px-6 sm:px-4 flex items-center justify-center">
          <FadeInSection>
            <div className="container mx-auto max-w-6xl">
              <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="md:col-span-1 lg:col-span-7">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                    Knowledge Sharing{" "}
                    <span className="text-[#FF5900]">Community</span>
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                    Connect with 2,000+ learners exploring stocks, crypto, and Web3.
                    Share knowledge, learn from peers, and grow together in a supportive
                    environment where everyone&apos;s a student.
                  </p>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#FF5900] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Multi-Asset Focus</h3>
                        <p className="text-gray-600 text-sm sm:text-base">Stocks, crypto, and Web3 discussions in one place</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#FF5900] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Peer Learning</h3>
                        <p className="text-gray-600 text-sm sm:text-base">Everyone&apos;s a student, no gurus or mentors</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#FF5900] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Education Focus</h3>
                        <p className="text-gray-600 text-sm sm:text-base">Knowledge sharing over profit showing</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-1 lg:col-span-5">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
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
          </FadeInSection>
        </section>

        <section id="faq" className="py-20 sm:py-24 md:py-40 px-6 sm:px-4 flex items-center justify-center">
          <FadeInSection>
            <div className="container mx-auto max-w-3xl px-4 sm:px-0">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
                  Frequently Asked Questions
                </h2>
                <p className="pt-4 text-lg sm:text-xl text-gray-600">
                  Everything you need to know about Money Hunter community.
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                <AccordionItem value="item-1" className="bg-white/80 backdrop-blur-sm border-[#FF5900]/10 rounded-lg px-4 sm:px-6 shadow-md shadow-[#FF5900]/5 hover:shadow-lg hover:shadow-[#FF5900]/10 transition-shadow duration-200">
                  <AccordionTrigger className="text-gray-900 hover:text-[#FF5900] text-base sm:text-lg accordion-trigger">
                    What makes Money Hunter different from other finance communities?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm sm:text-base">
                    We&apos;ve been building this community since 2022 with one core principle: we&apos;re all students here. No gurus, no hierarchy, just genuine peer-to-peer learning. We cover both traditional markets (stocks) and digital assets (crypto, Web3) in one supportive environment.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-white/80 backdrop-blur-sm border-[#FF5900]/10 rounded-lg px-4 sm:px-6 shadow-md shadow-[#FF5900]/5 hover:shadow-lg hover:shadow-[#FF5900]/10 transition-shadow duration-200">
                  <AccordionTrigger className="text-gray-900 hover:text-[#FF5900] text-base sm:text-lg accordion-trigger">
                    What topics do you cover in the community?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm sm:text-base">
                    Our community covers stocks, cryptocurrencies, and Web3 developments. We have members specializing in technical analysis, fundamental research, and market analysis. Discussions range from beginner basics to advanced strategies across both traditional and digital assets.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-white/80 backdrop-blur-sm border-[#FF5900]/10 rounded-lg px-4 sm:px-6 shadow-md shadow-[#FF5900]/5 hover:shadow-lg hover:shadow-[#FF5900]/10 transition-shadow duration-200">
                  <AccordionTrigger className="text-gray-900 hover:text-[#FF5900] text-base sm:text-lg accordion-trigger">
                    Which platforms should I join and what&apos;s the difference?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-sm sm:text-base">
                    We&apos;re active across three platforms: Telegram for daily discussions and quick updates, Discord for more structured community interactions, and Instagram for educational content and market insights. Start with whichever platform you prefer, or join multiple for the full experience.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </FadeInSection>
        </section>

        <footer className="py-8 px-6 sm:px-4">
          <div className="container mx-auto text-center">
            <Link href="/" className="flex items-center justify-center space-x-2 mb-4">
              <Image src="/android-chrome-192x192.png" width={20} height={20} className="sm:w-6 sm:h-6" alt="logo" />
              <span className="text-base sm:text-lg font-bold text-[#FF5900]">Money Hunter</span>
            </Link>

            <div className="flex justify-center space-x-4 sm:space-x-6 mb-4 text-gray-600 text-sm sm:text-base">
              <a href="https://t.me/moneyhunteridn" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">Telegram</a>
              <a href="https://discord.gg/PcrwafBjAA" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">Discord</a>
              <a href="https://instagram.com/moneyhunteridn" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">Instagram</a>
              <a href="https://x.com/moneyhunteridn" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">X (Twitter)</a>
            </div>

            <div className="flex justify-center space-x-2 sm:space-x-4 text-gray-400 text-xs sm:text-sm">
              <span>&copy; 2026 Money Hunter</span>
              <span>•</span>
              <Link href="#" className="hover:text-gray-600">Community Guidelines</Link>
            </div>
          </div>
        </footer>
      </div>
      <ScrollToTop />
    </div>
  );
}