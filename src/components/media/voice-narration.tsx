"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VoiceNarrationProps {
  src: string;
  label?: string;
}

export function VoiceNarration({ src, label = "Listen to this section" }: VoiceNarrationProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;

    audio.addEventListener("canplaythrough", () => setLoaded(true));
    audio.addEventListener("timeupdate", () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    });
    audio.addEventListener("ended", () => {
      setPlaying(false);
      setProgress(0);
    });
    audio.addEventListener("error", () => {
      setError(true);
      setPlaying(false);
    });

    audio.src = src;
    audio.preload = "metadata";

    return () => {
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
    };
  }, [src]);

  const toggle = () => {
    if (!audioRef.current || error) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => {
        setError(true);
        setPlaying(false);
      });
      setPlaying(true);
    }
  };

  if (error) {
    return (
      <div className="flex items-center gap-3 rounded-[var(--radius)] border border-border bg-muted/30 px-4 py-2.5">
        <VolumeX className="h-4 w-4 shrink-0 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Audio narration coming soon</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 rounded-[var(--radius)] border border-primary-light bg-primary-light/30 px-4 py-2.5">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggle}
        disabled={!loaded && !playing}
        className="h-8 w-8 shrink-0"
      >
        {playing ? (
          <Pause className="h-4 w-4 text-primary" />
        ) : (
          <Play className="h-4 w-4 text-primary" />
        )}
      </Button>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 text-sm text-primary font-medium">
          <Volume2 className="h-3.5 w-3.5 shrink-0" />
          {label}
        </div>
        <div className="mt-1 h-1 rounded-full bg-primary/20">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
