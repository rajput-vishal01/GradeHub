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
        <div className="relative z-10 aspect-square w-full min-w-[200vw] -translate-x-[55vw] sm:min-w-0 sm:translate-x-0 sm:-translate-y-[24%]">
          {/* Circular nested rings */}
          <div className="absolute inset-0 h-full w-full rounded-full border border-x-2 border-gray-200 border-x-gray-300/75 p-[10%] sm:[mask-image:linear-gradient(transparent_15%,white_25%,white_85%,transparent_95%)]">
            <div className="h-full w-full rounded-full border border-x-2 border-gray-200 border-x-gray-300/75 p-[12.25%]">
              <div className="h-full w-full rounded-full border border-x-2 border-gray-200 border-x-gray-300/75" />
            </div>
          </div>

          {/* Floating tech icons with fade effect /}
          <div className="absolute inset-0">
            {/ Outer Orbit */}
          <div className="absolute top-[50%] right-[10%] text-4xl text-yellow-500 opacity-80 transition hover:opacity-100">
            <SiJavascript />
          </div>

          <div className="absolute top-[30%] left-[15%] text-4xl text-blue-600 opacity-80 transition hover:opacity-100">
            <SiTypescript />
          </div>

          <div className="absolute top-[10%] left-[40%] text-4xl text-cyan-500 opacity-80 transition hover:opacity-100">
            <SiReact />
          </div>

          <div className="absolute top-[20%] right-[20%] text-4xl text-green-600 opacity-80 transition hover:opacity-100">
            <SiNodedotjs />
          </div>

          <div className="absolute bottom-[20%] left-[5%] text-4xl text-purple-600 opacity-80 transition hover:opacity-100">
            <Database />
          </div>

          <div className="absolute bottom-[10%] left-[50%] text-4xl text-gray-700 opacity-80 transition hover:opacity-100">
            <Cpu />
          </div>

          <div className="absolute right-[30%] bottom-[15%] text-4xl text-pink-500 opacity-80 transition hover:opacity-100">
            <Code />
          </div>

          <div className="absolute top-[30%] right-[5%] text-4xl text-indigo-500 opacity-80 transition hover:opacity-100">
            <Network />
          </div>

          <div className="absolute bottom-[35%] left-[20%] text-3xl text-blue-700 opacity-70 transition hover:opacity-100">
            <SiKubernetes />
          </div>
        </div>
      </div>
    </section>
  );
}
