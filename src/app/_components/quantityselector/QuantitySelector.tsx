"use client"
import { useState } from "react";
import { Minus, Plus } from "lucide-react";

type QuantitySelectorProps = {
  max?: number;
  min?: number;
  onChange?: (value: number) => void;
};

export default function QuantitySelector({
  max = 220,
  min = 1,
  onChange,
}: QuantitySelectorProps) {
  const [qty, setQty] = useState(min);

  const update = (value: number) => {
    const next = Math.min(max, Math.max(min, value));
    setQty(next);
    onChange?.(next);
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center rounded-xl border border-gray-200 bg-white">
        <button
          type="button"
          onClick={() => update(qty - 1)}
          disabled={qty <= min}
          aria-label="Decrease quantity"
          className="flex h-12 w-14 items-center justify-center text-gray-500 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Minus size={18} />
        </button>

        <span className="w-10 text-center text-gray-800 tabular-nums">{qty}</span>

        <button
          type="button"
          onClick={() => update(qty + 1)}
          disabled={qty >= max}
          aria-label="Increase quantity"
          className="flex h-12 w-14 items-center justify-center text-gray-500 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Plus size={18} />
        </button>
      </div>

      <span className="text-sm text-gray-500">{max} available</span>
    </div>
  );
}