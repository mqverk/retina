import { memo } from 'react'
import { ProcessingStats } from '../types/types'

interface HeaderProps extends ProcessingStats {
    width: number
    height: number
}

function Header({ fps, renderTime, width, height }: HeaderProps) {
    return (
        <div className="fixed top-4 left-4 z-10 flex flex-col gap-3 max-w-[calc(100vw-100px)]">
            <div className="flex items-center gap-3 rounded-xl bg-black/60 px-4 py-3 backdrop-blur-md border border-green-500/40 shadow-xl shadow-green-500/10">
                <img src="/assets/logo.webp" alt="retina Logo" className="h-9 w-9 object-contain" />
                <h1 className="text-xl md:text-2xl font-bold leading-none tracking-wider text-green-400">
                    RETINA
                </h1>
            </div>

            <div className="flex gap-4 text-[10px] md:text-xs font-mono text-green-400 bg-black/60 px-4 py-2.5 rounded-xl backdrop-blur-md border border-green-500/40 shadow-xl shadow-green-500/10">
                <span className="flex items-center gap-1.5">
                    <span className="opacity-60">FPS:</span>
                    <span className="font-semibold">{Math.floor(fps)}</span>
                </span>
                <span className="text-green-600/50">|</span>
                <span className="flex items-center gap-1.5">
                    <span className="opacity-60">RENDER:</span>
                    <span className="font-semibold">{Math.floor(renderTime)}ms</span>
                </span>
                <span className="text-green-600/50">|</span>
                <span className="flex items-center gap-1.5">
                    <span className="opacity-60">RES:</span>
                    <span className="font-semibold">
                        {width} × {height}
                    </span>
                </span>
            </div>
        </div>
    )
}

export default memo(Header)
