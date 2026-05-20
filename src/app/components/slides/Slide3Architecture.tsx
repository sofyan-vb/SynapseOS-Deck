"use client";

import { useState } from "react";
import { Network, Database, Cpu, Wrench, RefreshCw, Terminal, CheckCircle2, Play } from "lucide-react";

export default function Slide3Architecture() {
  const [activeNode, setActiveNode] = useState("planner");

  const nodes = {
    input: {
      name: "1. User Input",
      icon: <Terminal size={18} color="var(--accent-secondary)" />,
      role: "Gerbang Utama Permintaan",
      desc: "Menerima prompt, parameter tugas, berkas data, serta batasan instruksi dari pengguna manusia.",
      stack: "Next.js UI / WebSocket / REST API",
      input: "Bahasa manusia / Kode / File",
      output: "Struktur prompt awal"
    },
    planner: {
      name: "2. Agent Planner",
      icon: <Network size={18} color="var(--accent-color)" />,
      role: "Dekongestasi & Strategi",
      desc: "Memecah tugas kompleks menjadi sub-tugas yang lebih kecil (Task Decomposition) dan menentukan urutan eksekusi.",
      stack: "ReAct Framework / Chain-of-Thought / Plan-and-Solve",
      input: "Prompt Awal Pengguna",
      output: "Daftar sub-tugas terencana"
    },
    llm: {
      name: "3. LLM Engine",
      icon: <Cpu size={18} color="#ef4444" />,
      role: "Mesin Berpikir & Kognitif",
      desc: "Model bahasa besar yang memproses penalaran kontekstual, merumuskan respons dasar, dan membuat keputusan pemanggilan tools.",
      stack: "Gemini 1.5 Pro / GPT-4o / Claude 3.5 Sonnet",
      input: "Sub-tugas + Memori relevan",
      output: "Instruksi tindakan / Pemanggilan Tool"
    },
    memory: {
      name: "4. Memory & RAG",
      icon: <Database size={18} color="#eab308" />,
      role: "Kontekstualisasi & Retensi",
      desc: "Menyimpan riwayat obrolan (short-term) dan dokumen pengetahuan eksternal (long-term) menggunakan Vector Database.",
      stack: "ChromaDB / Pinecone / Semantic Cache",
      input: "Kueri teks / Hasil eksekusi",
      output: "Dokumen relevan / Riwayat riil"
    },
    tools: {
      name: "5. Tools & APIs",
      icon: <Wrench size={18} color="#10b981" />,
      role: "Kemampuan Aksi Eksternal",
      desc: "Kumpulan modular fungsi eksternal untuk melakukan aksi nyata seperti browsing web, eksekusi kode python sandbox, dan query DB.",
      stack: "Secure Sandbox Exec / Web Search / Custom APIs",
      input: "Nama Tool + Argumen JSON",
      output: "Hasil eksekusi raw / Logs"
    },
    evaluator: {
      name: "6. Self-Corrector",
      icon: <RefreshCw size={18} color="#f97316" />,
      role: "Evaluasi & Koreksi Diri",
      desc: "Mengevaluasi apakah hasil eksekusi tool sudah menyelesaikan sub-tugas. Jika salah, memicu loop koreksi otonom.",
      stack: "Self-Reflection Prompting / Unit Test Validator",
      input: "Hasil eksekusi + Target tugas",
      output: "Konfirmasi selesai / Loop koreksi"
    },
    output: {
      name: "7. Final Output",
      icon: <CheckCircle2 size={18} color="#06b6d4" />,
      role: "Penyajian Hasil Akhir",
      desc: "Mengonsolidasikan seluruh solusi sub-tugas menjadi satu kesatuan jawaban matang dan menyajikannya ke pengguna.",
      stack: "Streaming Markdown / JSON / Artifact View",
      input: "Hasil terverifikasi lengkap",
      output: "Solusi final terstruktur"
    }
  };

  const active = nodes[activeNode as keyof typeof nodes];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", height: "100%" }}>
      {/* Slide Title */}
      <div className="fade-in-up">
        <h2 style={{ fontSize: "2.2rem", fontWeight: 700 }}>
          Arsitektur Inti <span className="text-gradient">Neuralis OS</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem", marginTop: "4px" }}>
          Aliran data interaktif dari kernel OS hingga pemanggilan Sandbox API. Klik pada node diagram untuk membedah fungsinya.
        </p>
      </div>

      {/* Main Diagram Area */}
      <div className="diagram-canvas fade-in-up anim-delay-1">
        {/* SVG Flowchart */}
        <div className="diagram-svg-container glass-panel" style={{ padding: "10px" }}>
          <svg
            viewBox="0 0 780 380"
            width="100%"
            height="100%"
            style={{ overflow: "visible" }}
          >
            {/* SVG Definitions for Markers & Shadows */}
            <defs>
              <marker
                id="arrow"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--card-border)" />
              </marker>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* CONNECTION PATHS (FLOW LINES) */}
            {/* 1. Input -> Planner */}
            <path d="M 125,185 L 165,185" className={`flow-line ${activeNode === "input" || activeNode === "planner" ? "flow-line-active" : ""}`} markerEnd="url(#arrow)" />
            
            {/* 2. Planner -> LLM Engine */}
            <path d="M 285,185 L 325,185" className={`flow-line ${activeNode === "planner" || activeNode === "llm" ? "flow-line-active" : ""}`} markerEnd="url(#arrow)" />
            
            {/* 3. LLM Engine <-> Memory (Bidirectional) */}
            <path d="M 385,155 L 385,120" className={`flow-line ${activeNode === "llm" || activeNode === "memory" ? "flow-line-active" : ""}`} markerEnd="url(#arrow)" />
            <path d="M 385,120 L 385,155" className={`flow-line ${activeNode === "llm" || activeNode === "memory" ? "flow-line-active" : ""}`} markerEnd="url(#arrow)" />
            
            {/* 4. LLM Engine <-> Tools (Bidirectional) */}
            <path d="M 385,215 L 385,250" className={`flow-line ${activeNode === "llm" || activeNode === "tools" ? "flow-line-active" : ""}`} markerEnd="url(#arrow)" />
            <path d="M 385,250 L 385,215" className={`flow-line ${activeNode === "llm" || activeNode === "tools" ? "flow-line-active" : ""}`} markerEnd="url(#arrow)" />
            
            {/* 5. LLM Engine -> Evaluator */}
            <path d="M 445,185 L 485,185" className={`flow-line ${activeNode === "llm" || activeNode === "evaluator" ? "flow-line-active" : ""}`} markerEnd="url(#arrow)" />
            
            {/* 6. Evaluator -> Output */}
            <path d="M 605,185 L 645,185" className={`flow-line ${activeNode === "evaluator" || activeNode === "output" ? "flow-line-active" : ""}`} markerEnd="url(#arrow)" />

            {/* 7. LOOPBACK: Evaluator -> Planner (Feedback) */}
            <path 
              d="M 545,155 C 545,90 225,90 225,155" 
              className={`flow-line ${activeNode === "evaluator" ? "flow-line-active" : ""}`} 
              style={{ strokeDasharray: "6 4" }} 
              markerEnd="url(#arrow)" 
            />

            {/* INTERACTIVE NODE CARDS (SVG) */}
            
            {/* Node 1: Input */}
            <g className={`node-group ${activeNode === "input" ? "active" : ""}`} onClick={() => setActiveNode("input")}>
              <rect x="15" y="155" rx="10" ry="10" width="110" height="60" className="node-rect" style={{ stroke: activeNode === "input" ? "var(--accent-secondary)" : "var(--card-border)" }} />
              <text x="70" y="190" textAnchor="middle" className="node-text">1. Input</text>
            </g>

            {/* Node 2: Planner */}
            <g className={`node-group ${activeNode === "planner" ? "active" : ""}`} onClick={() => setActiveNode("planner")}>
              <rect x="165" y="155" rx="10" ry="10" width="120" height="60" className="node-rect" style={{ stroke: activeNode === "planner" ? "var(--accent-color)" : "var(--card-border)" }} />
              <text x="225" y="190" textAnchor="middle" className="node-text">2. Planner</text>
            </g>

            {/* Node 3: Memory (Top) */}
            <g className={`node-group ${activeNode === "memory" ? "active" : ""}`} onClick={() => setActiveNode("memory")}>
              <rect x="325" y="60" rx="10" ry="10" width="120" height="60" className="node-rect" style={{ stroke: activeNode === "memory" ? "#eab308" : "var(--card-border)" }} />
              <text x="385" y="95" textAnchor="middle" className="node-text">4. Memory</text>
            </g>

            {/* Node 4: LLM Engine (Center) */}
            <g className={`node-group ${activeNode === "llm" ? "active" : ""}`} onClick={() => setActiveNode("llm")}>
              <rect x="325" y="155" rx="10" ry="10" width="120" height="60" className="node-rect" style={{ stroke: activeNode === "llm" ? "#ef4444" : "var(--card-border)" }} />
              <text x="385" y="190" textAnchor="middle" className="node-text">3. LLM Engine</text>
            </g>

            {/* Node 5: Tools (Bottom) */}
            <g className={`node-group ${activeNode === "tools" ? "active" : ""}`} onClick={() => setActiveNode("tools")}>
              <rect x="325" y="250" rx="10" ry="10" width="120" height="60" className="node-rect" style={{ stroke: activeNode === "tools" ? "#10b981" : "var(--card-border)" }} />
              <text x="385" y="285" textAnchor="middle" className="node-text">5. Tools API</text>
            </g>

            {/* Node 6: Evaluator */}
            <g className={`node-group ${activeNode === "evaluator" ? "active" : ""}`} onClick={() => setActiveNode("evaluator")}>
              <rect x="485" y="155" rx="10" ry="10" width="120" height="60" className="node-rect" style={{ stroke: activeNode === "evaluator" ? "#f97316" : "var(--card-border)" }} />
              <text x="545" y="190" textAnchor="middle" className="node-text">6. Evaluator</text>
            </g>

            {/* Node 7: Output */}
            <g className={`node-group ${activeNode === "output" ? "active" : ""}`} onClick={() => setActiveNode("output")}>
              <rect x="645" y="155" rx="10" ry="10" width="120" height="60" className="node-rect" style={{ stroke: activeNode === "output" ? "#06b6d4" : "var(--card-border)" }} />
              <text x="705" y="190" textAnchor="middle" className="node-text">7. Output</text>
            </g>
          </svg>
        </div>

        {/* Dynamic Detail Card Sidebar */}
        <div className="diagram-sidebar glass-panel scale-in anim-delay-2">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ padding: "8px", borderRadius: "8px", background: "rgba(255,255,255,0.05)" }}>
              {active.icon}
            </div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>{active.name}</h3>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1px", color: "var(--text-secondary)", fontWeight: 700 }}>
              Peran Strategis
            </span>
            <span style={{ fontSize: "0.95rem", fontWeight: 600 }}>{active.role}</span>
          </div>

          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
            {active.desc}
          </p>

          <hr style={{ border: "none", borderTop: "1px solid var(--card-border)" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.85rem" }}>
            <div>
              <span style={{ display: "block", color: "var(--text-secondary)", fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Tech Stack / Protokol:
              </span>
              <code style={{ background: "rgba(0,0,0,0.2)", padding: "2px 6px", borderRadius: "4px", marginTop: "4px", display: "inline-block" }}>
                {active.stack}
              </code>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              <div>
                <span style={{ display: "block", color: "var(--text-secondary)", fontWeight: 600, fontSize: "0.75rem" }}>INPUT:</span>
                <span style={{ fontWeight: 500 }}>{active.input}</span>
              </div>
              <div>
                <span style={{ display: "block", color: "var(--text-secondary)", fontWeight: 600, fontSize: "0.75rem" }}>OUTPUT:</span>
                <span style={{ fontWeight: 500 }}>{active.output}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
