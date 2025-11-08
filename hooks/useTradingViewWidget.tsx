"use client";

import { useEffect, useRef } from "react";

import React from "react";

const useTradingViewWidget = (scriptUrl: string, config: Record<string, unknown>, height = 600) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return; //chart already exists
    if (containerRef.current.dataset.loaded) return;
    containerRef.current.innerHTML = `<div class="tradingview-widget-container__widget" width="100%" height:${height}px ></div>`;

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.innerHTML = JSON.stringify(config);

    // append properties to containerref
    containerRef.current.appendChild(script);
    containerRef.current.dataset.loaded = "true";

    //clean up on unmount
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        delete containerRef.current.dataset.loaded;
      }
    };
  }, [scriptUrl, config, height]);

  return containerRef;
};

export default useTradingViewWidget;
