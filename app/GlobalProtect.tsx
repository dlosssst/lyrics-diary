"use client";
import { useEffect } from "react";

export default function GlobalProtect() {
  useEffect(() => {
    // 禁止右键
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });

    // 禁止选中文字
    document.body.style.userSelect = "none";

    // 禁止Ctrl+C复制
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey && (e.key === "c" || e.key === "u" || e.key === "s")) {
        e.preventDefault();
      }
    });
  }, []);

  return null;
}