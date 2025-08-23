"use client";

import { Code, Cpu, Database, Network } from "lucide-react";
import {
  SiJavascript,
  SiKubernetes,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";

export default function CircleDeco() {
  return (
    <section className="relative mt-14">
      <div className="mx-auto h-[82vw] w-full max-w-screen-2xl overflow-hidden px-6 pt-12 sm:h-[min(70vw,64rem)] sm:overflow-visible sm:pt-16 md:px-8 lg:px-10">
        <div className="relative z-10 aspect-square w-full min-w-[200vw] -translate-x-[55vw] sm:min-w-0 sm:-translate-y-[24%] sm:translate-x-0">
          {/* Circular nested rings */}
          <div className="absolute inset-0 h-full w-full rounded-full border border-x-2 border-gray-200 border-x-gray-300/75 p-[10%] sm:[mask-image:linear-gradient(transparent_15%,white_25%,white_85%,transparent_95%)]">
            <div className="h-full w-full rounded-full border border-x-2 border-gray-200 border-x-gray-300/75 p-[12.25%]">
              <div className="h-full w-full rounded-full border border-x-2 border-gray-200 border-x-gray-300/75" />
            </div>
          </div>

          {/* Floating tech icons with fade effect /}
          <div className="absolute inset-0">
            {/ Outer Orbit */}
            <div className="absolute right-[10%] top-[50%] text-yellow-500 text-4xl opacity-80 hover:opacity-100 transition">
              <SiJavascript />
            </div>

            <div className="absolute left-[15%] top-[30%] text-blue-600 text-4xl opacity-80 hover:opacity-100 transition">
              <SiTypescript />
            </div>

            <div className="absolute left-[40%] top-[10%] text-cyan-500 text-4xl opacity-80 hover:opacity-100 transition">
              <SiReact />
            </div>

            <div className="absolute right-[20%] top-[20%] text-green-600 text-4xl opacity-80 hover:opacity-100 transition">
              <SiNodedotjs />
            </div>

            <div className="absolute left-[5%] bottom-[20%] text-purple-600 text-4xl opacity-80 hover:opacity-100 transition">
              <Database />
            </div>

            <div className="absolute left-[50%] bottom-[10%] text-gray-700 text-4xl opacity-80 hover:opacity-100 transition">
              <Cpu />
            </div>

            <div className="absolute right-[30%] bottom-[15%] text-pink-500 text-4xl opacity-80 hover:opacity-100 transition">
              <Code />
            </div>

            <div className="absolute right-[5%] top-[30%] text-indigo-500 text-4xl opacity-80 hover:opacity-100 transition">
              <Network />
            </div>

            <div className="absolute left-[20%] bottom-[35%] text-blue-700 text-3xl opacity-70 hover:opacity-100 transition">
              <SiKubernetes />
            </div>
          </div>
        </div>
     
    </section>
  );
}