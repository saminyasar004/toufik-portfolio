import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
    src: string;
    className?: string;
    isActive: boolean;
}

export function VideoPlayer({ src, className, isActive }: VideoPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            if (isActive) {
                // videoRef.current.play();
                // videoRef.current.muted = false;
                // setIsPlaying(true);
                // setIsMuted(false);
            } else {
                videoRef.current.pause();
                videoRef.current.muted = true;
                setIsPlaying(false);
                setIsMuted(true);
            }
        }
    }, [isActive]);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
                setIsMuted(false);
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <div className={cn("relative w-full h-full", className)}>
            <video
                ref={videoRef}
                src={src}
                className="w-full h-full object-cover rounded-lg"
                muted={isMuted}
                playsInline
            />

            {/* Play/Pause Button Overlay */}
            <button
                onClick={togglePlay}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                 w-16 h-16 rounded-full bg-black/50 hover:bg-black/70 
                 flex items-center justify-center transition-all
                 border-2 border-white"
            >
                {isPlaying ? (
                    <Pause className="w-8 h-8 text-white" />
                ) : (
                    <Play className="w-8 h-8 text-white ml-1" />
                )}
            </button>

            {/* Mute Button */}
            <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 w-10 h-10 rounded-full 
                 bg-black/50 hover:bg-black/70 
                 flex items-center justify-center transition-all"
            >
                {isMuted ? (
                    <VolumeX className="w-5 h-5 text-white" />
                ) : (
                    <Volume2 className="w-5 h-5 text-white" />
                )}
            </button>
        </div>
    );
}
