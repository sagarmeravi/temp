"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Rss, Twitter } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AboutPage() {
  const router = useRouter()

  const handleSubscribeClick = () => {
    router.push("/#newsletter")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="container mx-auto py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            Data<span className="text-blue-500">Analytics</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/articles/" className="text-gray-400 hover:text-white transition-colors">
              Articles
            </Link>
            <Link href="/topics/" className="text-gray-400 hover:text-white transition-colors">
              Topics
            </Link>
            <Link href="/about/" className="text-white transition-colors border-b-2 border-blue-500 pb-1">
              About
            </Link>
          </nav>
          <Button
            variant="outline"
            className="border-blue-500 text-blue-500 hover:bg-blue-950 hover:text-white bg-transparent"
            onClick={handleSubscribeClick}
          >
            Subscribe
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About This Data Analytics Project</h1>

          <div className="prose prose-invert prose-sky max-w-none">
            <p className="text-xl text-gray-300 mb-8">
              This project showcases end-to-end data analytics: exploratory analysis, modeling, and clear, interactive
              visualizations built for insight and decision-making.
            </p>

            <h2>Our Mission</h2>
            <p>
              Provide insightful, accessible, and practical analytics content—bridging the gap between raw data and
              real-world decisions. We emphasize clarity, transparency, and measurable outcomes.
            </p>

            <h2>What We Cover</h2>
            <p>We focus on several key areas in the analytics lifecycle:</p>

            <ul>
              <li>
                <strong>Exploratory Analysis</strong>: Profiling datasets, detecting trends and anomalies, and forming
                hypotheses.
              </li>
              <li>
                <strong>Visualization</strong>: Communicating insights effectively through clear charts and dashboards.
              </li>
              <li>
                <strong>Modeling</strong>: Building and evaluating predictive and descriptive models where appropriate.
              </li>
              <li>
                <strong>Ethics</strong>: Responsible data use, privacy, and fair evaluation.
              </li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              Have a question, suggestion, or want to collaborate? Reach out at{" "}
              <a href="mailto:ameyaudeshmukh@gmail.com" className="text-blue-400 hover:text-blue-300">
                ameyaudeshmukh@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="text-xl font-bold tracking-tighter">
                Data<span className="text-blue-500">Analytics</span>
              </Link>
              <p className="text-gray-400 text-sm">
                Exploring the cutting edge of artificial intelligence and machine learning.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Rss className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4">Topics</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Artificial Intelligence
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Generative AI
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Computer Vision
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Deep Learning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Machine Learning
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Research Papers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Code Samples
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Datasets
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Tools
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>ameyaudeshmukh@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Data Analytics Project. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
