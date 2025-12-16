"use client"

import { useState, useEffect, useRef } from "react"

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorTrailRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })

      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }

      if (cursorTrailRef.current) {
        cursorTrailRef.current.style.left = `${e.clientX - 12}px`
        cursorTrailRef.current.style.top = `${e.clientY - 12}px`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden cursor-none">
      <div
        ref={cursorTrailRef}
        className="pointer-events-none fixed w-6 h-6 rounded-full mix-blend-lighten opacity-40 z-50 blur-sm"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.6) 0%, rgba(168,85,247,0.2) 100%)",
        }}
      />
      <div
        ref={cursorRef}
        className="pointer-events-none fixed w-8 h-8 border-2 border-cyan-400 rounded-full mix-blend-screen opacity-90 transition-opacity duration-300 z-50 shadow-lg shadow-cyan-400/50"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-blue-950 opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-700/15 via-transparent to-purple-700/15" />

          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-600/25 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />

          {/* Energy grid pattern overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-600/5 via-transparent to-purple-600/5" />
        </div>

        {/* Content Grid */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              {/* Pill Label */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/60 bg-cyan-400/15 w-fit backdrop-blur-sm">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-cyan-300">New - VR + OTT in One Box</span>
              </div>

              {/* Main Heading - Bigger and more centered on mobile */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-balance">
                LIBERTY
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Infinite Reality
                </span>
                <br />
                <span className="text-4xl md:text-5xl lg:text-6xl">in a Single Device</span>
              </h1>

              {/* Subtext */}
              <p className="text-lg md:text-xl text-gray-400 max-w-md leading-relaxed">
                Bundle VR gaming, OTT streaming, and cinematic experiences in one seamless subscription. Your gateway to
                infinite worlds.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-bold rounded-full hover:shadow-xl hover:shadow-cyan-400/70 hover:scale-110 transition-all duration-300 active:scale-95">
                  Get LIBERTY Now
                </button>
                <button className="px-8 py-4 border-2 border-purple-400 text-purple-300 font-bold rounded-full hover:bg-purple-400/15 hover:shadow-lg hover:shadow-purple-400/60 hover:scale-110 transition-all duration-300 active:scale-95 backdrop-blur-sm">
                  View Plans
                </button>
              </div>
            </div>

            {/* Right Content - Floating Device */}
            <div className="relative h-full min-h-96 flex items-center justify-center">
              <div className="relative group">
                {/* Multiple glow layers for depth */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-2xl blur-3xl opacity-60 group-hover:opacity-80 transition duration-1000 animate-float" />
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur-2xl opacity-30 animate-pulse" />

                {/* Device container */}
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl p-8 border border-purple-500/60 backdrop-blur-md space-y-6 hover:-translate-y-3 transition duration-500 shadow-2xl shadow-purple-500/30">
                  {/* Device visual - more prominent */}
                  <div className="w-64 h-40 bg-gradient-to-br from-cyan-500/40 to-purple-500/40 rounded-lg border border-cyan-400/40 flex items-center justify-center shadow-inner shadow-cyan-400/20">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-cyan-300 mb-2 drop-shadow-lg drop-shadow-cyan-400/50">
                        ◆
                      </div>
                      <p className="text-sm text-cyan-300 font-semibold">LIBERTY</p>
                    </div>
                  </div>

                  {/* Floating tags - more prominent and spread out */}
                  <div className="space-y-3">
                    <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/25 border border-cyan-400/60 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/40 transition shadow-lg shadow-cyan-400/20">
                      4K HDR
                    </div>
                    <div className="inline-block px-4 py-2 rounded-full bg-purple-500/25 border border-purple-400/60 text-xs font-semibold text-purple-300 hover:bg-purple-500/40 transition ml-2 shadow-lg shadow-purple-400/20">
                      Spatial Audio
                    </div>
                    <div className="inline-block px-4 py-2 rounded-full bg-pink-500/25 border border-pink-400/60 text-xs font-semibold text-pink-300 hover:bg-pink-500/40 transition ml-2 shadow-lg shadow-pink-400/20">
                      Cloud Gaming
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Why LIBERTY?</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Experience the future of entertainment with cutting-edge technology and seamless integration
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🎮",
                title: "All-in-One OTT Hub",
                desc: "Stream major platforms from one unified dashboard",
                glow: "cyan",
              },
              {
                icon: "🥽",
                title: "Immersive VR Worlds",
                desc: "Low-latency VR experiences with stunning graphics",
                glow: "purple",
              },
              {
                icon: "🔊",
                title: "Cinematic Audio",
                desc: "3D spatial sound for immersive audio experience",
                glow: "pink",
              },
              {
                icon: "👥",
                title: "Profiles for Everyone",
                desc: "Different spaces for all family members",
                glow: "blue",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`group relative p-6 rounded-xl border border-gray-700 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm hover:border-${feature.glow}-400 transition duration-300 hover:shadow-lg hover:shadow-${feature.glow}-400/20 hover:-translate-y-1`}
              >
                {/* Glow on hover */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r from-${feature.glow}-600 to-${feature.glow}-400 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition duration-300`}
                />

                <div className="relative z-10 space-y-3">
                  <div className="text-3xl">{feature.icon}</div>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Built for the Next Era of Entertainment</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Highlights */}
            <div className="space-y-4">
              {[
                "Up to 120fps in VR",
                "Over 50+ integrated OTT and game services",
                "AI-curated recommendations",
                "Multi-room streaming capability",
              ].map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-lg border border-gray-700/50 bg-gradient-to-r from-slate-800/30 to-transparent hover:border-cyan-400/50 transition group cursor-pointer"
                >
                  <div className="text-cyan-400 font-bold text-lg mt-1 group-hover:scale-110 transition">✓</div>
                  <div>
                    <p className="font-semibold text-white group-hover:text-cyan-300 transition">{highlight}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Spec Card */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/30 to-purple-600/30 rounded-2xl blur-xl" />
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 border border-purple-500/50 backdrop-blur-sm space-y-6">
                <h3 className="text-2xl font-bold">Specifications</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700/50">
                    <span className="text-gray-400">Resolution Support</span>
                    <span className="font-semibold text-cyan-400">Up to 8K</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700/50">
                    <span className="text-gray-400">Latency</span>
                    <span className="font-semibold text-purple-400">{"<"}20ms</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-700/50">
                    <span className="text-gray-400">Audio Type</span>
                    <span className="font-semibold text-pink-400">Spatial 3D</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Refresh Rate</span>
                    <span className="font-semibold text-cyan-400">120fps</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Choose Your Reality Plan</h2>
            <p className="text-lg text-gray-400">Select the perfect plan for your entertainment journey</p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Basic",
                price: "₹5,000",
                badge: false,
                features: ["Essential OTT content access", "Starter VR experiences", "HD streaming (1080p)"],
                highlight: false,
              },
              {
                name: "Plus",
                price: "₹8,000",
                badge: true,
                features: ["Expanded OTT library", "Multiplayer VR games", "4K HDR streaming"],
                highlight: true,
              },
              {
                name: "Pro",
                price: "₹9,999",
                badge: false,
                features: ["All worlds unlocked", "Priority servers", "Exclusive early access drops"],
                highlight: false,
              },
            ].map((plan, idx) => (
              <div key={idx} className={`relative group ${plan.highlight ? "md:scale-105" : ""}`}>
                {plan.highlight && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-500" />
                )}

                <div
                  className={`relative rounded-2xl border transition duration-300 ${
                    plan.highlight
                      ? "bg-gradient-to-br from-slate-800 to-slate-900 border-purple-500/80 shadow-2xl"
                      : "bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-gray-700 hover:border-gray-600"
                  } p-8 space-y-6`}
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-sm font-bold text-white">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-3 text-gray-300">
                        <span className="text-cyan-400">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-lg font-bold transition duration-300 ${
                      plan.highlight
                        ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-black hover:shadow-lg hover:shadow-cyan-400/50 hover:scale-105"
                        : "border border-gray-600 text-white hover:border-gray-500 hover:bg-gray-900/50"
                    }`}
                  >
                    Select Plan
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Device Price */}
          <div className="text-center p-6 rounded-xl border border-gray-700 bg-gradient-to-r from-slate-800/30 to-transparent">
            <p className="text-gray-400">LIBERTY Headset</p>
            <p className="text-3xl font-bold text-cyan-400">₹55,000</p>
            <p className="text-sm text-gray-500 mt-1">One-time device price</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-gray-800 bg-gradient-to-b from-slate-900 to-black">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Left */}
            <div className="space-y-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                LIBERTY
              </h3>
              <p className="text-gray-400">Made with pride in India</p>
            </div>

            {/* Right - Links */}
            <div className="flex flex-wrap gap-6 md:justify-end">
              {["Features", "Pricing", "Support", "About"].map((link) => (
                <a key={link} href="#" className="text-gray-400 hover:text-cyan-400 transition duration-300">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-600">© 2025 LIBERTY. All rights reserved.</p>
            <div className="flex gap-4">
              {["𝕏", "f", "in"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 transition"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Global Styles */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        * {
          cursor: none;
        }

        /* Custom cursor glow effect */
        @keyframes cursor-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(34, 211, 238, 0.5), inset 0 0 10px rgba(34, 211, 238, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(34, 211, 238, 0.7), inset 0 0 15px rgba(34, 211, 238, 0.4);
          }
        }
      `}</style>
    </div>
  )
}
