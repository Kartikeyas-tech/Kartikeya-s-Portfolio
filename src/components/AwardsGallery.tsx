import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface AchievementItem {
  id: number;
  fileName: string;
}

export default function AwardsGallery() {
  const ids = Array.from({ length: 31 }, (_, i) => i + 1).filter((id) => id !== 29);
  const achievements: AchievementItem[] = ids.map((id) => ({
    id,
    fileName: `gallery${id}.jpeg`,
  }));

  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="relative w-full px-1 sm:px-3">
      {/* CLEAN MASONRY GALLERY WITH ZERO INNER PADDING / EXTRA SPACES */}
      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4">
        {achievements.map((item, index) => {
          const hasError = !!imageErrors[item.id];
          const imagePath = new URL(`../assets/images/${item.fileName}`, import.meta.url).href;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (index % 5) * 0.04 }}
              className="break-inside-avoid relative rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200"
            >
              {!hasError ? (
                <img
                  src={imagePath}
                  alt={`Gallery photo ${item.id}`}
                  onError={() => handleImageError(item.id)}
                  className="w-full h-auto block object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-32 flex flex-col items-center justify-center p-3 text-center bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-1">
                    <ImageIcon className="w-4 h-4 text-emerald-700" />
                  </div>
                  <span className="font-mono text-[9px] text-slate-600 font-bold">{item.fileName}</span>
                  <span className="font-mono text-[8px] text-slate-400">[ PENDING ]</span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}


